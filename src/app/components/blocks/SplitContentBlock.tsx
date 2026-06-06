import { PortableText } from "../../../sanity/PortableText";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";
import { ArrowRight } from "lucide-react";

export function SplitContentBlock({ block }: { block: any }) {
  const cards: any[] = block?.cards || [];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.body && (
              <div className="mt-5 text-neutral-600 text-lg leading-relaxed">
                <PortableText value={block.body} />
              </div>
            )}

            {block?.badge && (
              <div className="mt-8 inline-flex items-center gap-3 p-4 rounded-lg border border-neutral-200 bg-neutral-50">
                <div className="w-12 h-12 rounded-full bg-[#AFDC1C] flex items-center justify-center shrink-0">
                  <Icon name={block.badge.icon} className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  {block.badge.title && <div className="text-neutral-900" style={{ fontWeight: 600 }}>{block.badge.title}</div>}
                  {block.badge.subtitle && <div className="text-sm text-neutral-500">{block.badge.subtitle}</div>}
                </div>
              </div>
            )}

            {block?.ctaLabel && block?.ctaUrl && (
              <SmartLink
                to={block.ctaUrl}
                className="mt-8 inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
                style={{ fontWeight: 600 }}
              >
                {block.ctaLabel} <ArrowRight className="w-4 h-4" />
              </SmartLink>
            )}
          </div>

          {cards.length > 0 && (
            <div className="grid gap-4">
              {cards.map((c, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#AFDC1C] hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#AFDC1C]/20 group-hover:bg-[#AFDC1C] flex items-center justify-center shrink-0 transition-colors">
                      <Icon name={c.icon} className="w-6 h-6 text-[#6b8a0a] group-hover:text-neutral-900" />
                    </div>
                    <div>
                      {c.title && <h3 className="text-neutral-900" style={{ fontWeight: 700, fontSize: "1.25rem" }}>{c.title}</h3>}
                      {c.body && <p className="text-neutral-600 mt-1">{c.body}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
