import { PageHero } from "../components/PageHero";
import { ClubInfo } from "../components/ClubInfo";
import { Shield, Heart, Megaphone } from "lucide-react";
import { Link } from "react-router";

const promises = [
  { icon: Shield, title: "Safeguarding first", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: Heart, title: "Inclusive by design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { icon: Megaphone, title: "Transparent governance", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const partners = [
  "England Football · Accreditation body",
  "Oxfordshire FA · County affiliation",
  "Nike · Kit partner",
  "Fritwell Field · 10-year ground partnership",
];

export function ClubInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="CLUB INFO"
        title="The way we run things."
        description="Our policies, club documents, sponsorship details, and the standards we hold ourselves to."
      />

      <ClubInfo />

      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>OUR PROMISES</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              How we run a safe, welcoming club.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {promises.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-white border border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-[#AFDC1C]/20 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-[#6b8a0a]" />
                </div>
                <div className="mt-4 text-neutral-900" style={{ fontWeight: 700, fontSize: "1.125rem" }}>{p.title}</div>
                <div className="mt-2 text-neutral-600">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>WE'RE PROUD TO PARTNER WITH</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Affiliations & partners
            </h2>
            <p className="mt-3 text-neutral-600">
              Heyford Park FC is England Football accredited (with a second FA star awarded in 2022), affiliated with Oxfordshire FA, and a Nike partner club.
            </p>
            <ul className="mt-5 space-y-2">
              {partners.map((p) => (
                <li key={p} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700">{p}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-900 text-white">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Could your business sponsor us?</h3>
            <p className="mt-3 text-neutral-300">
              Sponsorship from local businesses funds kit, equipment, and the next generation of players in Heyford Park.
            </p>
            <ul className="mt-5 space-y-2 text-neutral-300 text-sm">
              <li>• Logo on training & match kit</li>
              <li>• Thank-you on our website and socials</li>
              <li>• Pitch-side banners at matches</li>
              <li>• Annual sponsor's day invitation</li>
            </ul>
            <Link to="/contact" className="mt-6 inline-block px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors" style={{ fontWeight: 700 }}>
              Talk to our sponsorship lead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
