export function StatsBlock({ block }: { block: any }) {
  const stats: any[] = block?.stats || [];
  if (stats.length === 0) return null;
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
        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              {s.value && <div className="text-neutral-900" style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1 }}>{s.value}</div>}
              {s.label && <div className="mt-1 text-neutral-600">{s.label}</div>}
              {s.note && <div className="text-xs text-neutral-500 mt-1">{s.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
