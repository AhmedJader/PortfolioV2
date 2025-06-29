'use client';

import Image from 'next/image';
import { useTheme } from './ThemeProvider'; // update path if needed

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover:opacity-80 hover:ease-in-out transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:animate-spin"
      title="Toggle theme"
    >
      <Image
        src="/theme.svg"
        alt="Toggle Theme"
        width={30}
        height={30}
      />
    </button>
  );
}
