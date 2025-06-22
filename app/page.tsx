'use client';

import { useChat } from '@ai-sdk/react';

export default function Home() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat({
    maxSteps: 3, // important for tool calls
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4 px-4">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div className="font-bold">{m.role}</div>
            <p>
              {m.content.length > 0 ? (
                m.content
              ) : (
                <span className="italic font-light">
                  {'Calling tool: ' + m?.toolInvocations?.[0]?.toolName}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="px-4">
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded"
          value={input}
          placeholder="Ask the AI anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
