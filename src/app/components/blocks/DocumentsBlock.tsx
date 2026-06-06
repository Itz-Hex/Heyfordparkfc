import { Download, FileText } from "lucide-react";

export function DocumentsBlock({ block }: { block: any }) {
  const items: any[] = block?.items || [];
  if (items.length === 0) return null;
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
        <ul className="space-y-2 max-w-2xl">
          {items.map((d, i) => {
            const href = d.url || d.file?.asset?.url || "#";
            return (
              <li key={i}>
                <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#6b8a0a]" />
                    <span className="text-neutral-800">{d.title}</span>
                  </div>
                  <Download className="w-4 h-4 text-neutral-500" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
