const quotes = [
  {
    q: "The most ambitious console launch since the medium grew up. CONSOLE feels inevitable.",
    a: "EDGE Magazine",
  },
  {
    q: "Haptics so precise I forgot the controller existed. This is what next-gen actually means.",
    a: "Polygon",
  },
  {
    q: "Silent, cold, and absurdly fast. I've never seen hardware disappear into a game like this.",
    a: "Digital Foundry",
  },
  {
    q: "If you only buy one console this decade — this is it.",
    a: "IGN",
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-5 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-mint">/ Press</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">Critics agree.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {quotes.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              <span className="absolute -top-6 left-8 font-display text-7xl text-mint/40">"</span>
              <blockquote className="font-display text-2xl leading-tight md:text-3xl">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-foreground/60">
                — {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
