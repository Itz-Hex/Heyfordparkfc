import { PortableText } from "../../../sanity/PortableText";

export function RichTextBlock({ block }: { block: any }) {
  const bg = block?.background || "white";
  const bgClass =
    bg === "neutral" ? "bg-neutral-50" :
    bg === "dark" ? "bg-neutral-900 text-white" :
    bg === "accent" ? "bg-[#AFDC1C]" :
    "bg-white";
  const eyebrowClass = bg === "dark" ? "text-[#AFDC1C]" : "text-[#6b8a0a]";
  const titleClass = bg === "dark" ? "text-white" : "text-neutral-900";
  const bodyClass = bg === "dark" ? "text-neutral-300" : "text-neutral-700";

  return (
    <section className={`py-16 lg:py-20 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        {block?.eyebrow && <div className={`text-sm mb-3 ${eyebrowClass}`} style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
        {block?.title && (
          <h2 className={titleClass} style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {block.title}
          </h2>
        )}
        {block?.body && (
          <div className={`mt-5 text-lg leading-relaxed ${bodyClass}`}>
            <PortableText value={block.body} />
          </div>
        )}
      </div>
    </section>
  );
}
