'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatWrapper() {
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#121224] to-black text-white">
            <div className="flex flex-col h-[85vh] w-full max-w-lg bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                <MessageList messages={messages} bottomRef={bottomRef} />
                <MessageInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}
