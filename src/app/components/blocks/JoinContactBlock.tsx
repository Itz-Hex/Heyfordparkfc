import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export function JoinContactBlock({ block }: { block: any }) {
  const [submitted, setSubmitted] = useState(false);
  const options: any[] = block?.sidebarOptions || [];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 p-8 rounded-3xl bg-neutral-900 text-white">
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700 }}>{block?.formTitle || "Register your interest"}</h3>
            {block?.formSubtitle && <p className="text-neutral-300 mt-2">{block.formSubtitle}</p>}

            {submitted ? (
              <div className="mt-8 flex items-start gap-3 p-5 rounded-xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40">
                <CheckCircle2 className="w-6 h-6 text-[#AFDC1C] shrink-0" />
                <div>
                  <div style={{ fontWeight: 700 }}>{block?.successMessage || "Thanks — we've got it."}</div>
                  {block?.successSub && <div className="text-sm text-neutral-300 mt-1">{block.successSub}</div>}
                </div>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Parent / guardian name" />
                  <Field label="Email" type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Child's name" />
                  <Field label="Child's date of birth" type="date" />
                </div>
                <Field label="Anything we should know?" textarea />
                <button
                  className="px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  {block?.submitLabel || "Send registration"}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-3">
            {block?.sidebarEyebrow && (
              <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.sidebarEyebrow}</div>
            )}
            {block?.sidebarTitle && (
              <h3 className="text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{block.sidebarTitle}</h3>
            )}
            {block?.sidebarBody && <p className="text-neutral-600">{block.sidebarBody}</p>}
            {options.length > 0 && (
              <div className="mt-4 grid grid-cols-1 gap-3">
                {options.map((o, i) => (
                  <SmartLink key={i} to={o.url} className="block">
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#AFDC1C]/20 text-[#6b8a0a] flex items-center justify-center">
                        <Icon name={o.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-neutral-900" style={{ fontWeight: 600 }}>{o.label}</div>
                      </div>
                    </div>
                  </SmartLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", textarea }: { label: string; type?: string; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm text-neutral-300">{label}</span>
      {textarea ? (
        <textarea rows={3} className="mt-1 w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white outline-none focus:border-[#AFDC1C]" />
      ) : (
        <input type={type} className="mt-1 w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white outline-none focus:border-[#AFDC1C]" />
      )}
    </label>
  );
}
