import { Handshake, ArrowRight } from "lucide-react";
import { useSanityQuery } from "../../../sanity/hooks";
import { resolveImage } from "../../../sanity/client";
import { SmartLink } from "./SmartLink";

const ALL_SPONSORS_QUERY = `*[_type == "sponsor"] | order(name asc) { _id, name, url, logo }`;

export function SponsorsBlock({ block }: { block: any }) {
  const provided: any[] = block?.sponsors || [];
  const needsFetch = provided.length === 0;
  const { data } = useSanityQuery<any[]>(needsFetch ? ALL_SPONSORS_QUERY : `[]`, {}, [needsFetch]);
  const sponsors = provided.length > 0 ? provided : (data || []);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-10">
          {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
          {block?.title && (
            <h2 className="mt-2 text-neutral-900" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              {block.title}
            </h2>
          )}
          {block?.body && <p className="mt-4 text-lg text-neutral-600">{block.body}</p>}
        </div>

        {sponsors.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {sponsors.map((s, i) => {
              const logoUrl = resolveImage(s.logo, 240);
              const inner = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3 overflow-hidden">
                    {logoUrl ? <img src={logoUrl} alt={s.name} className="w-full h-full object-contain" /> : <Handshake className="w-6 h-6 text-[#6b8a0a]" />}
                  </div>
                  <div className="text-neutral-900 text-sm" style={{ fontWeight: 600 }}>{s.name}</div>
                  {!logoUrl && <div className="text-xs text-neutral-500 mt-0.5">Logo placeholder</div>}
                </>
              );
              const className = "aspect-[3/2] rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors flex flex-col items-center justify-center p-4 text-center";
              return s.url ? (
                <a key={s._id || i} href={s.url} target="_blank" rel="noreferrer" className={className}>{inner}</a>
              ) : (
                <div key={s._id || i} className={className}>{inner}</div>
              );
            })}
          </div>
        )}

        {block?.ctaLabel && block?.ctaUrl && (
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 lg:p-10 flex flex-wrap gap-6 items-center justify-between">
            <div className="max-w-xl">
              <div className="text-sm text-[#AFDC1C]" style={{ fontWeight: 600 }}>BECOME A SPONSOR</div>
              <h3 className="mt-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.1 }}>
                Put your business on our shirts.
              </h3>
            </div>
            <SmartLink to={block.ctaUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors" style={{ fontWeight: 700 }}>
              {block.ctaLabel} <ArrowRight className="w-4 h-4" />
            </SmartLink>
          </div>
        )}
      </div>
    </section>
  );
}
