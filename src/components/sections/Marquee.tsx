const WORDS = [
  "MERN STACK",
  "JAVASCRIPT",
  "AI INTEGRATION",
  "SOCKET.IO",
  "NODE.JS",
  "MONGODB",
  "REACT",
  "REST API",
  "TF-IDF NLP",
  "JWT AUTH",
  "EXPRESS.JS",
]

function Row({ reverse }: { reverse?: boolean }) {
  const items = [...WORDS, ...WORDS]
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationPlayState: "running" }}
      >
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-6 font-display text-lg uppercase md:text-xl ${
                i % 2 === 0 ? "text-text-white" : "text-neon-green"
              }`}
            >
              {word}
            </span>
            <span className="text-neon-green">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="border-y border-line bg-bg py-4">
      <Row />
      <div className="mt-2">
        <Row reverse />
      </div>
    </div>
  )
}
