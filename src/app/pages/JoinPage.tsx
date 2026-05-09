import { PageHero } from "../components/PageHero";
import { Join } from "../components/Join";
import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";

const faqs = [
  { q: "Do you take complete beginners?", a: "Absolutely — most of our youngest players had never kicked a ball before joining. Our coaches start with the basics every season." },
  { q: "What if my child has never played in a team before?", a: "We run informal taster sessions before committing. The first few weeks focus on confidence and fundamentals — no pressure." },
  { q: "Are there girls-only teams?", a: "Yes — we run girls' sides at most age groups. Where numbers are smaller, girls play in our mixed teams." },
  { q: "What kit do they need to start?", a: "Just shin pads, boots, and water. Once registered, we provide the match kit; training tops are available from the Club Shop." },
  { q: "How does the waiting list work?", a: "If a team is full, we'll add your child to a list and contact you the moment a place opens. We're honest about realistic timelines." },
  { q: "Can parents help out?", a: "Yes please! We're always looking for assistant coaches, team managers, and matchday volunteers. Training is provided." },
];

const quotes = [
  { name: "Emma, mum to a U9 player", body: "Within two weeks of his first session, my son was begging to go on training nights. The coaches really make every kid feel included." },
  { name: "Dave, parent volunteer", body: "Joining as a coach changed my Saturdays. It's the most rewarding thing I do — and the kids' progress is incredible." },
  { name: "Priya, U12 Girls parent", body: "The girls' team has given my daughter so much confidence. She's made friends across the village she'd never have met otherwise." },
];

export function JoinPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="JOIN US"
        title="Could your child play here? Yes — almost certainly."
        description="Everything a new family needs in one place. Boys and girls, ages 4 to 16, no experience required."
      />

      <Join />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>FREQUENTLY ASKED</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Questions parents ask us most.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${isOpen ? "border-[#AFDC1C] bg-[#AFDC1C]/5" : "border-neutral-200 hover:border-neutral-400"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-neutral-900" style={{ fontWeight: 600 }}>{f.q}</div>
                    <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  {isOpen && <div className="mt-3 text-neutral-700">{f.a}</div>}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>FROM OUR FAMILIES</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              What parents say.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {quotes.map((q) => (
              <div key={q.name} className="p-6 rounded-2xl bg-white border border-neutral-200">
                <Quote className="w-7 h-7 text-[#AFDC1C]" />
                <p className="mt-4 text-neutral-700 leading-relaxed">"{q.body}"</p>
                <div className="mt-5 text-sm text-neutral-500">{q.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
