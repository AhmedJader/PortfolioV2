'use client';

import { useState } from 'react';
import { Project } from '@/lib/constants';
import ProjectList from '@/components/ProjectList';
import ProjectPreview from '@/components/ProjectPreview';
import ChatWrapper from '@/components/ChatWrapper';
import Blog from '@/components/BlogWrapper';
import { useTheme } from '@/components/ThemeProvider';

export default function Home() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="flex h-screen w-screen transition-all duration-300 ease-in-out overflow-hidden relative">
      {/* BACKGROUND LAYER */}
      <div className={`absolute inset-0 -z-10 h-full w-full transition-colors duration-500 ${darkMode ? 'bg-[#0b0c0e]' : 'bg-white'}`}>
        <div
          className={`
      absolute h-full w-full transition-colors duration-500
      ${darkMode
              ? 'bg-[radial-gradient(#3b3b3b_1px,transparent_1px)]'
              : 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]'}
      [background-size:16px_16px]
      [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
    `}
        />
      </div>



      {/* Sidebar: Project List */}
      <aside className="hidden md:flex md:w-[320px] md:scale-70 md:items-center overflow-y-auto px-4 py-4">
        <ProjectList onSelect={setSelectedProject} />
      </aside>

      {/* Chat + Blog Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 md:ml-20 w-full h-full p-6 md:p-10">
        <div className="flex justify-end items-center">
          <ChatWrapper />
        </div>
        <div className="hidden md:flex justify-end items-center">
          <Blog />
        </div>
      </section>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="fixed flex items-center justify-center backdrop-blur-lg inset-0 z-50 animate-fadeIn">
          <div className="pointer-events-auto max-w-[90vw] max-h-[90vh]">
            <ProjectPreview project={selectedProject} onClose={() => setSelectedProject(null)} />
          </div>
        </div>
      )}
    </main>

  );
}
