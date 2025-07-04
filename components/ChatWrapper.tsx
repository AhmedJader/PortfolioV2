'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ThemeToggle from './ThemeToggle';

export default function ChatWrapper() {
  const { messages, input, handleInputChange, handleSubmit, append } = useChat();
  const hasAsked = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasAsked.current) {
      hasAsked.current = true;
      [
        'Can you tell me a bit about yourself?',
        'What are some of your biggest projects?',
      ].forEach((q, i) => {
        setTimeout(() => append({ role: 'user', content: q }), i * 4000);
      });
    }
  }, [append]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full w-full bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-4">
          <img
            src="/ahmed.webp"
            alt="Ahmed Abduljader"
            className="w-12 h-12 rounded-full object-cover border border-[var(--color-border)]"
          />
          <div>
            <h2 className="text-sm font-semibold">Ahmed Abduljader</h2>
            <p className="text-xs text-[var(--color-subtext)]">York University · Class of 2027</p>
            <a
              href="/ahmed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-blue-500 hover:underline"
            >
              📄 View Resume
            </a>
          </div>
        </div>
        <ThemeToggle />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-hide">
        <MessageList messages={messages} bottomRef={bottomRef} />
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <MessageInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
