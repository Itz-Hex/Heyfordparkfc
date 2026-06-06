import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactFormBlock({ block }: { block: any }) {
  const [submitted, setSubmitted] = useState(false);
  const subjects: string[] = block?.subjects || [];
  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title) && (
          <div className="max-w-3xl mb-10">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.body && <p className="mt-4 text-neutral-600 text-lg">{block.body}</p>}
          </div>
        )}
        <form className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-4 max-w-3xl" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div className="flex items-start gap-3 p-5 rounded-xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40">
              <CheckCircle2 className="w-6 h-6 text-[#6b8a0a] shrink-0" />
              <div className="text-neutral-700">{block?.successMessage || "Thanks — we'll be in touch."}</div>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-neutral-600">Your name</span>
                  <input className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 outline-none focus:border-[#AFDC1C]" />
                </label>
                <label className="block">
                  <span className="text-sm text-neutral-600">Email</span>
                  <input type="email" className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 outline-none focus:border-[#AFDC1C]" />
                </label>
              </div>
              {subjects.length > 0 && (
                <label className="block">
                  <span className="text-sm text-neutral-600">Subject</span>
                  <select className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 bg-white outline-none focus:border-[#AFDC1C]">
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </label>
              )}
              <label className="block">
                <span className="text-sm text-neutral-600">Message</span>
                <textarea rows={4} className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 outline-none focus:border-[#AFDC1C]" />
              </label>
              <button className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
                {block?.submitLabel || "Send message"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
