export function FeesBlock({ block }: { block: any }) {
  const tiers: any[] = block?.tiers || [];
  if (tiers.length === 0) return null;
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
            {block?.body && <p className="mt-3 text-neutral-600">{block.body}</p>}
          </div>
        )}
        <div className="grid sm:grid-cols-3 gap-3">
          {tiers.map((f, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40">
              {f.label && <div className="text-xs text-neutral-600 uppercase tracking-wide">{f.label}</div>}
              {f.value && <div className="mt-1 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 800 }}>{f.value}</div>}
              {f.note && <div className="text-sm text-neutral-600 mt-1">{f.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
