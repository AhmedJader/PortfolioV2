'use client';
import { useState } from 'react';
import type { Project } from '@/lib/constants';
import CheckProjectsPopup from '@/components/CheckProjectsPopup';
import ProjectList from '@/components/ProjectList';
import ProjectPreview from '@/components/ProjectPreview';
import ChatWrapper from '@/components/ChatWrapper';
import BlogWrapper from '@/components/BlogWrapper';
import { useTheme } from '@/components/ThemeProvider';

export default function Home() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="flex h-screen w-screen overflow-hidden relative">
      {/* BG */}
      <div className="absolute inset-0 -z-10 bg-[var(--color-background)] transition-colors duration-500">
        <div className="
          absolute inset-0
          bg-[radial-gradient(var(--color-border)_1px,transparent_1px)]
          [background-size:16px_16px]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
        " />
      </div>

      {/* Left feed – fixed 192px */}
      <aside className="w-48 justify-center p-4 flex flex-col h-full">
        <CheckProjectsPopup />
        <div className="flex-1 flex items-center justify-center">
          <div className="h-[80%] w-full overflow-hidden">
            <ProjectList onSelect={setSelectedProject} />
          </div>
        </div>

      </aside>

      {/* Middle chat – flex-grow */}
      <section className="flex-1 p-4 flex justify-center items-center">
        <div className="h-full w-full max-w-lg">
          <ChatWrapper />
        </div>
      </section>

      {/* Right blog – fixed 320px */}
      <aside className="w-100 flex-shrink-0 p-4 flex flex-col h-full">
        <BlogWrapper />
      </aside>

      {/* Modal with fade-in */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg p-6 animate-fadeIn">
          <div className="w-full max-w-lg">
            <ProjectPreview
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </div>
      )}
    </main>
  );
}
