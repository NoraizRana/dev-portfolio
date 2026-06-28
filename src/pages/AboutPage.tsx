import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Education from "@/components/sections/Education"

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="px-[8%] pt-12">
        <span className="font-mono text-sm text-neon-green">// WHO I AM</span>
        <h1 className="mt-4 font-display text-6xl uppercase text-text-white md:text-8xl">
          About
        </h1>
      </div>
      <About />
      <Experience />
      <Education />
    </div>
  )
}
