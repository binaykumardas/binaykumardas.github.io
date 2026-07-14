import { Layout } from "@/ide/layout/Layout";
import { EditorProvider } from "@/ide/EditorContext";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Binay | Binay Kumar Das — Product Owner · AI Enthusiast · Full Stack Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Binay Kumar Das — Product Owner · AI Enthusiast · Full Stack Developer based in Bengaluru, India. Interactive VS Code-themed portfolio showcasing projects in React, Angular, Node, Express.js and TypeScript.";
    if (metaDesc) metaDesc.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description"; m.content = desc; document.head.appendChild(m);
    }
  }, []);

  return (
    <EditorProvider>
      <h1 className="sr-only">Binay | Binay Kumar Das — Product Owner · AI Enthusiast · Full Stack Developer</h1>
      <Layout />
    </EditorProvider>
  );
};

export default Index;
