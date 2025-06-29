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

      const questions = [
        "Can you tell me a bit about yourself?",
        "What are some of your biggest projects?",
      ];

      questions.forEach((q, i) => {
        setTimeout(() => {
          append({ role: 'user', content: q });
        }, i * 4000);
      });
    }
  }, [append]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[90vh] w-full max-w-lg bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-xl overflow-hidden">

      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        {/* Left: Image and Info */}
        <div className="flex items-center gap-4">
          <img
            src="/ahmed.webp"
            alt="Ahmed Abduljader"
            className="w-12 h-12 rounded-full object-cover border border-white/20"
          />
          <div className="text-white">
            <h2 className="text-sm font-semibold">Ahmed Abduljader</h2>
            <p className="text-xs text-gray-400">
              York University · Class of 2027<br />
              Toronto, Ontario
            </p>
          </div>
        </div>

        {/* Right: Theme Toggle */}
        <ThemeToggle />
      </div>


      <MessageList messages={messages} bottomRef={bottomRef} />
      <MessageInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  );
}
