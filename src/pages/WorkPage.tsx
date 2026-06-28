import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { IconArrowUpRight } from "@tabler/icons-react"
import { projects, filterTabs, type ProjectCategory } from "@/data/projects"

export default function WorkPage() {
  const [filter, setFilter] = useState<"ALL" | ProjectCategory>("ALL")
  const visible = filter === "ALL" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="px-[8%] pb-24 pt-32">
      <span className="font-mono text-sm text-neon-green">// ALL WORK</span>
      <h1 className="mt-4 font-display text-6xl uppercase text-text-white md:text-8xl">
        Selected Work
      </h1>

      <div className="mb-8 mt-10 flex flex-wrap gap-6">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className="relative pb-2 font-mono text-xs uppercase tracking-[0.15em]"
            style={{ color: filter === tab ? "#39ff14" : "#666666" }}
          >
            {tab}
            {filter === tab && (
              <motion.span
                layoutId="work-page-underline"
                className="absolute -bottom-px left-0 h-px w-full bg-neon-green"
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <Link
            key={p.id}
            to={`/work/${p.slug}`}
            data-cursor="OPEN"
            className="group border border-line bg-surface-1 p-8 transition-colors hover:border-neon-green hover:bg-surface-2"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-4xl text-neon-green opacity-50">{p.number}</span>
              <IconArrowUpRight
                size={28}
                className="text-text-off transition-transform group-hover:rotate-45 group-hover:text-neon-green"
              />
            </div>
            <h3 className="mt-4 font-display text-3xl uppercase text-text-white group-hover:text-neon-green">
              {p.title}
            </h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-muted">
              {p.stack.join(" · ")}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-text-off">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
