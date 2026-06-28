export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background px-5 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-6xl leading-none md:text-9xl">
              CONSOLE<span className="text-mint">.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-foreground/60">
              The next generation of play. Engineered in Stockholm, built for everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            {[
              { h: "Shop", l: ["Standard", "Pro", "Collector", "Accessories"] },
              { h: "Support", l: ["Help center", "Warranty", "Returns", "Contact"] },
              { h: "Company", l: ["About", "Press", "Careers", "Investors"] },
            ].map((col) => (
              <div key={col.h}>
                <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-mint">{col.h}</p>
                <ul className="space-y-2">
                  {col.l.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-foreground/70 transition hover:text-foreground">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CONSOLE Industries</p>
          <p>Designed with intent — built for the long run.</p>
        </div>
      </div>
    </footer>
  );
}
