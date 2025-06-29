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
    <div className={`flex w-full justify-${isAssistant ? 'start' : 'end'} transition-all duration-300 ease-in-out`}>
      <div className={`max-w-[85%] px-4 py-2 rounded-xl border ${isAssistant
        ? darkMode
          ? 'bg-white/10 border-white text-white'
          : 'bg-gray-100 border-gray-300 text-black'
        : darkMode
          ? 'bg-white text-black border-white'
          : 'bg-black text-white border-black'
        }`}>
        <div className="text-sm font-bold mb-1">
          {isAssistant ? 'Ahmed' : 'You'}
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
