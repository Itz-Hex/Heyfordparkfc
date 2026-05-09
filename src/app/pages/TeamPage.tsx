import { useParams, Link } from "react-router";
import { Clock, User, Trophy, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { getTeam } from "../data/teams";
import { TeamSponsors } from "../components/TeamSponsors";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { NotFound } from "./NotFound";

export function TeamPage() {
  const { slug } = useParams();
  const team = slug ? getTeam(slug) : undefined;

  if (!team) return <NotFound />;

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <ImageWithFallback
          src={team.heroImage}
          alt={`${team.name} team`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/50 to-neutral-900/95" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <Link to="/teams" className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> All teams
          </Link>
          <div className="text-sm text-[#AFDC1C] mb-3" style={{ fontWeight: 600 }}>HEYFORD PARK FC</div>
          <h1 className="text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {team.name}
          </h1>
          <p className="mt-5 text-lg text-neutral-200 max-w-2xl">{team.blurb}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            { icon: User, label: "Manager", value: team.manager },
            { icon: Clock, label: "Training", value: `${team.trainingDay}, ${team.trainingTime}` },
            { icon: Calendar, label: "Match day", value: team.matchDay },
            { icon: Trophy, label: "League", value: team.league },
          ].map((d) => (
            <div key={d.label} className="p-5 rounded-2xl border border-neutral-200 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#AFDC1C]/20 flex items-center justify-center shrink-0">
                <d.icon className="w-5 h-5 text-[#6b8a0a]" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">{d.label}</div>
                <div className="text-neutral-900 mt-0.5" style={{ fontWeight: 600 }}>{d.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>GALLERY</div>
            <h2 className="mt-2 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              On the pitch
            </h2>
            <p className="mt-3 text-neutral-600">Photos from training, match days, and tournaments.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {team.gallery.map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl bg-neutral-200 ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/3]"}`}>
                <ImageWithFallback
                  src={src}
                  alt={`${team.name} photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSponsors sponsors={team.sponsors} teamName={team.name} />

      <section className="py-16 bg-[#AFDC1C]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap gap-6 items-center justify-between">
          <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }}>
            Want your child to play for {team.name}?
          </h2>
          <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
            Find out how to join <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
