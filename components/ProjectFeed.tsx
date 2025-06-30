'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PROJECTS, Project } from '@/lib/constants';

export default function ProjectFeed() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div className="flex w-full max-w-7xl mx-auto px-4 py-10 space-x-8">
      {/* Left: Project List */}
      <div className="w-1/3 overflow-y-auto h-[600px] pr-2 border-r border-[var(--color-border)]">
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition-transform transform hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-base font-semibold">{project.name}</h3>
              <p className="text-sm opacity-80">{project.shortDescription}</p>
              <span className="text-blue-400 text-sm mt-2 inline-block">Hover to expand →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Expanded Preview */}
      <div
        className={`w-2/3 transition-all duration-300 ease-in-out ${
          hoveredProject ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
        } bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] p-6 rounded-xl shadow-xl`}
      >
        {hoveredProject && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{hoveredProject.name}</h2>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{hoveredProject.longDescription}</p>
            <Link
              href={hoveredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:underline text-sm"
            >
              Visit Repository →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
