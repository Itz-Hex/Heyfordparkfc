import { PortableText } from "../../../sanity/PortableText";
import { SmartLink } from "./SmartLink";

export function JoinProcessBlock({ block }: { block: any }) {
  const ages: string[] = block?.placesAgeGroups || [];
  const table: any[] = block?.trainingTable || [];
  const tiers: any[] = block?.costTiers || [];
  const steps: any[] = block?.registerSteps || [];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* 01 — Places */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block?.placesNumber || "01"}</div>
            <h3 className="mt-1 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{block?.placesTitle}</h3>
          </div>
          <div className="lg:col-span-2 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            {block?.placesBody && (
              <div className="text-neutral-700">
                <PortableText value={block.placesBody} />
              </div>
            )}
            {ages.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {ages.map((a) => (
                  <span key={a} className="px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-sm">{a}</span>
                ))}
              </div>
            )}
            {(block?.placesWaitlistTitle || block?.placesWaitlistBody) && (
              <div className="mt-5 p-4 rounded-xl bg-white border border-neutral-200">
                {block?.placesWaitlistTitle && (
                  <div className="text-neutral-900" style={{ fontWeight: 700 }}>{block.placesWaitlistTitle}</div>
                )}
                {block?.placesWaitlistBody && (
                  <p className="text-sm text-neutral-600 mt-1">{block.placesWaitlistBody}</p>
                )}
              </div>
            )}
            {block?.placesLinkLabel && (
              <SmartLink to={block?.placesLinkUrl} className="mt-5 inline-flex items-center gap-2 text-[#6b8a0a]" style={{ fontWeight: 600 }}>
                {block.placesLinkLabel}
              </SmartLink>
            )}
          </div>
        </div>

        {/* 02 — Training */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block?.trainingNumber || "02"}</div>
            <h3 className="mt-1 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{block?.trainingTitle}</h3>
          </div>
          <div className="lg:col-span-2 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            {block?.trainingBody && <p className="text-neutral-700 mb-4">{block.trainingBody}</p>}
            {table.length > 0 && (
              <div className="rounded-xl bg-white border border-neutral-200 p-4 text-sm grid grid-cols-3 gap-2">
                <div className="text-neutral-500">Day</div>
                <div className="text-neutral-500">Venue</div>
                <div className="text-neutral-500">Teams</div>
                {table.map((r, i) => (
                  <div key={i} className="border-t pt-2 col-span-3 grid grid-cols-3 gap-2 text-neutral-800">
                    <div>{r.day}</div>
                    <div>{r.venue}</div>
                    <div>{r.teams}</div>
                  </div>
                ))}
              </div>
            )}
            {block?.trainingLinkLabel && (
              <SmartLink to={block?.trainingLinkUrl} className="mt-5 inline-flex items-center gap-2 text-[#6b8a0a]" style={{ fontWeight: 600 }}>
                {block.trainingLinkLabel}
              </SmartLink>
            )}
          </div>
        </div>

        {/* 03 — Cost */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block?.costNumber || "03"}</div>
            <h3 className="mt-1 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{block?.costTitle}</h3>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-3">
            {tiers.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40">
                <div className="text-xs text-neutral-600 uppercase tracking-wide">{f.label}</div>
                <div className="mt-1 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 800 }}>{f.value}</div>
                {f.note && <div className="text-sm text-neutral-600 mt-1">{f.note}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* 04 — Register */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block?.registerNumber || "04"}</div>
            <h3 className="mt-1 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{block?.registerTitle}</h3>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {steps.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl border border-neutral-200">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-[#AFDC1C] flex items-center justify-center" style={{ fontWeight: 700 }}>
                  {s.n}
                </div>
                <div className="mt-3 text-neutral-900" style={{ fontWeight: 700 }}>{s.title}</div>
                {s.body && <div className="text-sm text-neutral-600 mt-1">{s.body}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
