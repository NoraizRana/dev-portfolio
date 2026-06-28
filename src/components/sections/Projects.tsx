import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeader from "@/components/ui/SectionHeader"
import ProjectRow from "@/components/ui/ProjectRow"
import ProjectModal from "@/components/ui/ProjectModal"
import { projects, filterTabs, type Project, type ProjectCategory } from "@/data/projects"

export default function Projects() {
  const [filter, setFilter] = useState<"ALL" | ProjectCategory>("ALL")
  const [active, setActive] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  const visible = filter === "ALL" ? projects : projects.filter((p) => p.category === filter)

  const openModal = (p: Project) => {
    setActive(p)
    setOpen(true)
  }

  return (
    <section id="work" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="03" title="Work" />

      <div className="mb-8 flex flex-wrap gap-6">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className="relative pb-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors"
            style={{ color: filter === tab ? "#39ff14" : "#666666" }}
          >
            {tab}
            {filter === tab && (
              <motion.span
                layoutId="project-filter-underline"
                className="absolute -bottom-px left-0 h-px w-full bg-neon-green"
              />
            )}
          </button>
        ))}
      </div>

      <div className="border-t border-line">
        {visible.map((p) => (
          <ProjectRow key={p.id} project={p} onClick={() => openModal(p)} />
        ))}
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </section>
  )
}
