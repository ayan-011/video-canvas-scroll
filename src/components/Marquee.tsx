interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export default function Marquee({ items, reverse = false }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background/40 py-6">
      <div className={`flex w-max gap-12 whitespace-nowrap ${reverse ? "marquee-track-rev" : "marquee-track"}`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-4xl uppercase tracking-wider text-foreground/80 md:text-6xl"
          >
            {item}
            <span className="inline-block h-2 w-2 rounded-full bg-mint shadow-[0_0_14px_var(--color-mint)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
