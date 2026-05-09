import { Link } from "react-router";
import { Handshake, ArrowRight } from "lucide-react";

const sponsors = [
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
  "Acme Corporation",
];

export function SponsorsStrip() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>OUR SPONSORS</div>
          <h2
            className="mt-2 text-neutral-900"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Powered by our sponsors.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every team at Heyford Park FC is backed by a local business. Their support pays for kit, equipment, and pitch time — and we're grateful for every one.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {sponsors.map((name, i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors flex flex-col items-center justify-center p-4 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3">
                <Handshake className="w-6 h-6 text-[#6b8a0a]" />
              </div>
              <div className="text-neutral-900 text-sm" style={{ fontWeight: 600 }}>
                {name}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">Logo placeholder</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 lg:p-10 flex flex-wrap gap-6 items-center justify-between">
          <div className="max-w-xl">
            <div className="text-sm text-[#AFDC1C]" style={{ fontWeight: 600 }}>BECOME A SPONSOR</div>
            <h3 className="mt-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Put your business on our shirts.
            </h3>
            <p className="mt-3 text-neutral-300">
              Sponsor a team and reach hundreds of local families across Heyford Park, Fritwell, and beyond.
            </p>
          </div>
          <Link
            to="/club-info"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors"
            style={{ fontWeight: 700 }}
          >
            Sponsorship details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
