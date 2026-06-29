import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#games", label: "Games" },
    { href: "#pricing", label: "Editions" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-widest">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-mint" />
          CONSOLE
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-[0.18em] text-foreground/70 transition hover:text-mint"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#pricing"
            className="rounded-full bg-mint px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-mint-soft"
          >
            Pre-order
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-full bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-0.5 w-full bg-foreground transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl tracking-wider"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-mint px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Pre-order
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
