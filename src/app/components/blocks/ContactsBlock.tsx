import { Mail, Phone } from "lucide-react";

export function ContactsBlock({ block }: { block: any }) {
  const contacts: any[] = block?.contacts || [];
  if (contacts.length === 0) return null;
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title) && (
          <div className="max-w-2xl mb-8">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contacts.map((c, i) => (
            <a key={i} href={c.email ? `mailto:${c.email}` : "#"} className="block p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#AFDC1C] transition-colors">
              {c.role && <div className="text-xs text-neutral-500 uppercase tracking-wide">{c.role}</div>}
              {c.name && <div className="text-neutral-900" style={{ fontWeight: 600 }}>{c.name}</div>}
              {c.email && (
                <div className="text-sm text-neutral-600 flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5" /> {c.email}
                </div>
              )}
              {c.phone && (
                <div className="text-sm text-neutral-600 flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-3.5 h-3.5" /> {c.phone}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
