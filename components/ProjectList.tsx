'use client';

import { PROJECTS, Project } from '@/lib/constants';

type Props = {
  onSelect: (project: Project | null) => void;
};

export default function ProjectList({ onSelect }: Props) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden pr-4">
      <div className="absolute top-0 left-0 w-full animate-vertical-scroll scrollbar-hide">
        <div className="flex flex-col gap-6 pr-2">
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              onClick={() => onSelect(project)}
              className="p-2 px-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] hover:scale-102 transition-transform origin-left transform cursor-pointer"
            >
              <h3 className="text-base font-semibold">{project.name}</h3>
              <p className="text-sm opacity-80">{project.shortDescription}</p>
              <span className="text-blue-400 text-sm mt-2 inline-block">Click on me to expand →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
