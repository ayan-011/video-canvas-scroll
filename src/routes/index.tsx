import { createFileRoute } from "@tanstack/react-router";
import ScrollVideo from "@/components/ScrollVideo";
import Nav from "@/components/Nav";
import HorizontalFeatures from "@/components/HorizontalFeatures";
import Marquee from "@/components/Marquee";
import GameLibrary from "@/components/GameLibrary";

import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CONSOLE — The next generation of play" },
      {
        name: "description",
        content:
          "CONSOLE is the next-generation gaming machine. 8K @ 120fps, zero-latency haptics, and a 200+ title launch library. Pre-order now.",
      },
      { property: "og:title", content: "CONSOLE — The next generation of play" },
      {
        property: "og:description",
        content: "8K @ 120fps. Zero-latency haptics. The most ambitious console launch in a decade.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {false && (
        /* Hero */
        <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--color-mint)_25%,transparent),transparent_60%)]" />
          <p className="relative text-xs uppercase tracking-[0.35em] text-mint">/ Launching Q4 2026</p>
          <h1 className="relative mt-6 font-display text-[18vw] leading-[0.85] md:text-[12rem]">
            CONSOLE<span className="text-mint text-glow">.</span>
          </h1>
          <p className="relative mt-6 max-w-xl text-base text-foreground/70 md:text-lg">
            A machine that disappears into the game. Scroll to step inside.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="rounded-full bg-mint px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-mint-soft"
            >
              Pre-order
            </a>
            <a
              href="#features"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-mint hover:text-mint"
            >
              Explore specs
            </a>
          </div>
          <div className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-foreground/40">
            ▼ scroll
          </div>
        </section>
      )}

      {/* Scroll-driven product video */}
      <ScrollVideo
        overlayTitle="Meet the machine."
        overlaySubtitle="Every frame is controlled by your scroll."
      />

      {/* Marquee */}
      <Marquee items={["8K · 120FPS", "RAY-TRACED", "INSTANT RESUME", "SPATIAL AUDIO", "WHISPER-COOL", "ZERO LATENCY"]} />

      {/* Horizontal scroll features */}
      <HorizontalFeatures />

      {/* Reverse marquee */}
      <Marquee
        reverse
        items={["NOVA DRIFT", "IRON VOW", "HOLLOW ECHO", "VOLTCITY 2099", "ATLAS REBORN", "SKYFORGE TACTICS"]}
      />

      {/* Game library */}
      <GameLibrary />


      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
