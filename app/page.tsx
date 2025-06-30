'use client';

import { useState } from 'react';
import { Project } from '@/lib/constants';
import ProjectList from '@/components/ProjectList';
import ProjectPreview from '@/components/ProjectPreview';
import ChatWrapper from '@/components/ChatWrapper';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <main className="flex h-screen w-screen transition-all duration-300 ease-in-out overflow-hidden">
      {/* Sidebar: List */}
      <aside className="hidden md:flex md:w-[320px] md:scale-80 md:items-center overflow-y-auto px-4 py-4">
        <ProjectList onHover={setHoveredProject} />
      </aside>

      {/* Main: Chat + Preview */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-center w-full h-full px-4 py-6 space-y-6 md:space-y-0 md:space-x-6">
        <ProjectPreview project={hoveredProject} />
        <div className="flex-1 h-full items-center justify-center p-6 md:p-8 ">
          <ChatWrapper />
        </div>
      </section>
    </main>
  );
}
