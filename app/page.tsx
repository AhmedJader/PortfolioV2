'use client';

import ChatWrapper from '@/components/ChatWrapper';
import ProjectFeed from '@/components/ProjectFeed';

export default function Home() {
  return (
    <main className="flex h-screen w-screen transition-all duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-[#121224] to-black text-white">
      <aside className="hidden md:flex md:w-[280px] md:scale-[0.70] lg:w-[320px] xl:w-[360px] overflow-y-auto px-2 py-4">
        <div className="w-full">
          <ProjectFeed />
        </div>
      </aside>
      <section className="flex flex-1 items-center justify-center">
        <div className="flex items-center justify-center w-full h-full px-4">
          <ChatWrapper />
        </div>
      </section>
    </main>
  );
}
