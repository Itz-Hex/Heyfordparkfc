import { PageHero } from "../components/PageHero";
import { Teams } from "../components/Teams";
import { Trophy, Calendar, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const fixtures = [
  { date: "Sat 00 Xxx", home: "HPFC Example Team", away: "Example Opponent FC", time: "00:00", venue: "Example Venue" },
  { date: "Sat 00 Xxx", home: "HPFC Example Team", away: "Example Opponent FC", time: "00:00", venue: "Example Venue" },
  { date: "Sun 00 Xxx", home: "Example Opponent FC", away: "HPFC Example Team", time: "00:00", venue: "Example Venue" },
  { date: "Sun 00 Xxx", home: "HPFC Example Team", away: "Example Opponent FC", time: "00:00", venue: "Example Venue" },
];

const results = [
  { team: "Example Team", score: "0 – 0", opp: "vs Example Opponent FC", note: "Placeholder result" },
  { team: "Example Team", score: "0 – 0", opp: "vs Example Opponent FC", note: "Placeholder result" },
  { team: "Example Team", score: "0 – 0", opp: "vs Example Opponent FC", note: "Placeholder result" },
  { team: "Example Team", score: "0 – 0", opp: "vs Example Opponent FC", note: "Placeholder result" },
];

export function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR TEAMS"
        title="20 teams. Every age, every weekend."
        description="From Rising Stars and Wildcats to U16s — find the right team for your child."
      />

      <Teams />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[#6b8a0a]" />
                <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  This weekend's fixtures
                </h2>
              </div>
              <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                {fixtures.map((f, i) => (
                  <div key={i} className={`p-4 flex flex-wrap gap-3 items-center ${i ? "border-t border-neutral-100" : ""}`}>
                    <div className="text-xs text-neutral-500 w-20 shrink-0">{f.date}</div>
                    <div className="flex-1 min-w-[180px]">
                      <div className="text-neutral-900" style={{ fontWeight: 600 }}>{f.home} <span className="text-neutral-400 mx-1">v</span> {f.away}</div>
                      <div className="text-xs text-neutral-500">{f.venue}</div>
                    </div>
                    <div className="text-neutral-900" style={{ fontWeight: 700 }}>{f.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-[#6b8a0a]" />
                <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Recent results
                </h2>
              </div>
              <div className="rounded-2xl border border-neutral-200 overflow-hidden">
                {results.map((r, i) => (
                  <div key={i} className={`p-4 flex items-center gap-4 ${i ? "border-t border-neutral-100" : ""}`}>
                    <div className="flex-1">
                      <div className="text-neutral-900" style={{ fontWeight: 600 }}>{r.team}</div>
                      <div className="text-xs text-neutral-500">{r.opp} · {r.note}</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#AFDC1C]/20 text-neutral-900" style={{ fontWeight: 700 }}>
                      {r.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>Kit available in our Club Shop</h2>
            <p className="text-neutral-600 mt-2">Match shirts, training gear, and accessories — all printed with the club crest.</p>
          </div>
          <a
            href="https://www.kitlocker.com/heyfordparkfc"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-neutral-900 transition-colors"
            style={{ fontWeight: 700 }}
          >
            <ShoppingBag className="w-4 h-4" /> Open Club Shop ↗
          </a>
        </div>
      </section>

      <section className="py-16 bg-[#AFDC1C]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
          <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }}>Interested in one of these teams?</h2>
          <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
            Find out how to join <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
