import * as Dialog from "@radix-ui/react-dialog"
import { IconX, IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm data-[state=open]:animate-[fadeIn_0.2s_ease]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[210] max-h-[88vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-line-accent bg-surface-1 p-6 md:p-10">
          {project && (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.badge && (
                    <span className="mb-3 inline-block bg-neon-yellow px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-black">
                      {project.badge}
                    </span>
                  )}
                  <Dialog.Title className="font-display text-3xl uppercase text-text-white md:text-5xl">
                    {project.title}
                  </Dialog.Title>
                </div>
                <Dialog.Close
                  className="shrink-0 border border-line p-2 text-text-off transition-colors hover:border-neon-green hover:text-neon-green"
                  aria-label="Close"
                >
                  <IconX size={20} />
                </Dialog.Close>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-neon-green"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Dialog.Description className="mt-6 font-sans text-base leading-relaxed text-text-off">
                {project.overview}
              </Dialog.Description>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-neon-pink">
                    Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2 font-sans text-sm text-text-off">
                        <span className="text-neon-pink">▪</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-neon-green">
                    Solutions
                  </h4>
                  <ul className="space-y-2">
                    {project.solutions.map((c) => (
                      <li key={c} className="flex gap-2 font-sans text-sm text-text-off">
                        <span className="text-neon-green">▪</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-neon-green px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-neon-green transition-colors hover:bg-neon-green hover:text-black"
                  >
                    <IconBrandGithub size={16} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-neon-green px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-black transition-colors hover:bg-transparent hover:text-neon-green hover:outline hover:outline-1 hover:outline-neon-green"
                  >
                    Live <IconArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
