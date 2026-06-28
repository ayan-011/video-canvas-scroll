import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "When does CONSOLE ship?",
    a: "Pre-orders ship on November 14, 2026. Collector editions ship one week earlier with priority logistics.",
  },
  {
    q: "Is it backward compatible?",
    a: "Yes. CONSOLE plays the full catalog from the previous generation, with automatic 4K/120fps upscaling where supported.",
  },
  {
    q: "What's in the box?",
    a: "Console, one wireless controller, USB-C braided cable, HDMI 2.1 cable, regional power brick, and a 3-month online membership voucher.",
  },
  {
    q: "Can I upgrade storage later?",
    a: "Absolutely — the M.2 expansion slot is user-accessible from the bottom plate. Any PCIe 4.0 NVMe drive is supported.",
  },
  {
    q: "What's the return policy?",
    a: "30-day no-questions-asked returns from the date of delivery. Collector editions are final sale once unboxed.",
  },
  {
    q: "Does it support VR?",
    a: "CONSOLE ships VR-ready. Our headset, NOVA VISOR, launches Q2 2027 as a plug-and-play companion.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative px-5 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mint">/ FAQ</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            You ask. <br />We answer.
          </h2>
          <p className="mt-6 max-w-sm text-sm text-foreground/60">
            Still curious? Our team replies in under 4 hours, every day of the week.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-6 text-left font-display text-2xl uppercase tracking-wide hover:no-underline md:text-3xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-foreground/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
