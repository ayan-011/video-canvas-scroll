const editions = [
  {
    name: "Standard",
    price: "$499",
    blurb: "Everything you need to enter the new generation.",
    features: ["1TB SSD storage", "1 wireless controller", "3-month online membership", "10 launch titles"],
    cta: "Pre-order",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$699",
    blurb: "Built for creators, streamers, and competitive play.",
    features: ["2TB SSD storage", "2 Pro controllers", "12-month online membership", "30 launch titles", "Capture card built-in"],
    cta: "Pre-order Pro",
    highlight: true,
  },
  {
    name: "Collector",
    price: "$1,199",
    blurb: "Limited edition of 1,000 — numbered chassis, signed.",
    features: ["4TB SSD storage", "2 Collector controllers", "Lifetime online membership", "Full launch library", "Numbered display stand"],
    cta: "Reserve",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden px-5 py-28 md:px-12 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklab,var(--color-mint)_25%,transparent),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-mint">/ Pick your edition</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">Three ways in.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {editions.map((e) => (
            <article
              key={e.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
                e.highlight
                  ? "border-mint bg-mint/5 shadow-[0_0_60px_-15px_var(--color-mint)]"
                  : "border-border bg-card hover:border-mint/40"
              }`}
            >
              {e.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-mint px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                  Most popular
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-4xl tracking-wide">{e.name}</h3>
                <span className="font-display text-3xl text-mint">{e.price}</span>
              </div>
              <p className="mt-3 text-sm text-foreground/70">{e.blurb}</p>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {e.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  e.highlight
                    ? "bg-mint text-primary-foreground hover:bg-mint-soft"
                    : "border border-border text-foreground hover:border-mint hover:text-mint"
                }`}
              >
                {e.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
