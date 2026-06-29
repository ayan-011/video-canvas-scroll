import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoAsset from "@/assets/scroll-video.mp4.asset.json";

gsap.registerPlugin(ScrollTrigger);

interface ScrollVideoProps {
  src?: string;
  /** Section height as a multiple of viewport height. Higher = slower scrub. */
  scrollLength?: number;
  overlayTitle?: string;
  overlaySubtitle?: string;
}

export function ScrollVideo({
  src = videoAsset.url,
  scrollLength = 3,
  overlayTitle = "Scroll to explore",
  overlaySubtitle = "Every frame, in your hands.",
}: ScrollVideoProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayInRef = useRef<HTMLDivElement | null>(null);
  const overlayOutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // iOS/Safari needs these to allow frame-accurate seeking.
    video.muted = true;
    video.pause();

    const triggers: ScrollTrigger[] = [];
    let rafId = 0;
    let targetTime = 0;
    let currentTime = 0;
    let seeking = false;

    // rAF loop: lerp currentTime toward targetTime; only seek when prior seek finished.
    const tick = () => {
      // Smoothing factor — lower = smoother but laggier. 0.18 feels cinematic.
      currentTime += (targetTime - currentTime) * 0.18;
      if (
        !seeking &&
        video.readyState >= 2 &&
        Math.abs(currentTime - video.currentTime) > 1 / 120
      ) {
        seeking = true;
        try {
          video.currentTime = currentTime;
        } catch {
          /* noop */
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const onSeeked = () => {
      seeking = false;
    };
    video.addEventListener("seeked", onSeeked);

    const setup = () => {
      const duration = video.duration;
      if (!duration || !isFinite(duration)) return;

      // Kill any previous triggers for this section before re-creating.
      triggers.forEach((t) => t.kill());
      triggers.length = 0;

      const main = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * scrollLength}`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          targetTime = self.progress * duration;
        },
      });
      triggers.push(main);

      if (overlayInRef.current) {
        const t = gsap.fromTo(
          overlayInRef.current,
          { autoAlpha: 1, y: 0 },
          {
            autoAlpha: 0,
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * scrollLength * 0.3}`,
              scrub: true,
            },
          },
        );
        const st = (t.scrollTrigger as ScrollTrigger) || null;
        if (st) triggers.push(st);
      }
      if (overlayOutRef.current) {
        const t = gsap.fromTo(
          overlayOutRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => `top+=${window.innerHeight * scrollLength * 0.7} top`,
              end: () => `+=${window.innerHeight * scrollLength * 0.3}`,
              scrub: true,
            },
          },
        );
        const st = (t.scrollTrigger as ScrollTrigger) || null;
        if (st) triggers.push(st);
      }

      // Kick off rAF after we have a duration.
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
      ScrollTrigger.refresh();
    };

    const onMeta = () => setup();

    if (video.readyState >= 1 && video.duration) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", onMeta, { once: true });
    }
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("seeked", onSeeked);
      cancelAnimationFrame(rafId);
      triggers.forEach((t) => t.kill());
    };
  }, [scrollLength]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

      <div
        ref={overlayInRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-foreground"
      >
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          {overlayTitle}
        </h2>
        <p className="mt-4 text-base text-foreground/70 md:text-lg">
          {overlaySubtitle}
        </p>
      </div>

      <div
        ref={overlayOutRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center text-foreground opacity-0"
      >
        <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Cinematic, frame by frame.
        </h3>
      </div>
    </section>
  );
}

export default ScrollVideo;
