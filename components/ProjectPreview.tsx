'use client';

import { Project } from '@/lib/constants';
import { useTheme } from './ThemeProvider';
import Link from 'next/link';

type Props = {
  project: Project | null;
};

export default function ProjectPreview({ project }: Props) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full max-w-lg p-6 rounded-2xl shadow-2xl border transition-all duration-300 ease-in-out ${project ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
        } ${darkMode
          ? 'bg-[#0e0e1a] text-white border-white/10'
          : 'bg-white text-black border-gray-300'
        }`}
    >

      {project && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{project.longDescription}</p>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-500 hover:underline text-sm"
          >
            Visit Repository →
          </Link>
        </div>
      )}
    </div>
  );
}
