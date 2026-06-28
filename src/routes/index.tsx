import { createFileRoute } from "@tanstack/react-router";
import ScrollVideo from "@/components/ScrollVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scroll Video — Cinematic Scroll Animation" },
      {
        name: "description",
        content:
          "A scroll-driven video animation built with React, GSAP and ScrollTrigger — scrub the video frame by frame as you scroll.",
      },
      { property: "og:title", content: "Scroll Video — Cinematic Scroll Animation" },
      {
        property: "og:description",
        content:
          "A scroll-driven video animation built with React, GSAP and ScrollTrigger.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Scroll Video Demo
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Keep scrolling — the video below is scrubbed directly by your scroll
          position, forward and backward.
        </p>
        <div className="mt-10 text-sm text-muted-foreground">▼ scroll</div>
      </section>

      <ScrollVideo />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          That's it.
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Drop the <code className="rounded bg-muted px-2 py-1">ScrollVideo</code>{" "}
          component anywhere in your app.
        </p>
      </section>
    </main>
  );
}
