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

  useEffect(() => {
    let t: NodeJS.Timeout;
    const speed = 25;
    if (phase === 'title' && char < card.title.length) {
      t = setTimeout(() => {
        setTitle(prev => prev + card.title[char]);
        setChar(c => c + 1);
      }, speed);
    } else if (phase === 'title') {
      setChar(0); setPhase('desc');
    } else if (char < card.description.length) {
      t = setTimeout(() => {
        setDesc(prev => prev + card.description[char]);
        setChar(c => c + 1);
      }, speed);
    }
    return () => clearTimeout(t);
  }, [char, phase, card]);

  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => (i + 1) % INFOCARDS.length);
      setTitle(''); setDesc(''); setChar(0); setPhase('title');
    }, 6000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      className="
        flex flex-col w-full
        h-auto md:h-full
        justify-between
        bg-[var(--color-card)] text-[var(--color-text)]
        border border-[var(--color-border)] rounded-2xl shadow-xl
        p-4 space-y-3
        transition-colors duration-300
      "
    >
      {/* header */}
      <div className="flex flex-col items-center text-center space-y-1">
        <img
          src="/ahmed.webp"
          alt="Ahmed Abduljader"
          className="hover:cursor-pointer hover:animate-spin hover:scale-105 w-16 h-16 rounded-full border border-[var(--color-border)] object-cover"
        />
        <h2 className="text-lg font-semibold">Ahmed Abduljader</h2>
        <p className="text-xs text-[var(--color-subtext)]">
          Software Engineer · Toronto, Canada
        </p>
      </div>

      {/* dots */}
      <div className="flex justify-center space-x-1 text-[10px]">
        {INFOCARDS.map((_, i) => (
          <span key={i}
            className={i === idx ? 'text-white' : 'text-[var(--color-subtext)]'}>
            {i === idx ? '●' : '○'}
          </span>
        ))}
      </div>

      {/* rotating InfoCard */}
      <div
        className="
          w-full
          bg-[var(--color-background)] text-[var(--color-text)]
          border border-[var(--color-border)] rounded-xl
          p-4 transition-transform hover:scale-[1.03]
          transform-gpu will-change-transform
          min-h-[100px]
        "
      >
        <h3 className="text-sm font-medium leading-tight mb-1">
          {title}
          {phase === 'title' && <span className="animate-pulse">|</span>}
        </h3>
        <p className="text-[11px] text-[var(--color-subtext)] leading-relaxed">
          {desc}
          {phase === 'desc' && <span className="animate-pulse">|</span>}
        </p>
      </div>

      {/* static InfoCards */}
      <div className="flex flex-col gap-3 flex-grow">
        <div
          className="
            bg-[var(--color-background)] text-[var(--color-text)]
            border border-[var(--color-border)] rounded-xl
            p-4 transition-transform hover:scale-[1.03]
            transform-gpu will-change-transform
          "
        >
          <h3 className="text-sm font-medium leading-tight mb-2">🧠 Tech Skills</h3>
          <p className="text-[11px] text-[var(--color-subtext)] leading-relaxed">
            <strong>Frontend:</strong> Next.js 14 (App Router), React, TailwindCSS v4, TypeScript<br />
            <strong>Backend:</strong> FastAPI, Express.js, Flask, Drizzle ORM<br />
            <strong>Databases:</strong> PostgreSQL (NeonDB), MongoDB, Supabase<br />
            <strong>AI/RAG:</strong> OpenAI GPT-4o, Vercel AI SDK, LangChain, Ollama, pgvector<br />
            <strong>Languages:</strong> Python, Java, C#, JavaScript, TypeScript, HTML/CSS
          </p>
        </div>

        <div
          className="
            bg-[var(--color-background)] text-[var(--color-text)]
            border border-[var(--color-border)] rounded-xl
            p-4 transition-transform hover:scale-[1.03]
            transform-gpu will-change-transform
          "
        >
          <h3 className="text-sm font-medium leading-tight mb-2">🌟 Beyond the Code</h3>
          <p className="text-[11px] text-[var(--color-subtext)] leading-relaxed">
            <strong>Hobbies:</strong> Watching anime, hitting the gym, playing basketball<br />
            <strong>What I enjoy:</strong> Doomscrolling TikTok videos<br />
            <strong>Outside tech:</strong> Mentally (Netflix binges) & physically (lifting)
          </p>
        </div>
      </div>
    </div>
  );
}
