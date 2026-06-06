import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useSanityQuery } from "../../../sanity/hooks";

const TEAMS_QUERY = `*[_type == "team"] | order(order asc) {
  _id, title, slug, manager, trainingDay, trainingTime,
  "sponsors": sponsors[]->{ _id, name, url }
}`;

export function TeamsBlock({ block }: { block: any }) {
  const { data, loading } = useSanityQuery<any[]>(TEAMS_QUERY);
  const teams = data || [];

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.body && <p className="mt-3 text-neutral-600 text-lg max-w-2xl">{block.body}</p>}
          </div>
        </div>

        {loading && !data ? (
          <div className="text-neutral-500">Loading teams…</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((t) => {
              const slug = t.slug?.current || "";
              return (
                <Link
                  key={t._id}
                  to={`/teams/${slug}`}
                  className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="h-2 bg-[#AFDC1C]" />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 800 }}>{t.title}</div>
                    <div className="text-sm text-neutral-500 mt-1">2025/26 Season</div>
                    <div className="mt-4 space-y-2 text-sm text-neutral-700">
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#6b8a0a]" /> {t.trainingDay || "TBC"}, {t.trainingTime || "TBC"}</div>
                      <div className="flex items-center gap-2"><User className="w-4 h-4 text-[#6b8a0a]" /> {t.manager || "TBC"}</div>
                    </div>
                    {t.sponsors && t.sponsors.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2" style={{ fontWeight: 600 }}>Sponsors</div>
                        <div className="flex flex-wrap gap-1.5">
                          {t.sponsors.map((s: any, i: number) => (
                            <a key={i} href={s.url || "#"} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-block px-2.5 py-1 rounded-full bg-[#AFDC1C]/15 hover:bg-[#AFDC1C]/30 text-[#4d6608] text-xs transition-colors" style={{ fontWeight: 600 }}>
                              {s.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 text-sm text-neutral-700 group-hover:text-neutral-900 flex items-center justify-between">
                      View team page
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
