// components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'inverted') setIsInverted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isInverted ? 'inverted' : 'normal');
    document.documentElement.classList.toggle('invert', isInverted);
  }, [isInverted]);

  return (
    <button
      onClick={() => setIsInverted((prev) => !prev)}
      className="hover:opacity-80 hover:ease-in-out transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:animate-spin"
      title="Toggle theme"
    >
      <Image
        src="/theme.svg"
        alt="Toggle Theme"
        width={24}
        height={24}
      />
    </button>
  );
}
