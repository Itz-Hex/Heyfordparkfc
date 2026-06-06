import { ArrowRight } from "lucide-react";
import { SmartLink } from "./SmartLink";

export function CtaBlock({ block }: { block: any }) {
  const style = block?.style || "accent";

  if (style === "accent") {
    return (
      <section className="py-16 bg-[#AFDC1C]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
          <div>
            {block?.eyebrow && <div className="text-sm text-neutral-900/70" style={{ fontWeight: 700 }}>{block.eyebrow}</div>}
            {block?.title && <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }}>{block.title}</h2>}
            {block?.body && <p className="mt-2 text-neutral-900/80 max-w-2xl">{block.body}</p>}
          </div>
          {block?.ctaLabel && block?.ctaUrl && (
            <SmartLink to={block.ctaUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
              {block.ctaLabel} <ArrowRight className="w-4 h-4" />
            </SmartLink>
          )}
        </div>
      </section>
    );
  }

  if (style === "dark") {
    return (
      <section className="py-16 lg:py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            {block?.eyebrow && <div className="text-sm text-[#AFDC1C]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-2 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.body && <p className="mt-3 text-neutral-300 text-lg max-w-md">{block.body}</p>}
          </div>
          {block?.ctaLabel && block?.ctaUrl && (
            <div className="flex lg:justify-end">
              <SmartLink to={block.ctaUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors" style={{ fontWeight: 700 }}>
                {block.ctaLabel} <ArrowRight className="w-4 h-4" />
              </SmartLink>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
        <div>
          {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
          {block?.title && <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>{block.title}</h2>}
          {block?.body && <p className="text-neutral-600 mt-2 max-w-xl">{block.body}</p>}
        </div>
        {block?.ctaLabel && block?.ctaUrl && (
          <SmartLink to={block.ctaUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
            {block.ctaLabel} <ArrowRight className="w-4 h-4" />
          </SmartLink>
        )}
      </div>
    </section>
  );
}
