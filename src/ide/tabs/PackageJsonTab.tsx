import React from "react";

export const PackageJsonTab: React.FC = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-16 max-w-3xl mx-auto fade-in-up">
      <div className="text-[11px] tracking-[0.2em] uppercase text-vscode-textMuted font-semibold mb-3">PACKAGE.JSON</div>
      <div className="ide-card p-6 font-mono text-sm leading-7">
        <div>{"{"}</div>
        <div className="pl-5">
          <span className="syntax-string">"name"</span>: <span className="syntax-string">"binay_kumar_das"</span>,<br />
          <span className="syntax-string">"version"</span>: <span className="syntax-string">"2.5.0"</span>,<br />
          <span className="syntax-string">"description"</span>: <span className="syntax-string">"Engineer · Crafter · Photographer"</span>,<br />
          <span className="syntax-string">"scripts"</span>: {"{"}<br />
          <span className="pl-5 inline-block">
            <span className="syntax-string">"start"</span>: <span className="syntax-string">"build great products"</span>,<br />
            <span className="syntax-string">"dev"</span>: <span className="syntax-string">"learn every day"</span>
          </span><br />
          {"}"},<br />
          <span className="syntax-string">"dependencies"</span>: {"{"}<br />
          <span className="pl-5 inline-block">
            <span className="syntax-string">"react"</span>: <span className="syntax-string">"^19.0.0"</span>,<br />
            <span className="syntax-string">"typescript"</span>: <span className="syntax-string">"^5.8.0"</span>,<br />
            <span className="syntax-string">"curiosity"</span>: <span className="syntax-string">"latest"</span>,<br />
            <span className="syntax-string">"passion"</span>: <span className="syntax-string">"infinity"</span>
          </span><br />
          {"}"}
        </div>
        <div>{"}"}</div>
      </div>
    </div>
  );
};
