import React, { useState, useRef, useEffect } from "react";
import { Files, Search, GitGraph, Bug, Box, Settings, User, Moon, Sun, Check } from "lucide-react";
import { useEditor } from "../EditorContext";

interface IconWrapperProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  label?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, active, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`group w-full h-12 flex items-center justify-center cursor-pointer transition-colors relative
      ${active ? "text-vscode-iconActive" : "text-vscode-iconInactive hover:text-vscode-iconActive"}`}
  >
    {active && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-vscode-accent" />}
    {children}
  </button>
);

export const ActivityBar: React.FC = () => {
  const { sidebarVisible, toggleSidebar, toggleTheme, theme } = useEditor();
  const [showSettings, setShowSettings] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowSettings(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 z-30 shrink-0 border-r border-vscode-border">
      <IconWrapper active={sidebarVisible} onClick={toggleSidebar} label="Explorer">
        <Files size={22} strokeWidth={1.6} />
      </IconWrapper>
      <IconWrapper label="Search"><Search size={22} strokeWidth={1.6} /></IconWrapper>
      <IconWrapper label="Source control"><GitGraph size={22} strokeWidth={1.6} /></IconWrapper>
      <IconWrapper label="Run and debug"><Bug size={22} strokeWidth={1.6} /></IconWrapper>
      <IconWrapper label="Extensions"><Box size={22} strokeWidth={1.6} /></IconWrapper>

      <div className="flex-1" />

      <IconWrapper label="Account"><User size={22} strokeWidth={1.6} /></IconWrapper>

      <div className="relative w-full" ref={ref}>
        <IconWrapper onClick={() => setShowSettings((s) => !s)} label="Settings">
          <Settings size={22} strokeWidth={1.6} />
        </IconWrapper>

        {showSettings && (
          <div className="absolute left-12 bottom-2 w-60 bg-vscode-sidebar border border-vscode-border shadow-2xl rounded-md py-1 z-50 text-vscode-text animate-scale-in origin-bottom-left">
            <div className="px-4 py-2 border-b border-vscode-border mb-1">
              <span className="text-[10px] font-semibold opacity-60 uppercase tracking-wider">Settings</span>
            </div>
            <button
              className="w-full text-left px-4 py-2 hover:bg-vscode-hover flex items-center justify-between text-sm"
              onClick={() => { toggleTheme(); setShowSettings(false); }}
            >
              <span>Color Theme</span>
              <span className="flex items-center text-xs opacity-80">
                {theme === "dark" ? <Moon size={14} className="mr-1.5" /> : <Sun size={14} className="mr-1.5" />}
                {theme === "dark" ? "Dark+" : "Light+"}
              </span>
            </button>
            <div className="px-4 py-2 hover:bg-vscode-hover flex items-center justify-between text-sm cursor-default">
              <span className="opacity-70">Auto Save</span>
              <Check size={14} className="opacity-70" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
