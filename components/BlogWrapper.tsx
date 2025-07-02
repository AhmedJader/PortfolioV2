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

  // Typewriter effect
  useEffect(() => {
    let t: NodeJS.Timeout;
    const speed = 25;
    if (phase === 'title' && char < card.title.length) {
      t = setTimeout(() => {
        setTitle((prev) => prev + card.title[char]);
        setChar((c) => c + 1);
      }, speed);
    } else if (phase === 'title') {
      setChar(0);
      setPhase('desc');
    } else if (char < card.description.length) {
      t = setTimeout(() => {
        setDesc((prev) => prev + card.description[char]);
        setChar((c) => c + 1);
      }, speed);
    }
    return () => clearTimeout(t);
  }, [char, phase, card]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % INFOCARDS.length);
      setTitle('');
      setDesc('');
      setChar(0);
      setPhase('title');
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="
      flex flex-col w-full h-full
      bg-[var(--color-card)] text-[var(--color-text)]
      border border-[var(--color-border)] rounded-2xl shadow-lg
      p-4 gap-3 overflow-visible transition-colors duration-300
    ">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-1">
        <img
          src="/ahmed.webp"
          alt="Ahmed Abduljader"
          className="w-16 h-16 rounded-full border border-[var(--color-border)] object-cover hover:cursor-pointer hover:animate-spin"
        />
        <h2 className="text-base font-semibold">Ahmed Abduljader</h2>
        <p className="text-xs text-[var(--color-subtext)]">Software Engineer · Toronto, Canada</p>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-1 text-xs">
        {INFOCARDS.map((_, i) => (
          <span key={i} className={i === idx ? 'text-white' : 'text-[var(--color-subtext)]'}>
            {i === idx ? '●' : '○'}
          </span>
        ))}
      </div>

      {/* Info Cards */}
      <div className="flex flex-col flex-1 justify-evenly gap-3">
        {/* Animated Card */}
        <div className="
          bg-[var(--color-background)] text-[var(--color-text)]
          border border-[var(--color-border)] rounded-xl
          p-3 min-h-[100px] md:min-h-[120px]
          hover:scale-[1.015] hover:cursor-pointer transition-all
        ">
          <h3 className="text-sm font-medium mb-1">
            {title}{phase === 'title' && <span className="animate-pulse">|</span>}
          </h3>
          <p className="text-xs text-[var(--color-subtext)] leading-snug">
            {desc}{phase === 'desc' && <span className="animate-pulse">|</span>}
          </p>
        </div>

        {/* Tech Skills */}
        <div className="
          bg-[var(--color-background)] border border-[var(--color-border)]
          rounded-xl p-3 text-xs leading-relaxed
          hover:scale-[1.015] hover:shadow-md hover:cursor-pointer transition-all
        ">
          <h3 className="text-sm font-semibold mb-1">🧠 Tech Skills</h3>
          <p className="text-xs text-[var(--color-subtext)]">
            <strong>Frontend:</strong> Next.js 14, React, TailwindCSS v4, TypeScript<br />
            <strong>Backend:</strong> FastAPI, Express.js, Flask, Drizzle ORM<br />
            <strong>Databases:</strong> PostgreSQL (NeonDB), MongoDB, Supabase<br />
            <strong>AI/RAG:</strong> OpenAI GPT-4o, Vercel AI SDK, LangChain, Ollama, pgvector<br />
            <strong>Languages:</strong> Python, Java, C#, JavaScript, TypeScript, HTML/CSS
          </p>
        </div>

        {/* Beyond the Code */}
        <div className="
          bg-[var(--color-background)] border border-[var(--color-border)]
          rounded-xl p-3 text-xs leading-relaxed
          hover:scale-[1.015] hover:shadow-md hover:cursor-pointer transition-all
        ">
          <h3 className="text-sm font-semibold mb-1">🌟 Beyond the Code</h3>
          <p className="text-xs text-[var(--color-subtext)]">
            <strong>Hobbies:</strong> Watching anime, hitting the gym, playing basketball<br />
            <strong>What I enjoy:</strong> Doomscrolling TikTok videos<br />
            <strong>Outside tech:</strong> Mentally (Netflix binges) & physically (lifting)
          </p>
        </div>
      </div>
    </div>
  );
}
