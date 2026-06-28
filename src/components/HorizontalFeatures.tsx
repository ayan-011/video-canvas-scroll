import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    no: "01",
    title: "8K @ 120fps",
    body: "A custom GPU pushes uncompromising frame rates with adaptive ray-tracing on every pixel.",
    tag: "Graphics",
  },
  {
    no: "02",
    title: "Zero-latency Haptics",
    body: "Adaptive triggers and tactile feedback that you feel before you see — sub-3ms response.",
    tag: "Controller",
  },
  {
    no: "03",
    title: "Whisper-cool",
    body: "Liquid-vapor chamber engineered to stay silent under marathon sessions.",
    tag: "Thermals",
  },
  {
    no: "04",
    title: "Instant Resume",
    body: "Jump between up to twelve titles. Pick up exactly where you left off.",
    tag: "OS",
  },
  {
    no: "05",
    title: "Spatial Audio",
    body: "Object-based 3D audio mapped to your room. Hear footsteps in three dimensions.",
    tag: "Sound",
  },
];

export default function HorizontalFeatures() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => tween.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,color-mix(in_oklab,var(--color-mint)_20%,transparent),transparent_60%)]" />

      <div className="absolute left-0 right-0 top-0 z-10 flex items-end justify-between px-5 pt-28 md:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mint">/ Inside the machine</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">Built for the next decade.</h2>
        </div>
        <p className="hidden max-w-xs text-sm text-foreground/60 md:block">
          Scroll horizontally — every panel is a milestone in the spec sheet.
        </p>
      </div>

      <div ref={trackRef} className="absolute left-0 top-0 flex h-full items-center gap-6 pl-5 pr-[20vw] pt-40 md:gap-10 md:pl-12">
        {panels.map((p) => (
          <article
            key={p.no}
            className="relative flex h-[62vh] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 md:h-[64vh] md:w-[42vw] md:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-6xl text-mint/80 md:text-7xl">{p.no}</span>
              <span className="rounded-full border border-mint/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-mint">
                {p.tag}
              </span>
            </div>

            <div className="absolute inset-x-10 bottom-32 hidden h-px bg-gradient-to-r from-mint/60 to-transparent md:block" />

            <div>
              <h3 className="font-display text-4xl leading-none md:text-6xl">{p.title}</h3>
              <p className="mt-4 max-w-md text-sm text-foreground/70 md:text-base">{p.body}</p>
            </div>
          </article>
        ))}

        <div className="flex h-[60vh] w-[60vw] shrink-0 items-center justify-center rounded-3xl border border-dashed border-mint/40 text-center md:w-[30vw]">
          <div>
            <p className="font-display text-3xl md:text-5xl">Ready?</p>
            <a href="#pricing" className="mt-4 inline-block rounded-full bg-mint px-6 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Pre-order CONSOLE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
