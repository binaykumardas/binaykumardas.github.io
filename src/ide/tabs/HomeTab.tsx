import React from "react";
import { ArrowRight, Mail, Github, Linkedin, MapPin, Briefcase } from "lucide-react";
import { useEditor } from "../EditorContext";

const Stat: React.FC<{ value: React.ReactNode; label: string }> = ({ value, label }) => (
  <div className="ide-card p-5 md:p-6">
    <div className="text-3xl md:text-4xl font-bold tracking-tight text-vscode-text mb-1">{value}</div>
    <div className="text-[11px] tracking-[0.18em] uppercase text-vscode-textMuted font-medium">{label}</div>
  </div>
);

const QuickLink: React.FC<{ label: string; onClick: () => void; color: string }> = ({ label, onClick, color }) => (
  <button
    onClick={onClick}
    className="ide-card group flex items-center gap-2 px-4 py-3 font-mono text-sm w-full text-left"
  >
    <ArrowRight size={14} className="text-vscode-textMuted group-hover:text-vscode-accent transition-colors -rotate-45 group-hover:rotate-0" />
    <span className={color}>{label}</span>
  </button>
);

const SocialBtn: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="icon-btn"
  >
    {children}
  </a>
);

export const HomeTab: React.FC = () => {
  const { openFile } = useEditor();

  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-20 max-w-6xl mx-auto fade-in-up">
      {/* Top meta row */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-vscode-textMuted mb-8">
        <span className="inline-flex items-center gap-2">
          <span className="pulse-dot" />
          Available for new opportunities
        </span>
        <span className="opacity-40">·</span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} className="opacity-70" />
          India - Remote
        </span>
      </div>

      {/* Hero name */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-vscode-text mb-6">
        Hello, I'm{" "}
        <span className="gradient-text">Binay Kumar Das.</span>
      </h1>

      {/* Subtitle */}
      <div className="font-mono text-lg sm:text-2xl md:text-3xl mb-10 text-vscode-textMuted">
        <span className="syntax-comment">// </span>
        <span className="text-vscode-text">Frontend Specialist</span>
        <span className="blink-caret" />
      </div>

      {/* Code block */}
      <div className="ide-card p-5 md:p-6 font-mono text-[13px] md:text-sm mb-12 overflow-x-auto">
        <div className="line-numbers space-y-0.5">
          <div className="ln"><span><span className="syntax-keyword">const</span> <span className="syntax-fn">developer</span> <span className="syntax-keyword">=</span> {"{"}</span></div>
          <div className="ln"><span className="pl-4"><span className="syntax-var">name</span>: <span className="syntax-string">'Binay Kumar Das'</span>,</span></div>
          <div className="ln"><span className="pl-4"><span className="syntax-var">location</span>: <span className="syntax-string">'Bhubaneswar, India'</span>,</span></div>
          <div className="ln"><span className="pl-4"><span className="syntax-var">role</span>: <span className="syntax-string">'Senior Software Engineer'</span>,</span></div>
          <div className="ln"><span className="pl-4"><span className="syntax-var">stack</span>: [<span className="syntax-string">'React'</span>, <span className="syntax-string">'Angular'</span>, <span className="syntax-string">'Node'</span>, <span className="syntax-string">'TypeScript'</span>],</span></div>
          <div className="ln"><span className="pl-4"><span className="syntax-var">passion</span>: <span className="syntax-string">'Crafting seamless digital experiences'</span>,</span></div>
          <div className="ln"><span>{"};"}</span></div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-base md:text-xl leading-relaxed text-vscode-text/90 max-w-3xl mb-3">
        I enjoy creating seamless digital experiences that balance usability, performance, and design.
      </p>
      <p className="text-base md:text-xl leading-relaxed text-vscode-text/90 max-w-3xl mb-10">
        Always learning, improving, and exploring new ways to build better front-end solutions.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <button onClick={() => openFile("projects")} className="btn-primary">
          View Projects
          <ArrowRight size={16} />
        </button>
        <button onClick={() => openFile("contact")} className="btn-ghost">
          <Mail size={16} />
          Contact Me
        </button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Stat value="5+" label="Years Coding" />
        <Stat value="10+" label="Projects Shipped" />
        <Stat value="8" label="Tech Stacks" />
        <Stat value="∞" label="Coffee Consumed" />
      </div>

      {/* Quick links */}
      <div className="mb-12">
        <h3 className="text-[11px] tracking-[0.2em] uppercase text-vscode-textMuted font-semibold mb-4">Quick Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickLink label="About.md"      onClick={() => openFile("about")}    color="text-[hsl(262,75%,72%)]" />
          <QuickLink label="Projects.json" onClick={() => openFile("projects")} color="text-[hsl(45,90%,62%)]" />
          <QuickLink label="Contact.css"   onClick={() => openFile("contact")}  color="text-[hsl(207,80%,68%)]" />
          <QuickLink label="README.md"     onClick={() => openFile("readme")}   color="text-[hsl(262,75%,72%)]" />
        </div>
      </div>

      {/* Socials + Open to work */}
      <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-vscode-border">
        <div className="flex items-center gap-2">
          <SocialBtn href="https://github.com/binaykumardas" label="GitHub"><Github size={18} /></SocialBtn>
          <SocialBtn href="https://linkedin.com/in/binaykumardas" label="LinkedIn"><Linkedin size={18} /></SocialBtn>
          <SocialBtn href="mailto:binaykumardas96@gmail.com" label="Email"><Mail size={18} /></SocialBtn>
        </div>
        <span className="inline-flex items-center gap-2 text-sm text-vscode-textMuted">
          <Briefcase size={14} />
          Open to work
        </span>
      </div>
    </div>
  );
};
