'use client';

import { useEffect, useState } from 'react';
import { INFOCARDS } from '@/lib/constants';

export default function BlogWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % INFOCARDS.length);
    }, 3000); // cycle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const activeCard = INFOCARDS[activeIndex];

  return (
    <div className="flex flex-col items-center h-[90vh] w-full max-w-md bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 p-6 space-y-6">

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-2">
        <img src="/ahmed.webp" alt="Ahmed" className="w-24 h-24 rounded-full border border-[var(--color-border)] object-cover" />
        <div>
          <h2 className="text-xl font-bold">Ahmed Abduljader</h2>
          <p className="text-sm text-[var(--color-subtext)]">Software Engineer · Toronto, Canada</p>
        </div>
      </div>

      {/* Cycling InfoCard */}
      <div className="w-full bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl p-4 transition-opacity duration-500 ease-in-out min-h-[120px]">
        <h3 className="font-semibold text-base">{activeCard.title}</h3>
        <p className="text-sm mt-1 text-[var(--color-subtext)]">{activeCard.description}</p>
      </div>
    </div>
  );
}
