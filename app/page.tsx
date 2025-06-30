'use client';

import { useState } from 'react';
import { Project } from '@/lib/constants';
import ProjectList from '@/components/ProjectList';
import ProjectPreview from '@/components/ProjectPreview';
import ChatWrapper from '@/components/ChatWrapper';
import Blog from '@/components/BlogWrapper';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="flex h-screen w-screen transition-all duration-300 ease-in-out overflow-hidden relative">
      {/* Sidebar: Project List */}
      <aside className="hidden md:flex md:w-[320px] md:scale-70 md:items-center overflow-y-auto px-4 py-4">
        <ProjectList onSelect={setSelectedProject} />
      </aside>

      <section className="flex w-full h-full items-center justify-center p-6 md:p-8">
        <div className="flex-1 flex justify-center">
          <Blog />
        </div>
        <div className="w-[440px] max-w-[90vw]">
          <ChatWrapper />
        </div>
      </section>

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
