import { Handshake } from "lucide-react";
import type { Sponsor } from "../data/teams";

export function TeamSponsors({ sponsors, teamName }: { sponsors: Sponsor[]; teamName: string }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{teamName.toUpperCase()} SPONSORS</div>
          <h2
            className="mt-2 text-neutral-900"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Backed by our sponsors.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {teamName} is supported by these local businesses. Click through to find out more about each one.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {sponsors.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="aspect-[3/2] rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors flex flex-col items-center justify-center p-4 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3">
                <Handshake className="w-6 h-6 text-[#6b8a0a]" />
              </div>
              <div className="text-neutral-900 text-sm" style={{ fontWeight: 600 }}>
                {s.name}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">Logo placeholder</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
