import React from "react";
import { Film } from "lucide-react";

export const VideosTab: React.FC = () => {
  return (
    <div className="h-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 fade-in-up">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-vscode-accent/15 blur-2xl scale-150" />
        <div className="relative h-20 w-20 rounded-2xl border border-vscode-border bg-vscode-sidebar flex items-center justify-center shadow-[var(--shadow-glow)]">
          <Film size={36} className="text-vscode-accent" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-vscode-text mb-3">Coming Soon</h1>
      <p className="text-vscode-textMuted text-base md:text-lg max-w-md">
        A handcrafted video reel is on the way. Check back soon.
      </p>
    </div>
  );
};
