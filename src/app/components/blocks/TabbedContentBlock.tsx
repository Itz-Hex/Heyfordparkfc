import { useState } from "react";
import { PortableText } from "../../../sanity/PortableText";
import { Icon } from "./Icon";

export function TabbedContentBlock({ block }: { block: any }) {
  const tabs: any[] = block?.tabs || [];
  const [active, setActive] = useState(tabs[0]?.key || "");
  if (tabs.length === 0) return null;
  const current = tabs.find((t) => t.key === active) || tabs[0];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title) && (
          <div className="max-w-3xl">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
          </div>
        )}
        <div className="mt-10 grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col gap-2 overflow-x-auto">
              {tabs.map((t) => {
                const isActive = active === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all ${isActive ? "bg-neutral-900 text-white" : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"}`}
                  >
                    <Icon name={t.icon} className={`w-5 h-5 ${isActive ? "text-[#AFDC1C]" : "text-[#6b8a0a]"}`} />
                    <span style={{ fontWeight: 600 }}>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-3 p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
            {current?.label && <h3 className="text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{current.label}</h3>}
            {current?.body && <div className="mt-4 text-neutral-700"><PortableText value={current.body} /></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
