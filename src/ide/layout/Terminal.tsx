import React, { useState, useRef, useEffect } from "react";
import { X, ChevronUp, Plus, Trash2 } from "lucide-react";
import { useEditor } from "../EditorContext";

const LOGIN_TIME = new Date().toDateString();
const PROMPT = "binay@macbook-air portfolio-ide %";

const WELCOME: string[] = [
  `Last login: ${LOGIN_TIME} on ttys000`,
  `${PROMPT} npm start`,
  "",
  "> binay@1.2.0 start",
  "> vite --host 0.0.0.0",
  "",
  "  VITE v6.2.0  ready in 342 ms",
  "",
  "  ➜  Local:    http://localhost:3000/",
  "  ➜  Network:  http://192.168.1.5:3000/",
  "",
  "✓ Compiled successfully. Type 'help' to see commands.",
  "",
];

const TABS = ["Terminal", "Output", "Debug Console", "Problems"] as const;

export const Terminal: React.FC = () => {
  const { terminalVisible, toggleTerminal, terminalHeight } = useEditor();
  const [history, setHistory] = useState<string[]>(WELCOME);
  const [input, setInput] = useState("");
  const [active, setActive] = useState<typeof TABS[number]>("Terminal");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalVisible) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, terminalVisible]);

  if (!terminalVisible) return null;

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];
    switch (trimmed) {
      case "help":
        response = [
          "Available commands:",
          "  help     Show this help message",
          "  clear    Clear terminal history",
          "  whoami   Display current user",
          "  ls       List files",
          "  pwd      Print working directory",
          "  about    A short bio",
        ];
        break;
      case "clear": setHistory([]); return;
      case "whoami": response = ["binaykumardas"]; break;
      case "ls": response = ["src  public  node_modules  package.json  README.md  tsconfig.json"]; break;
      case "pwd": response = ["/Users/binaykumardas/Documents/portfolio-ide"]; break;
      case "about": response = ["Binay Kumar Das — Product Owner · AI Enthusiast · Full Stack Developer · Bengaluru, India"]; break;
      case "": break;
      default: response = [`zsh: command not found: ${trimmed}`];
    }
    setHistory((prev) => [...prev, `${PROMPT} ${cmd}`, ...response]);
  };

  return (
    <div
      className="border-t border-vscode-border bg-vscode-panel flex flex-col shrink-0"
      style={{ height: terminalHeight }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-between pl-3 pr-2 h-9 bg-vscode-sidebar text-[11px] uppercase tracking-wider border-b border-vscode-border select-none">
        <div className="flex items-center gap-5">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={(e) => { e.stopPropagation(); setActive(t); }}
              className={`pb-0.5 transition-colors ${active === t
                ? "text-vscode-text border-b-2 border-vscode-text"
                : "text-vscode-textMuted hover:text-vscode-text"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 text-vscode-textMuted">
          <button className="p-1 hover:bg-vscode-hover rounded" aria-label="New terminal"><Plus size={13} /></button>
          <button className="p-1 hover:bg-vscode-hover rounded" aria-label="Kill terminal"><Trash2 size={13} /></button>
          <button className="p-1 hover:bg-vscode-hover rounded" aria-label="Hide" onClick={(e) => { e.stopPropagation(); toggleTerminal(); }}><ChevronUp size={13} /></button>
          <button className="p-1 hover:bg-vscode-hover rounded" aria-label="Close" onClick={(e) => { e.stopPropagation(); toggleTerminal(); }}><X size={13} /></button>
        </div>
      </div>

      <div className="flex-1 px-3 py-2 font-mono text-[12.5px] overflow-y-auto overflow-x-hidden bg-vscode-bg text-vscode-text leading-relaxed">
        {active === "Terminal" ? (
          <>
            {history.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap">{line}</div>
            ))}
            <div className="flex items-center">
              <span className="mr-2 text-vscode-accent font-semibold">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { run(input); setInput(""); } }}
                className="bg-transparent outline-none flex-1 text-vscode-text font-mono"
                spellCheck={false}
                autoFocus
              />
            </div>
            <div ref={bottomRef} />
          </>
        ) : (
          <div className="text-vscode-textMuted italic">No {active.toLowerCase()} to display.</div>
        )}
      </div>
    </div>
  );
};
