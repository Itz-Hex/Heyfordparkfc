export function StepsBlock({ block }: { block: any }) {
  const steps: any[] = block?.steps || [];
  if (steps.length === 0) return null;
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
            {block?.body && <p className="mt-3 text-neutral-600">{block.body}</p>}
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <div key={i} className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-[#AFDC1C] flex items-center justify-center" style={{ fontWeight: 700 }}>
                {i + 1}
              </div>
              {s.title && <div className="mt-3 text-neutral-900" style={{ fontWeight: 700 }}>{s.title}</div>}
              {s.body && <div className="text-sm text-neutral-600 mt-1">{s.body}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
