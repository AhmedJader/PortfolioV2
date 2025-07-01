'use client';

import { useEffect, useState } from 'react';

export default function CheckProjectsPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay
    const showTimeout = setTimeout(() => setVisible(true), 1000);

    // Hide it after 8 seconds
    const hideTimeout = setTimeout(() => setVisible(false), 9000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-[10%] z-50 px-4 py-2 rounded-lg shadow-lg animate-bounce hover:cursor-pointer hover:scale-102 transition-all hidden md:block duration-500 text-sm
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        bg-[var(--color-card)] text-[var(--color-text)] border border-gray-300 dark:border-zinc-700
      `}
    >
      👀 Click on my projects below!
    </div>
  );
}
