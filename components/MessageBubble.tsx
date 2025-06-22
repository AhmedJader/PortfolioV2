type MessageProps = {
  role: string;
  content: string;
  toolName?: string;
};

export default function MessageBubble({ role, content, toolName }: MessageProps) {
  return (
    <div className={`flex w-full justify-${role === 'assistant' ? 'start' : 'end'}`}>
      <div
        className={`max-w-[85%] px-4 py-2 rounded-xl border ${
          role === 'assistant'
            ? 'bg-white/10 border-white text-white'
            : 'bg-white text-black border-white'
        }`}
      >
        <div className="text-sm font-bold mb-1">
          {role === 'assistant' ? 'Ahmed' : 'You'}
        </div>
        <p className="whitespace-pre-wrap text-sm">
          {content.length > 0 ? content : (
            <span className="italic font-light">
              {'calling tool: ' + toolName}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
