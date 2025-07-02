'use client';

import { useEffect, useState } from 'react';
import { INFOCARDS } from '@/lib/constants';

export default function BlogWrapper() {
  const [idx, setIdx] = useState(0);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [char, setChar] = useState(0);
  const [phase, setPhase] = useState<'title' | 'desc'>('title');
  const card = INFOCARDS[idx];

  // Typewriter animation
  useEffect(() => {
    let t: NodeJS.Timeout;
    const speed = 25;
    if (phase === 'title' && char < card.title.length) {
      t = setTimeout(() => {
        setTitle(prev => prev + card.title[char]);
        setChar(c => c + 1);
      }, speed);
    } else if (phase === 'title') {
      setChar(0);
      setPhase('desc');
    } else if (char < card.description.length) {
      t = setTimeout(() => {
        setDesc(prev => prev + card.description[char]);
        setChar(c => c + 1);
      }, speed);
    }
    return () => clearTimeout(t);
  }, [char, phase, card]);

  // Rotate card every 6 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => (i + 1) % INFOCARDS.length);
      setTitle('');
      setDesc('');
      setChar(0);
      setPhase('title');
    }, 6000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      className="
    flex flex-col w-full
    min-h-[420px] md:min-h-[500px] lg:min-h-[550px]
    max-h-full
    justify-between
    bg-[var(--color-card)] text-[var(--color-text)]
    border border-[var(--color-border)] rounded-2xl shadow-xl
    p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4
    transition-colors duration-300
  "
    >

      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-1">
        <img
          src="/ahmed.webp"
          alt="Ahmed Abduljader"
          className="hover:cursor-pointer hover:animate-spin hover:scale-105 w-16 h-16 md:w-20 md:h-20 rounded-full border border-[var(--color-border)] object-cover"
        />
        <h2 className="text-lg md:text-xl font-semibold">Ahmed Abduljader</h2>
        <p className="text-xs md:text-sm text-[var(--color-subtext)]">
          Software Engineer · Toronto, Canada
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-1 text-[10px] md:text-xs">
        {INFOCARDS.map((_, i) => (
          <span
            key={i}
            className={i === idx ? 'text-white' : 'text-[var(--color-subtext)]'}
          >
            {i === idx ? '●' : '○'}
          </span>
        ))}
      </div>

      {/* Rotating InfoCard */}
      <div className="flex flex-col flex-grow cursor-pointer">
        <div
        className="
    w-full
    h-[110px] md:h-[120px] lg:h-[150px]
    bg-[var(--color-background)] text-[var(--color-text)]
    border border-[var(--color-border)] rounded-xl
    p-4 md:p-4 transition-transform hover:scale-[1.03]
    transform-gpu will-change-transform
    overflow-hidden flex flex-col flex-grow
  "
      >
        <div className="h-full overflow-hidden">
          <h3 className="text-sm md:text-base font-medium leading-tight mb-1">
            {title}
            {phase === 'title' && <span className="animate-pulse">|</span>}
          </h3>
          <p
            className="
        text-[11px] md:text-sm text-[var(--color-subtext)] leading-relaxed
        overflow-hidden text-balance max-h-full"
          >
            {desc}
            {phase === 'desc' && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </div>
      </div>



      {/* Static InfoCards */}
      <div className="flex flex-col gap-3 flex-grow cursor-pointer">
        <div
          className="
            bg-[var(--color-background)] text-[var(--color-text)]
            border border-[var(--color-border)] rounded-xl
            p-4 md:p-4 transition-transform hover:scale-[1.03]
            transform-gpu will-change-transform
          "
        >
          <h3 className="text-sm md:text-base font-medium leading-tight mb-2">
            🧠 Tech Skills
          </h3>
          <p className="text-[11px] md:text-sm text-[var(--color-subtext)] leading-relaxed">
            <strong>Frontend:</strong> Next.js 14 (App Router), React, TailwindCSS v4, TypeScript<br />
            <strong>Backend:</strong> FastAPI, Express.js, Flask, Drizzle ORM<br />
            <strong>Databases:</strong> PostgreSQL (NeonDB), MongoDB, Supabase<br />
            <strong>AI/RAG:</strong> OpenAI GPT-4o, Vercel AI SDK, LangChain, Ollama, pgvector<br />
            <strong>Languages:</strong> Python, Java, C#, JavaScript, TypeScript, HTML/CSS
          </p>
        </div>

        <div
          className=" cursor-pointer
            bg-[var(--color-background)] text-[var(--color-text)]
            border border-[var(--color-border)] rounded-xl
            p-4 md:p-5 transition-transform hover:scale-[1.03]
            transform-gpu will-change-transform
          "
        >
          <h3 className="text-sm md:text-base font-medium leading-tight mb-2">
            🌟 Beyond the Code
          </h3>
          <p className="text-[11px] md:text-sm text-[var(--color-subtext)] leading-relaxed">
            <strong>Hobbies:</strong> Watching anime, hitting the gym, playing basketball<br />
            <strong>What I enjoy:</strong> Doomscrolling TikTok videos<br />
            <strong>Outside tech:</strong> Mentally (Netflix binges) & physically (lifting)
          </p>
        </div>
      </div>
    </div>
  );
}
