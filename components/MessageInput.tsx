'use client';

import SocialButtons from './SocialButtons';
import { useTheme } from './ThemeProvider';

type MessageInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function MessageInput({ input, handleInputChange, handleSubmit }: MessageInputProps) {
  const { darkMode } = useTheme();

  return (
    <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="flex items-center gap-4">
        <input
          className={`flex-1 p-3 rounded-xl border ${
            darkMode
              ? 'border-white/20 bg-black/50 text-white placeholder-gray-400'
              : 'border-black/10 bg-white text-black placeholder-gray-600'
          } focus:outline-none focus:ring-2 ${
            darkMode ? 'focus:ring-white/20' : 'focus:ring-black/20'
          }`}
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <div className="flex gap-3">
          <SocialButtons />
        </div>
      </div>
    </form>
  );
}
