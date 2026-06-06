export function FindUsBlock({ block }: { block: any }) {
  const schedule: any[] = block?.schedule || [];
  return (
    <section className="py-20 lg:py-28 bg-white">
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
          {block?.body && <p className="mt-3 text-neutral-600 text-lg">{block.body}</p>}
        </div>
        {schedule.length > 0 && (
          <div className="mt-8 max-w-3xl rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden">
            {schedule.map((r, i) => (
              <div key={i} className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-5 py-4 ${i > 0 ? "border-t border-neutral-200" : ""}`}>
                <div className="text-neutral-900" style={{ fontWeight: 600 }}>{r.day}</div>
                <div className="text-neutral-700">{r.hours}</div>
                <div className="text-sm text-neutral-500">{r.note}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
