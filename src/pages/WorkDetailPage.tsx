import { useParams, Link } from "react-router-dom"
import { IconArrowLeft, IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react"
import { projects } from "@/data/projects"

export default function WorkDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="px-[8%] pb-24 pt-40">
        <h1 className="font-display text-5xl uppercase text-text-white">Not Found</h1>
        <Link to="/work" className="mt-6 inline-block font-mono text-sm text-neon-green">
          ← Back to work
        </Link>
      </div>
    )
  }

  return (
    <div className="px-[8%] pb-24 pt-32">
      <Link
        to="/work"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-neon-green"
      >
        <IconArrowLeft size={16} /> Back to work
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <span className="font-display text-5xl text-neon-green opacity-50">{project.number}</span>
        {project.badge && (
          <span className="bg-neon-yellow px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-black">
            {project.badge}
          </span>
        )}
      </div>

      <h1 className="mt-4 font-display text-6xl uppercase text-text-white md:text-8xl">
        {project.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-neon-green"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="my-10 h-px w-full bg-neon-green opacity-40" />

      <p className="max-w-3xl font-sans text-lg leading-relaxed text-text-off">{project.overview}</p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-neon-pink">
            Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-2 font-sans text-sm text-text-off">
                <span className="text-neon-pink">▪</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-neon-green">
            Solutions
          </h2>
          <ul className="space-y-3">
            {project.solutions.map((c) => (
              <li key={c} className="flex gap-2 font-sans text-sm text-text-off">
                <span className="text-neon-green">▪</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
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
            className="inline-flex items-center gap-2 bg-neon-green px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-black"
          >
            Live <IconArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  )
}
