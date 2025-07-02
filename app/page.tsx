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
  const [tab, setTab] = useState<'chat' | 'blog'>('chat');

  return (
    <>
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

        {/* MOBILE VIEW TABS */}
        <div className="md:hidden flex-1 relative overflow-hidden">
          {/* Chat */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${tab === 'chat' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <section className="flex justify-center items-center p-4 h-full">
              <div className="w-full max-w-[640px] h-[90vh] px-4">
                <ChatWrapper />
              </div>
            </section>
          </div>

          {/* Blog */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${tab === 'blog' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="p-4 pb-20 flex justify-center overflow-y-auto h-[100dvh]">
              <div className="w-full max-w-[320px]">
                <BlogWrapper />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP: 3-column layout */}
        <aside className="hidden md:flex md:w-64 p-4 flex-col items-center justify-center">
          <CheckProjectsPopup />
          <div className="mt-4 h-[80%] w-full overflow-hidden px-4 md:px-6">
            <ProjectList onSelect={setSelectedProject} />
          </div>
        </aside>

        <section className="hidden md:flex flex-1 p-4 justify-center items-center overflow-hidden">
          <div className="w-full max-w-[640px] h-[90%] px-4 md:px-6">
            <ChatWrapper />
          </div>
        </section>

        <aside className="hidden md:flex md:w-[340px] p-4 items-center justify-center">
          <div className="
            w-full max-w-[320px]
            max-h-[660px]
            h-full
            flex items-center justify-center
            overflow-visible
          ">
            <BlogWrapper />
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

      {/* Mobile Tab Bar (only Chat + Blog) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-[var(--color-card)] border-t border-[var(--color-border)] flex justify-around text-xs py-2 z-50">
        <button
          onClick={() => setTab('chat')}
          className={`transition-all ${tab === 'chat' ? 'font-bold text-white' : 'text-[var(--color-subtext)]'}`}
        >
          💬 Chat
        </button>
        <button
          onClick={() => setTab('blog')}
          className={`transition-all ${tab === 'blog' ? 'font-bold text-white' : 'text-[var(--color-subtext)]'}`}
        >
          👤 About
        </button>
      </div>
    </>
  );
}
