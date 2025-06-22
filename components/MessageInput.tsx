// components/MessageInput.tsx

import SocialButtons from './SocialButtons';

type MessageInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function MessageInput({ input, handleInputChange, handleSubmit }: MessageInputProps) {
  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
      <div className="flex items-center gap-4">
        {/* Input takes most of the space */}
        <input
          className="flex-1 p-3 rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        
        {/* Social buttons beside input */}
        <div className="flex gap-3 text-white">
          <SocialButtons />
        </div>
      </div>
    </form>
  );
}
