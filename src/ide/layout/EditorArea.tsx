import React from "react";
import { X, FileCode, FileJson, FileType as FileIcon, Hash, ChevronRight } from "lucide-react";
import { useEditor } from "../EditorContext";
import { FILE_SYSTEM } from "../fileSystem";
import { FileNode } from "../types";

const findFileById = (nodes: FileNode[], id: string): FileNode | undefined => {
  for (const n of nodes) {
    if (n.id === id) return n;
    if (n.children) {
      const f = findFileById(n.children, id);
      if (f) return f;
    }
  }
  return undefined;
};

const TabIcon: React.FC<{ language?: string }> = ({ language }) => {
  switch (language) {
    case "typescript": return <FileCode size={14} className="text-[hsl(207,100%,60%)] mr-2 shrink-0" />;
    case "json": return <FileJson size={14} className="text-[hsl(45,90%,60%)] mr-2 shrink-0" />;
    case "css": return <Hash size={14} className="text-[hsl(207,80%,65%)] mr-2 shrink-0" />;
    case "markdown": return <FileIcon size={14} className="text-[hsl(262,75%,70%)] mr-2 shrink-0" />;
    default: return <FileIcon size={14} className="text-vscode-textMuted mr-2 shrink-0" />;
  }
};

export const EditorArea: React.FC = () => {
  const { openFiles, activeFileId, closeFile, setActiveFile, openFile } = useEditor();
  const activeFileNode = activeFileId ? findFileById(FILE_SYSTEM, activeFileId) : null;

  if (openFiles.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-vscode-bg text-vscode-textMuted editor-grid-bg">
        <div className="text-center max-w-md p-8">
          <div className="mb-6 text-7xl opacity-10">{"<>"}</div>
          <p className="mb-2 text-sm">Open a file from the explorer to begin.</p>
          <button
            onClick={() => openFile("home")}
            className="mt-4 btn-primary"
          >
            Open Home.tsx
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-vscode-bg overflow-hidden relative">
      {/* Tabs Header */}
      <div className="flex bg-vscode-tabInactive overflow-x-auto no-scrollbar border-b border-vscode-border">
        {openFiles.map((fileId) => {
          const file = findFileById(FILE_SYSTEM, fileId);
          if (!file) return null;
          const isActive = activeFileId === fileId;
          return (
            <div
              key={fileId}
              onClick={() => setActiveFile(fileId)}
              className={`group flex items-center min-w-[140px] max-w-[220px] h-9 px-3 border-r border-vscode-border cursor-pointer select-none transition-colors
                ${isActive
                  ? "bg-vscode-bg text-vscode-text border-t-2 border-t-vscode-accent"
                  : "bg-vscode-tabInactive text-vscode-textMuted hover:bg-vscode-hover"}`}
            >
              <TabIcon language={file.language} />
              <span className="text-xs truncate flex-1">{file.name}</span>
              <button
                onClick={(e) => { e.stopPropagation(); closeFile(fileId); }}
                className={`ml-2 p-0.5 rounded-sm hover:bg-vscode-hover ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                aria-label={`Close ${file.name}`}
              >
                <X size={12} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Breadcrumbs */}
      <div className="h-7 flex items-center px-4 text-[11px] text-vscode-textMuted bg-vscode-bg border-b border-vscode-border/50">
        <span>src</span>
        <ChevronRight size={12} className="mx-1 opacity-60" />
        <span className="text-vscode-text">{activeFileNode?.name || "..."}</span>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto relative editor-grid-bg">
        <div key={activeFileId} className="min-h-full animate-fade-in">
          {activeFileNode?.content}
        </div>
      </div>
    </div>
  );
};
