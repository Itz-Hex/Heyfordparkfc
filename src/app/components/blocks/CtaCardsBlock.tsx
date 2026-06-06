import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

const styles: Record<string, string> = {
  accent: "bg-[#AFDC1C]/15 border-[#AFDC1C]/40 hover:bg-[#AFDC1C]/25",
  blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  amber: "bg-amber-50 border-amber-200 hover:bg-amber-100",
  neutral: "bg-white border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5",
};

export function CtaCardsBlock({ block }: { block: any }) {
  const cards: any[] = block?.cards || [];
  if (cards.length === 0) return null;
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title) && (
          <div className="max-w-2xl mb-8">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((c, i) => (
            <SmartLink
              key={i}
              to={c.url}
              className={`group p-5 rounded-2xl border ${styles[c.style] || styles.neutral} transition-colors flex items-start gap-3 text-left`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                <Icon name={c.icon} className="w-5 h-5 text-[#6b8a0a]" />
              </div>
              <div className="flex-1">
                {c.title && <div className="text-neutral-900" style={{ fontWeight: 700 }}>{c.title}</div>}
                {c.body && <div className="text-sm text-neutral-600 mt-0.5">{c.body}</div>}
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform mt-1" />
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
