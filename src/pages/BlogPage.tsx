const posts = [
  {
    id: "1",
    date: "2026.01.12",
    title: "Building a TF-IDF NLP Engine Without an LLM",
    excerpt:
      "How I shipped a 228-entry algorithm Q&A assistant using classic information retrieval — and why it still holds up.",
    tag: "NLP",
  },
  {
    id: "2",
    date: "2025.11.03",
    title: "Real-Time Collaboration with Socket.io and RBAC",
    excerpt:
      "Lessons from CollaborInk: keeping concurrent edits in sync while enforcing RBAC at the socket layer.",
    tag: "MERN",
  },
]

export default function BlogPage() {
  return (
    <div className="px-[8%] pb-24 pt-32">
      <span className="font-mono text-sm text-neon-green">// NOTES</span>
      <h1 className="mt-4 font-display text-6xl uppercase text-text-white md:text-8xl">Blog</h1>

      <div className="mt-12 border-t border-line">
        {posts.map((post) => (
          <article
            key={post.id}
            className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-[160px_1fr] md:gap-8"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                {post.date}
              </span>
              <span className="w-fit bg-neon-yellow px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-black">
                {post.tag}
              </span>
            </div>
            <div>
              <h2 className="font-condensed text-3xl font-bold uppercase text-text-white">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-text-off">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
