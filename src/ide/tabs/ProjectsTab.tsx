import React from "react";
import { ExternalLink } from "lucide-react";

type Status = "live" | "soon" | "dev";
interface Project {
  id: number;
  name: string;
  description: string;
  link: string | null;
  status: Status;
  statusLabel: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 0,
    name: "findcoffeemate",
    description: "Find your perfect dev partner for your project.",
    link: "https://findcoffeemate.com/",
    status: "live",
    statusLabel: "Live",
    tags: ["Coffeemate", "JavaScript", "React", "Developer", "Connection"],
  },
  {
    id: 1,
    name: "findMyMatrimony",
    description: "Find your perfect life partner.",
    link: "https://www.findmymatrimony.com",
    status: "soon",
    statusLabel: "Coming Soon",
    tags: ["Matrimony", "Spring Boot", "React"],
  },
  {
    id: 2,
    name: "Skillora",
    description: "A smart HR & candidate job-portal management system that unifies multiple job portals, candidates, and hiring workflows into one platform.",
    link: null,
    status: "dev",
    statusLabel: "In Development",
    tags: ["Skill", "JavaScript", "Node", "Angular"],
  },
];

const StatusPill: React.FC<{ s: Status; label: string }> = ({ s, label }) => {
  const cls = s === "live" || s === "soon" ? "pill-green" : "pill-amber";
  return (
    <span className={`pill ${cls} font-mono`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s === "dev" ? "bg-status-amber" : "bg-status-green"} animate-pulse`} />
      {label}
    </span>
  );
};

export const ProjectsTab: React.FC = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-16 max-w-6xl mx-auto fade-in-up">
      <div className="text-[11px] tracking-[0.2em] uppercase text-vscode-textMuted font-semibold mb-3">PROJECTS.JSON</div>
      <div className="font-mono text-2xl md:text-3xl text-vscode-text mb-10">
        <span className="syntax-keyword">const</span>{" "}
        <span className="syntax-fn">projects</span>{" "}
        <span className="syntax-keyword">=</span>{" "}
        <span className="text-vscode-textMuted">[</span>
      </div>

      <div className="space-y-5">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="ide-card p-6 md:p-7 border-l-2 border-l-vscode-accent/0 hover:border-l-vscode-accent transition-all"
          >
            <header className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="text-xl md:text-2xl font-semibold text-vscode-text font-mono flex items-center gap-2">
                <span className="syntax-fn opacity-80">{"{"}</span>
                {p.name}
              </h3>
              <StatusPill s={p.status} label={p.statusLabel} />
            </header>

            <p className="text-vscode-text/85 leading-relaxed mb-5 max-w-3xl">{p.description}</p>

            <dl className="font-mono text-sm space-y-1.5">
              <div className="flex flex-wrap gap-2">
                <dt className="syntax-var">"id":</dt>
                <dd className="syntax-num">{p.id},</dd>
              </div>
              {p.link && (
                <div className="flex flex-wrap items-center gap-2">
                  <dt className="syntax-var">"link":</dt>
                  <dd>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="syntax-string underline decoration-dotted underline-offset-4 hover:text-vscode-accent inline-flex items-center gap-1"
                    >
                      "{p.link}" <ExternalLink size={12} />
                    </a>,
                  </dd>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <dt className="syntax-var">"tags":</dt>
                <dd className="text-purple-400">[</dd>
                {p.tags.map((t) => <span key={t} className="chip text-xs">{t}</span>)}
                <dd className="text-purple-400">]</dd>
              </div>
            </dl>

            <div className="mt-4 font-mono text-vscode-textMuted">{"},"}</div>
          </article>
        ))}
      </div>

      <div className="font-mono text-2xl md:text-3xl text-vscode-text mt-10">
        <span className="text-vscode-textMuted">];</span>
      </div>

      <p className="font-mono syntax-comment mt-8">{"// TODO: Create more awesome things..."}</p>
    </div>
  );
};
