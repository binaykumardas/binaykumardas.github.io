import React from "react";
import { FileNode, FileType } from "./types";
import { HomeTab } from "./tabs/HomeTab";
import { AboutTab } from "./tabs/AboutTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { VideosTab } from "./tabs/VideosTab";
import { ContactTab } from "./tabs/ContactTab";
import { ReadmeTab } from "./tabs/ReadmeTab";
import { PackageJsonTab } from "./tabs/PackageJsonTab";

export const FILE_SYSTEM: FileNode[] = [
  {
    id: "root",
    name: "Binay_Portfolio",
    type: FileType.FOLDER,
    children: [
      {
        id: "src",
        name: "src",
        type: FileType.FOLDER,
        children: [
          {
            id: "components",
            name: "components",
            type: FileType.FOLDER,
            children: [
              { id: "home", name: "Home.tsx", type: FileType.FILE, language: "typescript", content: <HomeTab /> },
              { id: "videos", name: "Videos.tsx", type: FileType.FILE, language: "typescript", content: <VideosTab /> },
            ],
          },
          {
            id: "pages",
            name: "pages",
            type: FileType.FOLDER,
            children: [
              { id: "about", name: "About.md", type: FileType.FILE, language: "markdown", content: <AboutTab /> },
            ],
          },
        ],
      },
      {
        id: "data",
        name: "data",
        type: FileType.FOLDER,
        children: [
          { id: "projects", name: "projects.json", type: FileType.FILE, language: "json", content: <ProjectsTab /> },
        ],
      },
      {
        id: "styles",
        name: "styles",
        type: FileType.FOLDER,
        children: [
          { id: "contact", name: "contact.css", type: FileType.FILE, language: "css", content: <ContactTab /> },
        ],
      },
      { id: "readme", name: "README.md", type: FileType.FILE, language: "markdown", content: <ReadmeTab /> },
      { id: "package", name: "package.json", type: FileType.FILE, language: "json", content: <PackageJsonTab /> },
    ],
  },
];
