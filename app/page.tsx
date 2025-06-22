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
      className={`${
        isInverted ? 'invert' : ''
      } flex h-screen w-screen overflow-hidden bg-gradient-to-b from-[#121224] to-black text-white`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsInverted((prev) => !prev)}
        className="absolute top-4 right-4 z-50 px-4 py-2 bg-white text-black rounded-md shadow hover:opacity-80 transition"
      >
        Toggle Theme
      </button>

      <div className="flex-1 flex items-start justify-center h-full p-8 gap-8 overflow-hidden">
        <ProjectFeed />
        <ChatWrapper />
      </div>
    </main>
  );
}
