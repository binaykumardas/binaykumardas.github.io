import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { EditorContextType, Theme } from "./types";

const INITIAL_OPEN_FILES = ["home"];

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeFileId, setActiveFileId] = useState<string | null>(INITIAL_OPEN_FILES[0]);
  const [openFiles, setOpenFiles] = useState<string[]>(INITIAL_OPEN_FILES);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [terminalVisible, setTerminalVisible] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [terminalHeight, setTerminalHeight] = useState(220);
  const [theme, setTheme] = useState<Theme>("dark");

  // Mobile detection — collapse panels on small screens
  useEffect(() => {
    const apply = () => {
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
        setTerminalVisible(false);
      }
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  // Apply theme class on body
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.documentElement.classList.remove("dark");
    } else {
      document.body.classList.remove("light-theme");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  const openFile = (fileId: string) => {
    setOpenFiles((prev) => (prev.includes(fileId) ? prev : [...prev, fileId]));
    setActiveFileId(fileId);
  };

  const closeFile = (fileId: string) => {
    setOpenFiles((prev) => {
      const next = prev.filter((id) => id !== fileId);
      if (activeFileId === fileId) {
        setActiveFileId(next.length ? next[next.length - 1] : null);
      }
      return next;
    });
  };

  const toggleSidebar = () => setSidebarVisible((v) => !v);
  const toggleTerminal = () => setTerminalVisible((v) => !v);

  return (
    <EditorContext.Provider
      value={{
        activeFileId,
        openFiles,
        sidebarVisible,
        terminalVisible,
        sidebarWidth,
        terminalHeight,
        theme,
        openFile,
        closeFile,
        toggleSidebar,
        setSidebarVisible,
        toggleTerminal,
        setActiveFile: setActiveFileId,
        setSidebarWidth,
        setTerminalHeight,
        toggleTheme,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

// Custom hook for consuming the editor context
export const useEditor = () => {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error("useEditor must be used within EditorProvider");
  return ctx;
};
