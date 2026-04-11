import React from 'react';

const projects = [
  {
    id: 0,
    name: "Find Coffeemate Frontend",
    description: "Find your perfect dev partner for your project.",
    link: "https://findcoffeemate.com/",
    tags: ["Coffemate", "JavaScript", "React","developer","connection"]
  },
  {
    id: 1,
    name: "Skillora",
    description: "Skillora is a smart HR & Candidate Job Portal Management System designed to simplify hiring by bringing multiple job portals, candidates, and hiring workflows into one unified platform",
    link: "https://github.com/binaykumardas/findcoffemate-backend",
    tags: ["Skill", "JavaScript", "Node","Angular"]
  },
  {
    id: 2,
    name: "findMyPartner",
    description: "Find your perfect life partner.",
    link: "https://github.com/binaykumardas/matrimony",
    tags: ["Matrimony", "Springboot", "React"]
  }
];

export const ProjectsTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <div className="font-mono text-sm overflow-x-auto whitespace-pre-wrap">
        <span className="text-vscode-keyword">const</span> <span className="text-vscode-function">projects</span> = <span className="text-vscode-text">[</span>
      </div>

      {projects.map((project, index) => (
        <div key={project.id} className="pl-4 hover:bg-vscode-lineHighlight rounded group transition-colors">
          <span className="text-yellow-400">{`{`}</span>
          <div className="pl-4">
            <div>
              <span className="text-vscode-variable">"id"</span>: <span className="text-vscode-number">{project.id}</span>,
            </div>
            <div>
              <span className="text-vscode-variable font-bold">"name"</span>: <span className="text-vscode-string">"{project.name}"</span>,
            </div>
            <div>
              <span className="text-vscode-variable">"description"</span>: <span className="text-vscode-string">"{project.description}"</span>,
            </div>
            <div>
              <span className="text-vscode-variable">"link"</span>: <a href={project.link} target="_blank" rel="noreferrer" className="text-vscode-string underline decoration-vscode-string cursor-pointer">"{project.link}"</a>,
            </div>
            <div>
              <span className="text-vscode-variable">"tags"</span>: <span className="text-purple-400">[</span>
              {project.tags.map((tag, i) => (
                <span key={tag}>
                  <span className="text-vscode-string">"{tag}"</span>{i < project.tags.length - 1 && ","}
                </span>
              ))}
              <span className="text-purple-400">]</span>
            </div>
          </div>
          <span className="text-yellow-400">{`}`}{index < projects.length - 1 && ","}</span>
        </div>
      ))}

      <div><span className="text-vscode-text">];</span></div>

      <div className="mt-8 text-vscode-comment">
        {`// TODO: Create more awesome things...`}
      </div>
    </div>
  );
};
