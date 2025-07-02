'use client';
import { PROJECTS, Project } from '@/lib/constants';

type Props = {
  onSelect: (project: Project | null) => void;
};

export default function ProjectList({ onSelect }: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden pr-2">
      <div className="absolute top-0 left-0 w-full animate-vertical-scroll scrollbar-hide">
        <div className="flex flex-col gap-6 pr-2">
          {[...PROJECTS, ...PROJECTS].map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              onClick={() => onSelect(project)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] 
            bg-[var(--color-card)] text-[var(--color-text)] 
            hover:scale-[1.02] transition-transform duration-300 ease-in-out 
            origin-left hover:shadow-md cursor-pointer"

            >
              <h3 className="text-sm font-semibold text-blue-400 truncate">
                {project.name}
              </h3>
              <p className="text-xs mt-1 leading-snug opacity-80">
                {project.shortDescription}
              </p>
              <span className="text-blue-500 text-xs mt-2 block">
                Click to expand →
              </span>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
