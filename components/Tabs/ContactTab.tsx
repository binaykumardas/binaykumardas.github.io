import React from 'react';

export const ContactTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <div className="text-vscode-comment mb-4">/* Reach out to me anytime! */</div>

      <div className="hover:bg-vscode-lineHighlight p-1 rounded">
        <span className="text-vscode-keyword">.social-links</span> <span className="text-vscode-text">{`{`}</span>
        <div className="pl-4">
          <div className="flex items-center group">
            <span className="text-vscode-variable">email</span>: <span className="text-vscode-string">"binaykumardas96@gmail.com"</span>;
            <span className="ml-4 opacity-0 group-hover:opacity-50 text-xs text-gray-500 cursor-pointer">Send Email</span>
          </div>
          <div className="flex items-center group">
            <span className="text-vscode-variable">linkedin</span>: <a href="https://linkedin.com/in/binaykumardas" target="_blank" rel="noreferrer" className="text-vscode-accent hover:underline">url("linkedin.com/in/binaykumardas")</a>;
          </div>
          <div className="flex items-center group">
            <span className="text-vscode-variable">github</span>: <a href="https://github.com/binaykumardas" target="_blank" rel="noreferrer" className="text-vscode-accent hover:underline">url("github.com/binaykumardas")</a>;
          </div>
          <div className="flex items-center group">
            <span className="text-vscode-variable">x</span>: <a href="https://x.com/binaykumardas96" target="_blank" rel="noreferrer" className="text-vscode-accent hover:underline">url("x.com/binaykumardas96")</a>;
          </div>
        </div>
        <span className="text-vscode-text">{`}`}</span>
      </div>

      <div className="hover:bg-vscode-lineHighlight p-1 rounded mt-4">
        <span className="text-vscode-keyword">#location</span> <span className="text-vscode-text">{`{`}</span>
        <div className="pl-4">
          <div><span className="text-vscode-variable">city</span>: <span className="text-vscode-string">"Bhubaneswar"</span>;</div>
          <div><span className="text-vscode-variable">country</span>: <span className="text-vscode-string">"India"</span>;</div>
        </div>
        <span className="text-vscode-text">{`}`}</span>
      </div>

      <div className="mt-8">
        <a
          href="mailto:binaykumardas96@gmail.com"
          className="bg-vscode-accent text-white px-4 py-2 hover:bg-blue-600 transition-colors font-sans rounded-sm text-xs inline-block"
        >
          Send Message
        </a>
      </div>
    </div>
  );
};
