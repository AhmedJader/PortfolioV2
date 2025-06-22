'use client';
import MessageBubble from './MessageBubble';

export default function MessageList({ messages, bottomRef }: { messages: any[]; bottomRef: any }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-8 space-y-4 scrollbar-hide">
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
