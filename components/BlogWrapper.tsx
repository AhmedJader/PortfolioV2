'use client';

import { useEffect, useState } from 'react';
import { INFOCARDS } from '@/lib/constants';

export default function BlogWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDesc, setTypedDesc] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'title' | 'desc'>('title');

  const activeCard = INFOCARDS[activeIndex];

  // Animate title then description
  useEffect(() => {
    const typingSpeed = 25;
    if (phase === 'title') {
      if (charIndex < activeCard.title.length) {
        const timeout = setTimeout(() => {
          setTypedTitle((prev) => prev + activeCard.title[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setCharIndex(0);
        setPhase('desc');
      }
    } else if (phase === 'desc') {
      if (charIndex < activeCard.description.length) {
        const timeout = setTimeout(() => {
          setTypedDesc((prev) => prev + activeCard.description[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, phase, activeCard]);

  // Rotate card every 6s, reset states
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INFOCARDS.length);
      setTypedTitle('');
      setTypedDesc('');
      setCharIndex(0);
      setPhase('title');
    }, 6000); // 6 seconds for each card

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] w-full max-w-md bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 p-6 space-y-6">

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-2">
        <img
          src="/ahmed.webp"
          alt="Ahmed"
          className="w-24 h-24 rounded-full border border-[var(--color-border)] object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">Ahmed Abduljader</h2>
          <p className="text-sm text-[var(--color-subtext)]">Software Engineer · Toronto, Canada</p>
        </div>
      </div>
      {/* Dot Indicators */}
      <div className="flex space-x-2">
        {INFOCARDS.map((_, i) => (
          <span
            key={i}
            className={`text-xs ${i === activeIndex ? 'text-white' : 'text-[var(--color-subtext)]'}`}
          >
            {i === activeIndex ? '●' : '○'}
          </span>
        ))}
      </div>

      {/* InfoCard with typewriter animation */}
      <div className="w-full bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl p-4 min-h-[140px]">
        <h3 className="font-semibold text-base mb-2">
          {typedTitle}
          <span className="animate-pulse">{phase === 'title' && '|'}</span>
        </h3>
        <p className="text-sm text-[var(--color-subtext)] whitespace-pre-wrap">
          {typedDesc}
          <span className="animate-pulse">{phase === 'desc' && '|'}</span>
        </p>
      </div>

      {/* InfoCard with typewriter animation */}
      <div className="w-full bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl p-4">
        <h3 className="font-semibold text-base mb-2">🛠 Tech Stack</h3>
        <p className="text-sm text-[var(--color-subtext)]">
          <strong>Frontend:</strong> Next.js 14, TailwindCSS v4<br />
          <strong>Backend:</strong> Drizzle ORM, NeonDB, Flask<br />
          <strong>AI/RAG:</strong> OpenAI, Vercel AI SDK, pgvector<br />
          <strong>Infra:</strong> Serverless, Vercel, LangChain
        </p>
      </div>



      {/* InfoCard with typewriter animation */}
      <div className="w-full bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl p-4">
        <h3 className="font-semibold text-base mb-2">🧭 Now</h3>
        <p className="text-sm text-[var(--color-subtext)]">
          • Building an AI-powered résumé agent using RAG<br />
          • Exploring local embedding fallback (Ollama)<br />
          • Preparing for internship interviews & open source<br />
          • Studying advanced systems design & LLM chaining
        </p>
      </div>


    </div>
  );
}
