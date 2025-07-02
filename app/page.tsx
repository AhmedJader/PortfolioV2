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
    <main className="flex flex-col md:flex-row h-screen w-screen overflow-hidden relative">
      {/* BG */}
      <div className="absolute inset-0 -z-10 bg-[var(--color-background)] transition-colors duration-500">
        <div
          className="
        absolute inset-0
        bg-[radial-gradient(var(--color-border)_1px,transparent_1px)]
        [background-size:16px_16px]
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* LEFT: Project Feed */}
      <aside className="w-full md:w-64 p-4 flex flex-col items-center justify-center">
        <CheckProjectsPopup />
        <div className="mt-4 h-[80%] w-full overflow-hidden px-4 md:px-6">
          <ProjectList onSelect={setSelectedProject} />
        </div>
      </aside>

      {/* MIDDLE: Chat */}
      <section className="flex-1 p-4 flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-[640px] h-[90%] px-4 md:px-6">
          <ChatWrapper />
        </div>
      </section>

      {/* RIGHT: Blog */}
      <aside className="hidden md:flex md:w-[340px] p-4 flex-col justify-center items-center">
        <div className="w-full px-4 md:px-6 h-[90%] overflow-hidden">
          <div className="h-full overflow-y-auto scrollbar-hide">
            <BlogWrapper />
          </div>
        </div>
      </aside>


      {/* Modal */}
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
