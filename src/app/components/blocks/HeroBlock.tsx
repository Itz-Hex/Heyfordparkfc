import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PortableText } from "../../../sanity/PortableText";
import { resolveImage } from "../../../sanity/client";
import { SmartLink } from "./SmartLink";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";

export function HeroBlock({ block }: { block: any }) {
  const bg = resolveImage(block?.backgroundImage, 1920);
  const ctas: any[] = block?.ctas || [];

  const styleClass = (s?: string) => {
    if (s === "primary") return "bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900";
    if (s === "secondary") return "bg-blue-600 hover:bg-blue-700 text-white";
    if (s === "tertiary") return "bg-amber-400 hover:bg-amber-500 text-neutral-900";
    return "bg-neutral-800 hover:bg-neutral-700 text-white";
  };

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      {bg && (
        <ImageWithFallback
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/90" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {block?.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AFDC1C]/20 border border-[#AFDC1C]/40 text-[#AFDC1C] text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#AFDC1C] animate-pulse" />
              {block.eyebrow}
            </div>
          )}
          {block?.title && (
            <h1 className="text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              {block.title}
            </h1>
          )}
          {block?.body && (
            <div className="mt-5 text-lg text-neutral-200 max-w-2xl">
              <PortableText value={block.body} />
            </div>
          )}
        </div>

        {ctas.length > 0 && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {ctas.map((c, i) => (
              <SmartLink
                key={i}
                to={c.url}
                className={`group ${styleClass(c.style)} rounded-xl p-5 text-left transition-all block`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon name={c.icon} className="w-6 h-6" />
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                {c.label && <div style={{ fontWeight: 700 }} className="text-lg">{c.label}</div>}
                {c.sublabel && <div className="text-sm opacity-80">{c.sublabel}</div>}
              </SmartLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
