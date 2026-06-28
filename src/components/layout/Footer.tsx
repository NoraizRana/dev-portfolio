export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-[6%] py-10">
      <div className="mb-6 h-px w-full bg-neon-green opacity-40" />
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-text-white">NORAIZ RANA</span>
          <span className="font-mono text-xs text-text-muted">2025</span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Designed &amp; built by Noraiz Rana
        </p>
      </div>
    </footer>
  )
}
