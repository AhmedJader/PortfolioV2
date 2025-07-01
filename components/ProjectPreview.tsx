'use client';

import { Project } from '@/lib/constants';
import Link from 'next/link';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectPreview({ project, onClose }: Props) {
  return (
    <div className="relative w-full max-w-lg p-6 rounded-2xl shadow-2xl border bg-[var(--color-card)] text-[var(--color-text)] border-[var(--color-border)] transition-all duration-300 ease-in-out">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="hover:cursor-pointer absolute top-4 right-4 text-xl font-bold text-red-500 hover:text-red-700"
        aria-label="Close"
      >
        ×
      </button>

      {project && (
        <div className="space-y-4 mt-4">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{project.longDescription}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-500 hover:underline text-sm"
          >
            Visit URL →
          </a>
        </div>
      )}
    </div>
  );
}
