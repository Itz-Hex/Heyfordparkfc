export function TimelineBlock({ block }: { block: any }) {
  const items: any[] = block?.items || [];
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
        <div className="relative grid gap-3">
          {items.map((t, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#AFDC1C] text-neutral-900 flex items-center justify-center text-center px-1" style={{ fontWeight: 800, fontSize: "0.7rem", lineHeight: 1.1 }}>
                  {t.date}
                </div>
                {i < items.length - 1 && <div className="w-px flex-1 bg-neutral-300 my-2" />}
              </div>
              <div className="pb-6 flex-1">
                {t.date && <div className="text-xs text-neutral-500">{t.date}</div>}
                {t.title && <div className="text-neutral-900" style={{ fontWeight: 700, fontSize: "1.125rem" }}>{t.title}</div>}
                {t.body && <div className="text-neutral-600 mt-1">{t.body}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
