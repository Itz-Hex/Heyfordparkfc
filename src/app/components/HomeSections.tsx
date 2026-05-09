import { Link } from "react-router";
import { ArrowRight, Users, Heart, Sparkles, Award, MapPin, FileText, Mail } from "lucide-react";

function SectionHeader({ eyebrow, title, blurb, to, ctaLabel }: { eyebrow: string; title: string; blurb: string; to: string; ctaLabel: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div className="max-w-2xl">
        <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{eyebrow}</div>
        <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          {title}
        </h2>
        <p className="mt-3 text-neutral-600">{blurb}</p>
      </div>
      <Link to={to} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors text-sm" style={{ fontWeight: 600 }}>
        {ctaLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

const values = [
  { icon: Users, title: "Teamwork" },
  { icon: Heart, title: "Respect" },
  { icon: Sparkles, title: "Inspire" },
];

export function AboutStrip() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="ABOUT THE CLUB"
          title="A community club for every child who wants to play."
          blurb="Founded in 2019 and England Football accredited. Over 250 boys and girls play across 20 teams — built on three simple values."
          to="/about"
          ctaLabel="More about us"
        />
        <div className="grid sm:grid-cols-3 gap-3">
          {values.map((v) => (
            <div key={v.title} className="p-5 rounded-2xl border border-neutral-200 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#AFDC1C]/20 flex items-center justify-center">
                <v.icon className="w-5 h-5 text-[#6b8a0a]" />
              </div>
              <div>
                <div className="text-neutral-900" style={{ fontWeight: 700 }}>{v.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 inline-flex items-center gap-3 p-3 rounded-lg border border-neutral-200 bg-neutral-50">
          <Award className="w-5 h-5 text-[#6b8a0a]" />
          <span className="text-sm text-neutral-700"><span style={{ fontWeight: 600 }}>England Football Accredited</span> · safe, quality grassroots football</span>
        </div>
      </div>
    </section>
  );
}

export function TeamsStrip() {
  const groups = ["U7", "U8", "U9", "U10", "U11", "U12", "U13", "U14", "U15", "U16"];
  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="OUR TEAMS"
          title="20 teams. One club."
          blurb="Boys' and girls' teams from Rising Stars and Wildcats up to U16."
          to="/teams"
          ctaLabel="View all teams"
        />
        <div className="flex flex-wrap gap-2">
          {groups.map((a) => (
            <Link key={a} to="/teams" className="px-4 py-2.5 rounded-full bg-white border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/10 text-neutral-800 transition-colors" style={{ fontWeight: 600 }}>
              {a}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JoinStrip() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#AFDC1C] to-[#9bc718] p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm text-neutral-900/70" style={{ fontWeight: 700 }}>JOIN US</div>
              <h2 className="mt-2 text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Could your child play here?
              </h2>
              <p className="mt-4 text-neutral-900/80 text-lg">
                Four answers in one place: who can play, when & where teams train, what it costs, and how to register.
              </p>
              <Link to="/join" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
                Go to Join Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Ages", v: "4 – 16" },
                { k: "Rising Stars", v: "Free" },
                { k: "U7 – U16", v: "£TBC" },
                { k: "Trial first", v: "No commitment" },
              ].map((s) => (
                <div key={s.k} className="p-4 rounded-2xl bg-white/80 backdrop-blur">
                  <div className="text-xs text-neutral-700 uppercase tracking-wide">{s.k}</div>
                  <div className="text-neutral-900 mt-1" style={{ fontSize: "1.25rem", fontWeight: 800 }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationsStrip() {
  return (
    <section className="py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="OUR LOCATIONS"
          title="Two grounds, easy to find."
          blurb="Heyford Park and Fritwell Field — full addresses, parking, and maps on the locations page."
          to="/locations"
          ctaLabel="Find a venue"
        />
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: "Heyford Park", area: "Izzard Road, Heyford Park, OX26 5AB", note: "TBC" },
            { name: "Fritwell Field", area: "Fewcott Road, Fritwell, OX27 7QA", note: "TBC" },
          ].map((v) => (
            <Link key={v.name} to="/locations" className="group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-blue-500 transition-colors flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-neutral-900" style={{ fontWeight: 700 }}>{v.name}</div>
                <div className="text-sm text-neutral-600">{v.area}</div>
                <div className="text-xs text-neutral-500 mt-1">{v.note}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClubInfoStrip() {
  const tiles = [
    { label: "Welfare", to: "/club-info" },
    { label: "First Aid", to: "/club-info" },
    { label: "Documents", to: "/club-info" },
    { label: "Sponsorship", to: "/club-info" },
  ];
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="CLUB INFO"
          title="Policies, documents, and sponsorship."
          blurb="Welfare, first aid, downloadable club docs, and sponsorship info — all in one place."
          to="/club-info"
          ctaLabel="Open Club Info"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {tiles.map((t) => (
            <Link key={t.label} to={t.to} className="group p-5 rounded-2xl border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#6b8a0a]" />
                <span className="text-neutral-900" style={{ fontWeight: 600 }}>{t.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="py-16 lg:py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-sm text-[#AFDC1C]" style={{ fontWeight: 600 }}>CONTACT</div>
          <h2 className="mt-2 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Got a question?
          </h2>
          <p className="mt-3 text-neutral-300 text-lg max-w-md">
            We'll point you to the right person — joining, sponsorship, welfare, or just hello.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
          <Link to="/contact" className="px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 700 }}>
            <Mail className="w-4 h-4" /> Contact us
          </Link>
          <Link to="/join" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
            Or join the club <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
