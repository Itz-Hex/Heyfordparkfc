import { ArrowRight, MapPin, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePage, getPageSection } from "../../sanity/hooks";
import { PortableText } from "../../sanity/PortableText";

export function Hero() {
  const { data: page } = usePage("home");
  const hero = getPageSection(page, "hero");
  const heroHeading = hero?.heading;
  const heroBody = hero?.body;
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1680024439029-d7d4b7f4cba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Children playing football"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/90" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AFDC1C]/20 border border-[#AFDC1C]/40 text-[#AFDC1C] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#AFDC1C] animate-pulse" />
            England Football Accredited · 250+ players
          </div>
          <h1 className="text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {heroHeading || <>Where every child <span className="text-[#AFDC1C]">finds their game.</span></>}
          </h1>
          <div className="mt-5 text-lg text-neutral-200 max-w-2xl">
            {heroBody ? (
              <PortableText value={heroBody} />
            ) : (
              <p>Boys &amp; girls football for ages 4–16. Built on Teamwork, Respect, and Inspire — right here in Heyford Park.</p>
            )}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
          <Link
            to="/join"
            className="group bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 rounded-xl p-5 text-left transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <Users className="w-6 h-6" />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div style={{ fontWeight: 700 }} className="text-lg">Join Us</div>
            <div className="text-sm opacity-80">Find out if your child can play</div>
          </Link>

          <Link
            to="/locations"
            className="group bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-5 text-left transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <MapPin className="w-6 h-6" />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div style={{ fontWeight: 700 }} className="text-lg">Find our Locations</div>
            <div className="text-sm opacity-90">Pitches, parking & directions</div>
          </Link>

          <a
            href="https://www.kitlocker.com/heyfordparkfc"
            target="_blank"
            rel="noreferrer"
            className="group bg-amber-400 hover:bg-amber-500 text-neutral-900 rounded-xl p-5 text-left transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <ShoppingBag className="w-6 h-6" />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div style={{ fontWeight: 700 }} className="text-lg">Club Shop</div>
            <div className="text-sm opacity-80">Kit & training wear ↗</div>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
          <div><span className="text-white" style={{ fontWeight: 700 }}>2019</span> · Founded</div>
          <div><span className="text-white" style={{ fontWeight: 700 }}>250+</span> · Registered players</div>
          <div><span className="text-white" style={{ fontWeight: 700 }}>20</span> · Active teams</div>
          <div><span className="text-white" style={{ fontWeight: 700 }}>U7–U16</span> · Age groups</div>
        </div>
      </div>
    </section>
  );
}
