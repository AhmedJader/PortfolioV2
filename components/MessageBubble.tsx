import { useTheme } from './ThemeProvider';

type MessageProps = {
  role: string;
  content: string;
  toolName?: string;
};

export default function MessageBubble({ role, content, toolName }: MessageProps) {
  const { darkMode } = useTheme();
  const isAssistant = role === 'assistant';

  return (
    <div className={`flex w-full ${isAssistant ? 'justify-start' : 'justify-end'} transition-all duration-300 ease-in-out`}>
      <div
        className={`max-w-[80%] hover:cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out px-4 py-2 rounded-xl border text-sm ${
          isAssistant
            ? darkMode
              ? 'bg-white/10 border-white text-white rounded-br-xl'
              : 'bg-gray-100 border-gray-300 text-black rounded-br-xl'
            : darkMode
              ? 'bg-white text-black border-white rounded-bl-xl'
              : 'bg-black text-white border-black rounded-bl-xl'
        }`}
      >
        <div className="font-semibold mb-1">{isAssistant ? 'Ahmed' : 'You'}</div>
        <p className="whitespace-pre-wrap">
          {content.length > 0 ? content : <span className="italic font-light">calling tool: {toolName}</span>}
        </p>
      </div>
    </div>
  );
}
