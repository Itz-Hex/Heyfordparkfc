import { PageHero } from "../components/PageHero";
import { Locations } from "../components/Locations";
import { AlertCircle } from "lucide-react";

const policies = [
  { title: "Toilet facilities available", body: "Toilets are available at all our venues for players, parents, and spectators." },
  { title: "Smoke free venue", body: "All our grounds are smoke free — please do not smoke or vape on site." },
  { title: "No dogs", body: "We strictly do not allow dogs at any of our venues, including on leads." },
];

export function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR LOCATIONS"
        title="Find us, on or off match day."
        description="Three venues across Heyford Park, Fritwell, and Tackley — pitch allocations vary week to week."
      />

      <Locations />

      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-sm text-blue-700" style={{ fontWeight: 600 }}>HOUSE RULES</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              A few ground rules.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-3">
            {policies.map((p) => (
              <div key={p.title} className="p-5 rounded-2xl bg-white border border-neutral-200">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <div className="mt-3 text-neutral-900" style={{ fontWeight: 700 }}>{p.title}</div>
                <div className="mt-1 text-neutral-600">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
