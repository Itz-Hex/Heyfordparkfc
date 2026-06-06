import { Quote } from "lucide-react";
import { resolveImage } from "../../../sanity/client";

export function TestimonialsBlock({ block }: { block: any }) {
  const items: any[] = block?.testimonials || [];
  if (items.length === 0) return null;
  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
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
        <div className="grid lg:grid-cols-3 gap-4">
          {items.map((q, i) => {
            const photo = resolveImage(q.photo, 120);
            return (
              <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200">
                <Quote className="w-7 h-7 text-[#AFDC1C]" />
                {q.quote && <p className="mt-4 text-neutral-700 leading-relaxed">"{q.quote}"</p>}
                <div className="mt-5 flex items-center gap-3">
                  {photo && <img src={photo} alt="" className="w-10 h-10 rounded-full object-cover" />}
                  <div className="text-sm text-neutral-500">
                    {q.author && <div className="text-neutral-900" style={{ fontWeight: 600 }}>{q.author}</div>}
                    {q.role && <div>{q.role}</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
