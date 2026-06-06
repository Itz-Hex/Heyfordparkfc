import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export function AffiliationsBlock({ block }: { block: any }) {
  const partners: any[] = block?.partners || [];
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
        {partners.length > 0 && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <SmartLink key={i} to={p.url} className="block">
                <div className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-[#AFDC1C] transition-colors h-full">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center">
                    <Icon name={p.logoIcon} className="w-5 h-5" />
                  </div>
                  <div className="mt-3 text-neutral-900" style={{ fontWeight: 700 }}>{p.name}</div>
                  {p.role && <div className="text-sm text-neutral-600 mt-0.5">{p.role}</div>}
                </div>
              </SmartLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
