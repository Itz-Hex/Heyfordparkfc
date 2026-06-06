import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PortableText } from "../../../sanity/PortableText";

export function FaqBlock({ block }: { block: any }) {
  const items: any[] = block?.items || [];
  const [open, setOpen] = useState<number | null>(0);
  if (items.length === 0) return null;
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title) && (
          <div className="max-w-2xl mb-10">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
          </div>
        )}
        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all ${isOpen ? "border-[#AFDC1C] bg-[#AFDC1C]/5" : "border-neutral-200 hover:border-neutral-400"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-neutral-900" style={{ fontWeight: 600 }}>{f.question}</div>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
                {isOpen && f.answer && <div className="mt-3 text-neutral-700"><PortableText value={f.answer} /></div>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
