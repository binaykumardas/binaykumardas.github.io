import React, { useState } from "react";
import { ChevronRight, ChevronDown, FileCode, FileJson, FileType as FileIcon, Folder, FolderOpen, Hash } from "lucide-react";
import { useEditor } from "../EditorContext";
import { FILE_SYSTEM } from "../fileSystem";
import { FileNode, FileType } from "../types";

interface FileTreeItemProps { node: FileNode; level: number; }

const FileIconFor: React.FC<{ node: FileNode; isOpen?: boolean }> = ({ node, isOpen }) => {
  if (node.type === FileType.FOLDER) {
    return isOpen
      ? <FolderOpen size={15} className="text-[hsl(207,100%,60%)]" />
      : <Folder size={15} className="text-[hsl(207,100%,60%)]" />;
  }
  switch (node.language) {
    case "typescript": return <FileCode size={15} className="text-[hsl(207,100%,60%)]" />;
    case "json": return <FileJson size={15} className="text-[hsl(45,90%,60%)]" />;
    case "css": return <Hash size={15} className="text-[hsl(207,80%,65%)]" />;
    case "markdown": return <FileIcon size={15} className="text-[hsl(262,75%,70%)]" />;
    default: return <FileIcon size={15} className="text-vscode-textMuted" />;
  }
};

const FileTreeItem: React.FC<FileTreeItemProps> = ({ node, level }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { activeFileId, openFile, setSidebarVisible } = useEditor();

  const handleClick = () => {
    if (node.type === FileType.FILE) {
      openFile(node.id);
      if (window.innerWidth < 768) setSidebarVisible(false);
    } else {
      setIsOpen((o) => !o);
    }
  };

  const isActive = activeFileId === node.id;

  return (
    <div>
      <div
        onClick={handleClick}
        className={`flex items-center gap-1.5 py-[3px] cursor-pointer text-[13px] transition-colors
          ${isActive ? "bg-vscode-lineHighlight text-vscode-text" : "text-vscode-text/85 hover:bg-vscode-hover"}`}
        style={{ paddingLeft: `${level * 12 + 10}px` }}
      >
        {node.type === FileType.FOLDER ? (
          isOpen ? <ChevronDown size={13} className="text-vscode-textMuted" />
                 : <ChevronRight size={13} className="text-vscode-textMuted" />
        ) : <span className="w-[13px]" />}
        <FileIconFor node={node} isOpen={isOpen} />
        <span className="truncate">{node.name}</span>
      </div>

      {node.type === FileType.FOLDER && isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const { sidebarVisible, sidebarWidth } = useEditor();
  if (!sidebarVisible) return null;

  return (
    <div
      className="bg-vscode-sidebar flex flex-col border-r border-vscode-border shrink-0"
      style={{ width: sidebarWidth }}
    >
      <div className="h-9 px-4 flex items-center text-[11px] font-semibold tracking-wider uppercase text-vscode-textMuted select-none">
        Explorer
      </div>
      <div className="px-2 pb-2 flex items-center text-[11px] font-bold tracking-wider uppercase text-vscode-text select-none">
        <ChevronDown size={13} className="mr-1" /> Binay_Portfolio
      </div>
      <div className="flex-1 overflow-y-auto">
        {FILE_SYSTEM[0].children?.map((node) => (
          <FileTreeItem key={node.id} node={node} level={0} />
        ))}
      </div>
    </div>
  );
};
