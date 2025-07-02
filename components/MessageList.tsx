'use client';

import MessageBubble from './MessageBubble';

export default function MessageList({ messages, bottomRef }: { messages: any[]; bottomRef: any }) {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((m) => (
        <MessageBubble
          key={m.id}
          role={m.role}
          content={m.content}
          toolName={m?.toolInvocations?.[0]?.toolName}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
