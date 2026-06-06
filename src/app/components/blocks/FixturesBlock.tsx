import { Calendar, Trophy } from "lucide-react";
import { useSanityQuery } from "../../../sanity/hooks";

const FIXTURES_QUERY = `*[_type == "fixture"] | order(date asc) {
  _id, date, homeTeam, awayTeam, kickoff, venue, kind, score, note
}`;

function formatDate(d?: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" });
  } catch {
    return d;
  }
}

export function FixturesBlock({ block }: { block: any }) {
  const { data, loading } = useSanityQuery<any[]>(FIXTURES_QUERY);
  const mode = block?.mode || "both";
  const limit = block?.limit || 6;

  const fixtures = (data || []).filter((f) => f.kind !== "result").slice(0, limit);
  const results = (data || []).filter((f) => f.kind === "result").slice(0, limit);

  const showFixtures = mode === "upcoming" || mode === "both";
  const showResults = mode === "recent" || mode === "both";

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {block?.title && (
          <h2 className="text-neutral-900 mb-10" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {block.title}
          </h2>
        )}
        <div className={`grid ${showFixtures && showResults ? "lg:grid-cols-2" : ""} gap-10`}>
          {showFixtures && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[#6b8a0a]" />
                <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Upcoming fixtures
                </h2>
              </div>
              {loading && !data ? (
                <div className="text-neutral-500">Loading fixtures…</div>
              ) : (
                <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                  {fixtures.map((f, i) => (
                    <div key={f._id} className={`p-4 flex flex-wrap gap-3 items-center ${i ? "border-t border-neutral-100" : ""}`}>
                      <div className="text-xs text-neutral-500 w-20 shrink-0">{formatDate(f.date)}</div>
                      <div className="flex-1 min-w-[180px]">
                        <div className="text-neutral-900" style={{ fontWeight: 600 }}>{f.homeTeam} <span className="text-neutral-400 mx-1">v</span> {f.awayTeam}</div>
                        <div className="text-xs text-neutral-500">{f.venue}</div>
                      </div>
                      <div className="text-neutral-900" style={{ fontWeight: 700 }}>{f.kickoff}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {showResults && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-[#6b8a0a]" />
                <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Recent results
                </h2>
              </div>
              {loading && !data ? (
                <div className="text-neutral-500">Loading results…</div>
              ) : (
                <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                  {results.map((r, i) => (
                    <div key={r._id} className={`p-4 flex items-center gap-4 ${i ? "border-t border-neutral-100" : ""}`}>
                      <div className="flex-1">
                        <div className="text-neutral-900" style={{ fontWeight: 600 }}>{r.homeTeam}</div>
                        <div className="text-xs text-neutral-500">vs {r.awayTeam} {r.note ? `· ${r.note}` : ""}</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#AFDC1C]/20 text-neutral-900" style={{ fontWeight: 700 }}>
                        {r.score}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
