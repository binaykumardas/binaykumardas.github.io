import React from "react";
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";

const MediumIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.846 6.888a.917.917 0 0 0-.263-.874L.635 3.66V3.3h6.055l4.68 10.26L15.484 3.3h5.777v.36l-1.664 1.595a.487.487 0 0 0-.184.467v11.73a.487.487 0 0 0 .184.467l1.625 1.595v.36h-8.178v-.36l1.684-1.634c.165-.165.165-.214.165-.467V7.97l-4.684 11.864h-.633L4.107 7.97v7.98c-.045.334.066.671.302.91l2.19 2.656v.36H.385v-.36l2.19-2.656a1.12 1.12 0 0 0 .272-.91V6.888z"/>
  </svg>
);

const Row: React.FC<{
  selector: string;
  property: string;
  href?: string;
  value: string;
  hint?: React.ReactNode;
}> = ({ selector, property, href, value, hint }) => (
  <div className="group flex flex-wrap items-center gap-x-2 px-3 py-2 rounded-md hover:bg-vscode-lineHighlight transition-colors">
    <span className="syntax-keyword">{selector}</span>
    <span className="text-vscode-text">{"{"}</span>
    <span className="syntax-var">{property}</span>
    <span className="text-vscode-text">:</span>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="syntax-string hover:text-vscode-accent underline decoration-dotted underline-offset-4">
        url("{value}")
      </a>
    ) : (
      <span className="syntax-string">"{value}"</span>
    )}
    <span className="text-vscode-text">;</span>
    <span className="text-vscode-text">{"}"}</span>
    {hint && <span className="ml-2 text-xs text-vscode-textMuted opacity-0 group-hover:opacity-100 transition-opacity">{hint}</span>}
  </div>
);

const SocialCard: React.FC<{ href: string; icon: React.ReactNode; label: string; sub: string }> = ({ href, icon, label, sub }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="ide-card p-5 flex items-center gap-4 group"
  >
    <div className="h-11 w-11 rounded-lg border border-vscode-border bg-vscode-bg flex items-center justify-center text-vscode-text group-hover:text-vscode-accent group-hover:border-vscode-accent/60 transition-colors">
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-sm font-semibold text-vscode-text truncate">{label}</div>
      <div className="text-xs text-vscode-textMuted truncate">{sub}</div>
    </div>
  </a>
);

export const ContactTab: React.FC = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-16 max-w-6xl mx-auto fade-in-up">
      <div className="text-[11px] tracking-[0.2em] uppercase text-vscode-textMuted font-semibold mb-3">CONTACT.CSS</div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-vscode-text mb-3">
        Let's <span className="gradient-text">build</span> something great.
      </h1>
      <p className="syntax-comment font-mono mb-10">{"/* Reach out to me anytime — I read every message. */"}</p>

      {/* Social cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <SocialCard href="mailto:binaykumardas96@gmail.com" icon={<Mail size={18} />} label="Email" sub="binaykumardas96@gmail.com" />
        <SocialCard href="https://linkedin.com/in/binaykumardas" icon={<Linkedin size={18} />} label="LinkedIn" sub="linkedin.com/in/binaykumardas" />
        <SocialCard href="https://github.com/binaykumardas" icon={<Github size={18} />} label="GitHub" sub="github.com/binaykumardas" />
        <SocialCard href="https://x.com/binaykumardas96" icon={<Twitter size={18} />} label="X / Twitter" sub="x.com/binaykumardas96" />
        <SocialCard href="https://medium.com/@binaykumardas96" icon={<MediumIcon size={18} />} label="Medium" sub="medium.com/@binaykumardas96"/>
      </div>

      {/* CSS-styled rows */}
      <div className="ide-card p-4 md:p-6 font-mono text-sm leading-7 mb-10">
        <Row selector=".social-links" property="email"    value="binaykumardas96@gmail.com" href="mailto:binaykumardas96@gmail.com" />
        <Row selector=".social-links" property="linkedin" value="linkedin.com/in/binaykumardas" href="https://linkedin.com/in/binaykumardas" />
        <Row selector=".social-links" property="github"   value="github.com/binaykumardas" href="https://github.com/binaykumardas" />
        <Row selector=".social-links" property="twitter"  value="x.com/binaykumardas96"   href="https://x.com/binaykumardas96" />
        <Row selector=".social-links" property="medium" value="medium.com/@binaykumardas96" href="https://medium.com/@binaykumardas96"/>
        <Row selector="#location"     property="city"     value="Bengaluru, India" hint={<MapPin size={12} />} />
      </div>

      <a
        href="mailto:binaykumardas96@gmail.com"
        className="btn-primary"
      >
        <Send size={16} /> Send a message
      </a>
    </div>
  );
};
