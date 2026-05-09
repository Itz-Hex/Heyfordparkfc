import { PageHero } from "../components/PageHero";
import { About } from "../components/About";
import { Link } from "react-router";
import { Trophy, Users, Calendar, ArrowRight } from "lucide-react";

const timeline = [
  { year: "Jun 2019", title: "Heyford Park Football launched", body: "The club is born." },
  { year: "Aug 2019", title: "Joined the Oxfordshire Football League", body: "We enter our first league with 7 teams." },
  { year: "Aug 2019", title: "1st kits launched", body: "Our first set of club kits hits the pitch." },
  { year: "Sep 2019", title: "Rising Stars launched", body: "Free football training for 4–7 year olds." },
  { year: "Mar 2020", title: "FA accredited", body: "We earn England Football accreditation." },
  { year: "Jun 2020", title: "Wildcats launched", body: "Free football for girls aged 7–11." },
  { year: "Aug 2020", title: "First U7s and 130+ children", body: "More teams join, including our first U7s graduating from Rising Stars." },
  { year: "May 2021", title: "Training range launched", body: "We expand our training offer." },
  { year: "Jun 2021", title: "New kit", body: "The teams get a fresh look." },
  { year: "Oct 2021", title: "£2,500 raised for charity", body: "In collaboration with the Heyford Park Running Club, supporting Oxford Hospital Charity." },
  { year: "Oct 2021", title: "Floodlights at Fritwell Field", body: "We invest in floodlights at our Fritwell ground." },
  { year: "Jun 2022", title: "Second FA star", body: "Awarded our second star by the Football Association." },
  { year: "Jul 2022", title: "Rebrand to the Fighter Jets", body: "New fighter jet logo and nickname, honouring the heritage of the old RAF grounds." },
  { year: "Oct 2022", title: "10-year Fritwell Field partnership", body: "We sign a long-term partnership with Fritwell Field." },
  { year: "Jan 2023", title: "Nike partner club", body: "We become an official Nike partner club." },
  { year: "Jan 2023", title: "New Nike kits", body: "Fresh Nike kits across the club." },
  { year: "Jan 2024", title: "Floodlights at Heyford Park", body: "We invest in floodlights at Heyford Park." },
  { year: "Jun 2024", title: "20 teams, 250+ children", body: "The club today: 20 teams and over 250 children playing." },
];

const committee = [
  { role: "Chairman", name: "Adrian Woodhouse" },
  { role: "Vice Chairman", name: "Carl Miller" },
  { role: "Secretary", name: "Pete Ciechan" },
  { role: "Club Treasurer", name: "Jo McMahon" },
  { role: "Assistant Treasurer", name: "Rachael Garfield" },
  { role: "Child Welfare Officer", name: "Faye Napper" },
  { role: "Assistant Child Welfare Officer", name: "Leah Barber" },
  { role: "Head of Boys Football Development", name: "Paul McMahon" },
  { role: "Head of Girls Football Development", name: "Stuart Simpson" },
  { role: "Fixtures Secretary", name: "Dan Howells" },
  { role: "Fundraising Officer", name: "Juliette Miller" },
  { role: "Communications Officer", name: "Mike Gill" },
  { role: "Community Officer", name: "Ed Devine" },
  { role: "Grounds Officer", name: "Matt Parkinson" },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT HPFC"
        title="A volunteer-run club, built for our community."
        description="Heyford Park FC is run by parents, coaches, and players who believe every child deserves a place to play."
      />

      <About />

      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>OUR JOURNEY</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Seven years in the making.
            </h2>
          </div>
          <div className="relative grid gap-3">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#AFDC1C] text-neutral-900 flex items-center justify-center text-center px-1" style={{ fontWeight: 800, fontSize: "0.7rem", lineHeight: 1.1 }}>
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-neutral-300 my-2" />}
                </div>
                <div className="pb-6 flex-1">
                  <div className="text-xs text-neutral-500">{t.year}</div>
                  <div className="text-neutral-900" style={{ fontWeight: 700, fontSize: "1.125rem" }}>{t.title}</div>
                  <div className="text-neutral-600 mt-1">{t.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {[
              { icon: Users, label: "Registered players", value: "250+" },
              { icon: Trophy, label: "Active teams", value: "20" },
              { icon: Calendar, label: "Years running", value: "7" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <s.icon className="w-6 h-6 text-[#6b8a0a]" />
                <div className="mt-3 text-neutral-900" style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                <div className="mt-1 text-neutral-600">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mb-8">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>OUR COMMITTEE</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              The people who keep us running.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {committee.map((c) => (
              <div key={c.role} className="p-5 rounded-2xl border border-neutral-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AFDC1C] to-[#9bc718] flex items-center justify-center text-neutral-900" style={{ fontWeight: 700 }}>
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wide">{c.role}</div>
                  <div className="text-neutral-900" style={{ fontWeight: 600 }}>{c.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#AFDC1C]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
          <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }}>Want your child to join?</h2>
          <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
            Go to Join Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
