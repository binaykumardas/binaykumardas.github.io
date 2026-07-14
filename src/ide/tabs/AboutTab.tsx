import React from "react";
import { Sparkles, Zap, Users, Target } from "lucide-react";

const PILLARS = [
  { icon: Sparkles, color: "text-[hsl(45,90%,60%)]",  title: "Product-minded",  body: "I love turning fuzzy ideas into polished, user-first experiences." },
  { icon: Zap,      color: "text-[hsl(38,92%,55%)]",  title: "Performance-driven", body: "High-performance web apps that feel instant on every device." },
  { icon: Users,    color: "text-[hsl(207,90%,65%)]", title: "Team player",     body: "Collaborative, curious, and obsessed with learning from peers." },
  { icon: Target,   color: "text-[hsl(0,75%,65%)]",   title: "Detail-oriented", body: "I sweat the pixels so the experience feels effortless." },
];

const STACK = {
  Frontend: ["Angular", "React", "Tailwind", "Redux", "Bootstrap", "TypeScript"],
  Backend:  ["Node.js", "Express", "REST APIs", "Python", "Django"],
  Tools:    ["Git", "Webpack", "VS Code", "Vite"],
};

export const AboutTab: React.FC = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-16 max-w-6xl mx-auto fade-in-up">
      <div className="text-[11px] tracking-[0.2em] uppercase text-vscode-textMuted font-semibold mb-3">README.md</div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-vscode-text mb-10">
        <span className="syntax-keyword font-mono mr-3">#</span>About Me
      </h1>

      <p className="text-lg md:text-xl leading-relaxed text-vscode-text/90 max-w-4xl mb-16">
        Hi, I'm <span className="gradient-text font-semibold">Binay Kumar Das</span>. A software engineer based in
        Bengaluru, India, with a deep passion for engineering products that feel intuitive, perform well, and
        solve real problems.
      </p>

      {/* What I do */}
      <h2 className="text-xl font-bold text-vscode-textMuted tracking-wider uppercase mb-6 font-mono">
        <span className="syntax-keyword mr-2">##</span>What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {PILLARS.map(({ icon: Icon, color, title, body }) => (
          <div key={title} className="ide-card p-6 group">
            <div className="flex items-center gap-2.5 mb-3">
              <Icon size={20} className={`${color} transition-transform group-hover:scale-110`} />
              <h3 className="text-lg font-semibold text-vscode-text">{title}</h3>
            </div>
            <p className="text-vscode-textMuted leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <h2 className="text-xl font-bold text-vscode-textMuted tracking-wider uppercase mb-6 font-mono">
        <span className="syntax-keyword mr-2">##</span>Tech Stack
      </h2>
      <div className="ide-card p-6 md:p-8 space-y-7">
        {Object.entries(STACK).map(([group, items]) => (
          <div key={group}>
            <div className="text-[11px] tracking-[0.2em] uppercase text-vscode-accent font-semibold mb-3 font-mono">
              {group}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((it) => <span key={it} className="chip">{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
