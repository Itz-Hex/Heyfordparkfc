import { Users, Heart, Sparkles, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const values = [
  { icon: Users, title: "Teamwork", body: "We win, lose, and grow together. No player left on the sideline." },
  { icon: Heart, title: "Respect", body: "For teammates, opponents, referees, and the families that bring them." },
  { icon: Sparkles, title: "Inspire", body: "Coaches who care, players who try — every session, every match." },
];

export function About() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>ABOUT THE CLUB</div>
            <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              A community club for every child who wants to play.
            </h2>
            <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
              Founded in 2019, Heyford Park FC has grown to over 250 registered players across 20 teams,
              boys' and girls' from U7 to U16. We're a volunteer-run, England Football accredited club rooted in
              Heyford Park — and we've built our coaching around three values that come before any scoreline.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 p-4 rounded-lg border border-neutral-200 bg-neutral-50">
              <div className="w-12 h-12 rounded-full bg-[#AFDC1C] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <div className="text-neutral-900" style={{ fontWeight: 600 }}>England Football Accredited</div>
                <div className="text-sm text-neutral-500">Recognised standard of safe, quality grassroots football</div>
              </div>
            </div>

            <Link
              to="/join"
              className="mt-8 inline-flex items-center gap-2 text-neutral-900 hover:gap-3 transition-all"
              style={{ fontWeight: 600 }}
            >
              Want your child to join? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {values.map((v) => (
              <div key={v.title} className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#AFDC1C] hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#AFDC1C]/20 group-hover:bg-[#AFDC1C] flex items-center justify-center shrink-0 transition-colors">
                    <v.icon className="w-6 h-6 text-[#6b8a0a] group-hover:text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-neutral-900" style={{ fontWeight: 700, fontSize: "1.25rem" }}>{v.title}</h3>
                    <p className="text-neutral-600 mt-1">{v.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
