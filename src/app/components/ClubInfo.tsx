import { useState } from "react";
import { Shield, HeartPulse, FileText, Handshake, Download } from "lucide-react";

const tabs = [
  {
    id: "welfare",
    label: "Welfare",
    icon: Shield,
    body: (
      <div className="space-y-3 text-neutral-700">
        <p>The wellbeing of every child at Heyford Park FC comes before everything else. Our Child Welfare Officer, <span style={{ fontWeight: 600 }}>Faye Napper</span>, is the first point of contact for any concern, supported by Assistant Child Welfare Officer <span style={{ fontWeight: 600 }}>Leah Barber</span>.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="mailto:welfare@heyfordparkfootballclub.co.uk" className="inline-block text-[#6b8a0a]" style={{ fontWeight: 600 }}>welfare@heyfordparkfootballclub.co.uk →</a>
      </div>
    ),
  },
  {
    id: "first-aid",
    label: "First Aid",
    icon: HeartPulse,
    body: (
      <div className="space-y-3 text-neutral-700">
        <p>Every team has a first-aid trained coach present at every session and match. Each pitch is stocked with a kit including ice packs and dressings.</p>
        <p>In an emergency please dial <span style={{ fontWeight: 600 }}>999</span> first, then alert the nearest coach.</p>
      </div>
    ),
  },
  {
    id: "documents",
    label: "Documents",
    icon: FileText,
    body: (
      <ul className="space-y-2">
        {["HPFC Constitution", "Club Ethos", "Photography and Filming Policy", "Code of Conduct — Youth Player", "Code of Conduct — Parent / Guardian", "Data Protection Policy"].map((d) => (
          <li key={d}>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5">
              <span className="text-neutral-800">{d}</span>
              <Download className="w-4 h-4 text-neutral-500" />
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "sponsorship",
    label: "Sponsorship",
    icon: Handshake,
    body: (
      <div className="space-y-3 text-neutral-700">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Team sponsorships start at <span style={{ fontWeight: 600 }}>£0</span>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
        <a href="mailto:sponsorship@heyfordparkfootballclub.co.uk" className="inline-block text-[#6b8a0a]" style={{ fontWeight: 600 }}>Get the sponsorship pack →</a>
      </div>
    ),
  },
];

export function ClubInfo() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>CLUB INFO</div>
          <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Everything else you might need.
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col gap-2 overflow-x-auto">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    <t.icon className={`w-5 h-5 ${isActive ? "text-[#AFDC1C]" : "text-[#6b8a0a]"}`} />
                    <span style={{ fontWeight: 600 }}>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-3 p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
            <h3 className="text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{current.label}</h3>
            <div className="mt-4">{current.body}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
