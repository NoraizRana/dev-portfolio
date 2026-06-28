import { cn } from "@/lib/utils"

export default function TerminalLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.15em] text-neon-green",
        className,
      )}
    >
      {children}
    </span>
  )
}
