const games = [
  { title: "Nebula Drift", genre: "Racing", year: "2026", color: "from-emerald-500/30 to-cyan-500/10" },
  { title: "Iron Vow", genre: "Action RPG", year: "2026", color: "from-amber-500/30 to-rose-500/10" },
  { title: "Hollow Echo", genre: "Horror", year: "2026", color: "from-violet-500/30 to-indigo-500/10" },
  { title: "Skyforge Tactics", genre: "Strategy", year: "2025", color: "from-teal-500/30 to-blue-500/10" },
  { title: "Voltcity 2099", genre: "Open World", year: "2026", color: "from-fuchsia-500/30 to-purple-500/10" },
  { title: "Atlas Reborn", genre: "Adventure", year: "2025", color: "from-lime-500/30 to-emerald-500/10" },
];

export default function GameLibrary() {
  return (
    <section id="games" className="relative px-5 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-mint">/ Day-one library</p>
            <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
              200+ titles. <br />Launch night.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm uppercase tracking-[0.2em] text-foreground/60 transition hover:text-mint"
          >
            Browse full catalog →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <article
              key={g.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.color} transition-transform duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                #{String(i + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                  <span>{g.genre}</span>
                  <span>{g.year}</span>
                </div>
                <h3 className="mt-2 font-display text-4xl leading-none md:text-5xl">{g.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
