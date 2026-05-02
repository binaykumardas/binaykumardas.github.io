import React from "react";
import { GitBranch, Radio, Check, Bell, ChevronUp, ChevronDown, Wifi } from "lucide-react";
import { useEditor } from "../EditorContext";

export const StatusBar: React.FC = () => {
  const { toggleTerminal, terminalVisible } = useEditor();

  return (
    <div className="h-7 bg-vscode-statusBar text-[hsl(var(--vscode-status-bar-fg))] flex items-center justify-between px-2 text-[11px] select-none shrink-0 z-50 border-t border-black/20">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1 hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center space-x-1 hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer transition-colors">
          <Radio size={12} />
          <span>0 Errors</span>
        </div>
        <div className="hidden sm:flex items-center space-x-1 hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer transition-colors">
          <Wifi size={12} />
          <span>Live</span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={toggleTerminal}
          className={`flex items-center space-x-1 hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer transition-colors ${terminalVisible ? "bg-white/10" : ""}`}
        >
          {terminalVisible ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
          <span className="font-medium">Terminal</span>
        </button>

        <div className="hidden md:flex items-center space-x-2">
          <span className="hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer">Ln 12, Col 42</span>
          <span className="hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer">UTF-8</span>
          <span className="hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer">TypeScript React</span>
          <span className="flex items-center space-x-1 hover:bg-white/15 px-1.5 py-0.5 rounded cursor-pointer">
            <Check size={12} /><span>Prettier</span>
          </span>
          <Bell size={12} className="cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </div>
  );
};
