import { useScrollProgress } from "@/hooks/useScrollProgress"

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-neon-green transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
