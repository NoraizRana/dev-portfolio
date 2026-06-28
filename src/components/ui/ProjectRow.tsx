import { IconArrowUpRight } from "@tabler/icons-react"
import type { Project } from "@/data/projects"

interface ProjectRowProps {
  project: Project
  onClick: () => void
}

export default function ProjectRow({ project, onClick }: ProjectRowProps) {
  return (
    <button
      onClick={onClick}
      data-cursor="CASE STUDY →"
      className="group relative grid w-full grid-cols-1 items-center gap-4 border-b border-line px-4 py-8 text-left transition-colors duration-150 hover:bg-surface-1 md:grid-cols-[auto_1fr_auto_auto] md:gap-8 md:py-10"
    >
      <span className="font-display text-5xl text-neon-green opacity-50 md:text-7xl">
        {project.number}
      </span>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-3xl uppercase text-text-white transition-colors group-hover:text-neon-green md:text-5xl">
            {project.title}
          </h3>
          {project.badge && (
            <span className="bg-neon-yellow px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-black">
              {project.badge}
            </span>
          )}
        </div>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-muted">
          {project.stack.join(" · ")}
        </p>
        <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-text-off">
          {project.description}
        </p>
      </div>

      <div className="hidden h-28 w-48 items-end justify-start border border-line bg-gradient-to-br from-surface-2 to-bg p-3 lg:flex">
        <span className="font-condensed text-sm uppercase tracking-wide text-text-muted">
          {project.title}
        </span>
      </div>

      <IconArrowUpRight
        size={32}
        className="text-text-off transition-transform duration-200 group-hover:rotate-45 group-hover:text-neon-green"
      />
    </button>
  )
}
