export default function StatsRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-4">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
        {label}
      </span>
      <span className="font-condensed text-2xl font-bold text-text-white">{value}</span>
    </div>
  )
}
