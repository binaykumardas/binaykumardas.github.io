import React, { useCallback } from "react";
import { ActivityBar } from "./ActivityBar";
import { Sidebar } from "./Sidebar";
import { EditorArea } from "./EditorArea";
import { Terminal } from "./Terminal";
import { StatusBar } from "./StatusBar";
import { useEditor } from "../EditorContext";

export const Layout: React.FC = () => {
  const {
    setSidebarWidth, sidebarVisible, setSidebarVisible,
    terminalHeight, setTerminalHeight, terminalVisible,
    toggleTerminal,
  } = useEditor();

  // Keyboard shortcuts
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key === "b") { e.preventDefault(); setSidebarVisible(!sidebarVisible); }
      if (e.altKey && e.key.toLowerCase() === "t") { e.preventDefault(); toggleTerminal(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleTerminal, sidebarVisible, setSidebarVisible]);

  const startResizingSidebar = useCallback(() => {
    const onMove = (e: MouseEvent) => {
      let w = e.clientX - 48;
      if (w < 180) w = 180;
      if (w > 520) w = 520;
      setSidebarWidth(w);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, [setSidebarWidth]);

  const startResizingTerminal = useCallback((mouseDown: React.MouseEvent) => {
    const startY = mouseDown.clientY;
    const startH = terminalHeight;
    const onMove = (e: MouseEvent) => {
      const delta = startY - e.clientY;
      let h = startH + delta;
      if (h < 100) h = 100;
      if (h > window.innerHeight - 200) h = window.innerHeight - 200;
      setTerminalHeight(h);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    document.body.style.cursor = "row-resize";
    document.body.style.userSelect = "none";
  }, [terminalHeight, setTerminalHeight]);

  return (
    <div className="flex flex-col h-[100dvh] w-screen bg-vscode-bg text-vscode-text font-sans overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />

        {/* Sidebar — overlay on mobile, inline on desktop */}
        <div
          className={`absolute md:relative z-20 h-full flex transition-transform duration-300 ease-in-out
            ${sidebarVisible ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:hidden"}`}
        >
          <Sidebar />
        </div>

        {/* Mobile backdrop */}
        {sidebarVisible && (
          <div
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setSidebarVisible(false)}
          />
        )}

        {/* Sidebar resizer */}
        {sidebarVisible && (
          <div
            className="hidden md:block w-1 bg-transparent hover:bg-vscode-accent/70 cursor-col-resize z-10 transition-colors"
            onMouseDown={startResizingSidebar}
          />
        )}

        <div className="flex-1 flex flex-col min-w-0 bg-vscode-bg">
          <EditorArea />
          {terminalVisible && (
            <div
              className="h-1 bg-transparent hover:bg-vscode-accent/70 cursor-row-resize z-10 transition-colors"
              onMouseDown={startResizingTerminal}
            />
          )}
          <Terminal />
        </div>
      </div>
      <StatusBar />
    </div>
  );
};
