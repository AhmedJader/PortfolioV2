'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef } from 'react';

export default function Chat() {
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
    <div className="flex flex-col h-screen w-full max-w-md mx-auto">
      {/* Chat scrollable area */}
      <div className="flex-1 overflow-y-auto px-4 py-24 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role === 'assistant' ? 'ahmed' : m.role}</div>
              <p>
                {m.content.length > 0 ? (
                  m.content
                ) : (
                  <span className="italic font-light">
                    {'calling tool: ' + m?.toolInvocations?.[0].toolName}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input at bottom */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <input
          className="w-full p-2 border border-gray-300 rounded shadow"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
