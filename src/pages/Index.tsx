import { Layout } from "@/ide/layout/Layout";
import { EditorProvider } from "@/ide/EditorContext";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Binay Kumar Das — Frontend Specialist · Software Engineer";
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Binay Kumar Das — Frontend Specialist based in Bhubaneswar, India. Interactive VS Code-themed portfolio showcasing projects in React, Angular, Node, and TypeScript.";
    if (metaDesc) metaDesc.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description"; m.content = desc; document.head.appendChild(m);
    }
  }, []);

  return (
    <EditorProvider>
      <h1 className="sr-only">Binay Kumar Das — Frontend Specialist & Software Engineer Portfolio</h1>
      <Layout />
    </EditorProvider>
  );
};

export default Index;
