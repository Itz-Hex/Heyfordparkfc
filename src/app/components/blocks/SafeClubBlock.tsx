import { Icon } from "./Icon";

export function SafeClubBlock({ block }: { block: any }) {
  const cards: any[] = block?.cards || [];
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          {block?.eyebrow && (
            <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>
          )}
          {block?.title && (
            <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {block.title}
            </h2>
          )}
          {block?.intro && <p className="mt-3 text-neutral-600 text-lg">{block.intro}</p>}
        </div>
        {cards.length > 0 && (
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-[#AFDC1C]/20 text-[#6b8a0a] flex items-center justify-center">
                  <Icon name={c.icon} className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-neutral-900" style={{ fontSize: "1.25rem", fontWeight: 700 }}>{c.title}</h3>
                {c.body && <p className="mt-2 text-neutral-600 text-sm">{c.body}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
