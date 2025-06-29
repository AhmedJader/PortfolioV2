'use client';

import { useEffect, useState } from 'react';
import ChatWrapper from '@/components/ChatWrapper';
import ProjectFeed from '@/components/ProjectFeed';

export default function Home() {
  const [isInverted, setIsInverted] = useState(false);

  // Load saved theme on first load
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'inverted') setIsInverted(true);
  }, []);

  // Save theme when it changes
  useEffect(() => {
    localStorage.setItem('theme', isInverted ? 'inverted' : 'normal');
  }, [isInverted]);

  return (
    <main
      className={`${isInverted ? 'invert' : ''} flex h-screen w-screen transition-all duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-[#121224] to-black text-white`}
    >
      {/* Project Feed - hidden on small screens */}
      <aside className="hidden md:flex md:w-[280px] md:scale-[0.70] lg:w-[320px] xl:w-[360px] border-r border-white/10 overflow-y-auto px-2 py-4">
        <div className="w-full">
          <ProjectFeed />
        </div>
      </aside>

      {/* Chat Area - always centered, responsive width */}
      <section className="flex flex-1 items-center justify-center">
        <div className="flex items-center justify-center w-full h-full px-4">
          <ChatWrapper />
        </div>
      </section>

    </main>
  );
}
