"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
}

export default function ProjectFeed() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const baseProjects = [
      {
        id: "1",
        name: "Personal Portfolio",
        description: "A portfolio website built with Next.js and TailwindCSS.",
        url: "https://github.com/your-username/portfolio",
      },
      {
        id: "2",
        name: "RAG Chatbot",
        description: "AI chatbot using OpenAI + vector DB for contextual memory.",
        url: "https://github.com/your-username/rag-chatbot",
      },
      {
        id: "3",
        name: "Finance Tracker",
        description: "Expense and budget tracking tool built with Flask and React.",
        url: "https://github.com/your-username/finance-tracker",
      },
    ];

    const generated = Array.from({ length: 40 }, (_, i) => {
      const base = baseProjects[i % baseProjects.length];
      return {
        ...base,
        id: `${i + 1}`,
        name: `${base.name} #${i + 1}`,
      };
    });

    setProjects(generated);
  }, []);

  return (
    <div className="relative w-full max-w-xs h-full px-2 transition-all duration-300 ease-in-out">
      {/* Add padding around the scroll container so scaled cards don’t clip */}
      <div className="relative w-full h-full pt-8 pb-8 overflow-hidden group"> {/* <-- group added here */}
        <div className="absolute top-0 left-0 w-full animate-vertical-scroll">
          <div className="flex flex-col items-center space-y-6 px-2">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="p-4 rounded-lg border hover:cursor-pointer border-gray-300 bg-[#1a1a2e] text-white shadow-md text-sm transform-gpu transition-transform w-[280px] hover:scale-[1.05]"
              >
                <h3 className="text-base font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}