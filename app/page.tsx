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
      } flex h-screen w-screen transition-all duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-[#121224] to-black text-white`}
    >
      {/* Use SVG from public folder */}
      <img
        src="/theme.svg"  // Reference the SVG as a static asset
        alt="Toggle Theme"
        className="absolute top-4 right-4 z-50 cursor-pointer hover:opacity-80 transition"
        onClick={() => setIsInverted((prev) => !prev)} // Toggle theme on click
        width={40} // Adjust width of the image as needed
        height={40} // Adjust height of the image as needed
      />

      <div className="flex-1 flex items-start justify-center h-full p-8 gap-8 overflow-hidden">
        <ProjectFeed />
        <ChatWrapper />
      </div>
    </main>
  );
}
