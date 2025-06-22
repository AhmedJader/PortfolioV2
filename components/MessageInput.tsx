type MessageInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function MessageInput({ input, handleInputChange, handleSubmit }: MessageInputProps) {
  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
      <input
        className="w-full p-3 rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
        value={input}
        placeholder="Say something..."
        onChange={handleInputChange}
      />
    </form>
  );
}
