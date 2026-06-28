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

    // Proxy object so GSAP can tween currentTime smoothly.
    const state = { time: 0 };
    let trigger: ScrollTrigger | null = null;

    const setup = () => {
      const duration = video.duration;
      if (!duration || !isFinite(duration)) return;

      trigger?.kill();

      const tween = gsap.to(state, {
        time: duration,
        ease: "none",
        onUpdate: () => {
          // Only assign when ready to avoid stalls.
          if (video.readyState >= 2) {
            video.currentTime = state.time;
          }
        },
      });

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * scrollLength}`,
        pin: true,
        scrub: 0.6, // smooth cinematic easing
        anticipatePin: 1,
        animation: tween,
        invalidateOnRefresh: true,
      });

      // Overlay fades driven by scroll progress
      if (overlayInRef.current) {
        gsap.fromTo(
          overlayInRef.current,
          { autoAlpha: 1, y: 0 },
          {
            autoAlpha: 0,
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${window.innerHeight * scrollLength * 0.3}`,
              scrub: true,
            },
          },
        );
      }
      if (overlayOutRef.current) {
        gsap.fromTo(
          overlayOutRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: `+=${window.innerHeight * scrollLength * 0.7}`,
              end: `+=${window.innerHeight * scrollLength * 0.3}`,
              scrub: true,
            },
          },
        );
      }
    };

    const onReady = () => setup();

    if (video.readyState >= 1 && video.duration) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", onReady, { once: true });
    }

    // Try to force preload of frames
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      trigger?.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
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
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div
        ref={overlayInRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
      >
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          {overlayTitle}
        </h2>
        <p className="mt-4 text-base text-white/80 md:text-lg">
          {overlaySubtitle}
        </p>
      </div>

      <div
        ref={overlayOutRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center text-white opacity-0"
      >
        <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Cinematic, frame by frame.
        </h3>
      </div>
    </section>
  );
}

export default ScrollVideo;
