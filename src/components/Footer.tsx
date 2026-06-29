export default function Footer() {
  const primary = ["Workflows", "Showcase", "Use cases", "About", "Blog", "Manifesto", "Brand"];
  const secondary = ["Help Center", "Contact us", "Privacy Policy", "Terms of Use"];

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="px-5 pt-16 md:px-12 md:pt-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex items-end gap-[3px]">
            <span className="block h-3 w-[3px] bg-white" />
            <span className="block h-5 w-[3px] bg-white" />
            <span className="block h-4 w-[3px] bg-white" />
          </span>
          <span className="text-2xl font-medium tracking-tight">Metamor</span>
        </div>

        {/* Nav pills */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-3">
            {primary.map((l) => (
              <a
                key={l}
                href="#"
                className="rounded-md bg-white/[0.04] px-6 py-2.5 text-sm text-white/70 ring-1 ring-white/5 transition hover:bg-white/[0.08] hover:text-white"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {secondary.map((l) => (
              <a
                key={l}
                href="#"
                className="min-w-[160px] rounded-md bg-white/[0.04] px-6 py-2.5 text-center text-sm text-white/70 ring-1 ring-white/5 transition hover:bg-white/[0.08] hover:text-white"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant outlined wordmark */}
      <div
        aria-hidden
        className="pointer-events-none mt-10 select-none overflow-hidden px-5 md:px-12"
      >
        <div
          className="font-display whitespace-nowrap text-center leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(5rem, 22vw, 22rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            color: "transparent",
          }}
        >
          Metamor
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-white/5 px-5 py-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 md:flex-row">
          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 Metamor. All rights reserved</span>
            <span className="flex items-center gap-2">
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full ring-1 ring-white/30">
                <span className="block h-1 w-1 rounded-full bg-white/70" />
              </span>
              AICPA SOC 2 Type 1 certified
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 text-white/60 hover:text-white">
              EN <span className="text-[10px]">▾</span>
            </button>
            <span className="text-white/20">|</span>
            <a href="#" aria-label="X" className="text-white/60 hover:text-white">𝕏</a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white">◎</a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
