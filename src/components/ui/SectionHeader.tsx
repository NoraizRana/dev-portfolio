import { motion } from "framer-motion"

interface SectionHeaderProps {
  number: string
  title: string
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="relative mb-12 md:mb-16">
      <span className="ghost-number absolute -left-2 -top-24 text-[120px] md:-top-40 md:text-[200px]">
        {number}
      </span>
      <div className="relative z-10 flex items-baseline gap-4">
        <span className="font-mono text-sm text-neon-green">{number}</span>
        <motion.h2
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="font-condensed text-4xl font-bold uppercase leading-none text-text-white md:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-6 h-px bg-neon-green"
      />
    </div>
  )
}
