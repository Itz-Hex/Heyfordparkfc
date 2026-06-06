import { Mail, Phone } from "lucide-react";

export function PressMediaBlock({ block }: { block: any }) {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          {block?.eyebrow && (
            <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>
          )}
          {block?.title && (
            <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {block.title}
            </h2>
          )}
          {block?.body && <p className="mt-3 text-neutral-600 text-lg">{block.body}</p>}
        </div>
        <div className="mt-8 max-w-2xl p-6 rounded-2xl bg-white border border-neutral-200">
          {block?.contactName && (
            <div className="text-neutral-900" style={{ fontSize: "1.125rem", fontWeight: 700 }}>{block.contactName}</div>
          )}
          {block?.contactEmail && (
            <a href={`mailto:${block.contactEmail}`} className="mt-2 flex items-center gap-2 text-neutral-700 hover:text-[#6b8a0a]">
              <Mail className="w-4 h-4" /> {block.contactEmail}
            </a>
          )}
          {block?.contactPhone && (
            <a href={`tel:${block.contactPhone}`} className="mt-1.5 flex items-center gap-2 text-neutral-700 hover:text-[#6b8a0a]">
              <Phone className="w-4 h-4" /> {block.contactPhone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
