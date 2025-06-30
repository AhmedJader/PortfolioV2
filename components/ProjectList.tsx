'use client';

import { PROJECTS, Project } from '@/lib/constants';
import { useTheme } from './ThemeProvider';

type Props = {
  onHover: (project: Project | null) => void;
};

export default function ProjectList({ onHover }: Props) {
  const { darkMode } = useTheme();

  return (
    <div className="relative w-full h-[600px] overflow-hidden group">
      <div className="absolute top-0 left-0 w-full animate-vertical-scroll">
        <div className="flex flex-col gap-4 pr-2">
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              onMouseEnter={() => onHover(project)}
              onMouseLeave={() => onHover(null)}
              className={`p-4 rounded-lg border transition-transform transform hover:scale-[1.02] cursor-pointer ${
                darkMode
                  ? 'border-white/10 bg-[#1a1a2e] text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            >
              <h3 className="text-base font-semibold">{project.name}</h3>
              <p className="text-sm opacity-80">{project.shortDescription}</p>
              <span className="text-blue-400 text-sm mt-2 inline-block">Hover to expand →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
