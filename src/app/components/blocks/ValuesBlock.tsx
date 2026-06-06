import { Icon } from "./Icon";

export function ValuesBlock({ block }: { block: any }) {
  const cards: any[] = block?.cards || [];
  if (cards.length === 0) return null;
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title || block?.intro) && (
          <div className="max-w-2xl mb-10">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.intro && <p className="mt-3 text-neutral-600">{block.intro}</p>}
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200">
              <div className="w-12 h-12 rounded-xl bg-[#AFDC1C]/20 flex items-center justify-center">
                <Icon name={c.icon} className="w-6 h-6 text-[#6b8a0a]" />
              </div>
              {c.title && <div className="mt-4 text-neutral-900" style={{ fontWeight: 700, fontSize: "1.125rem" }}>{c.title}</div>}
              {c.body && <div className="mt-2 text-neutral-600">{c.body}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
