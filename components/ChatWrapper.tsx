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

      {/* Header with theme toggle */}
      <div className="flex items-center justify-end px-4 py-2 border-b border-white/10">
        <ThemeToggle />
      </div>

      <MessageList messages={messages} bottomRef={bottomRef} />
      <MessageInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
    );
}
