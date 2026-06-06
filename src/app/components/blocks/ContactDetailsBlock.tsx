import { Mail } from "lucide-react";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export function ContactDetailsBlock({ block }: { block: any }) {
  const subjects: string[] = block?.subjectOptions || ["General enquiry", "Sponsorship", "Press", "Other"];
  const contacts: any[] = block?.contacts || [];
  const socials: any[] = block?.socials || [];

  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <form className="lg:col-span-3 p-8 rounded-3xl bg-white border border-neutral-200 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }} className="text-neutral-900">{block?.formTitle || "General enquiry"}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Your name" />
              <Input label="Email" type="email" />
            </div>
            <label className="block">
              <span className="text-sm text-neutral-600">Subject</span>
              <select className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 bg-white outline-none focus:border-[#AFDC1C]">
                {subjects.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-neutral-600">Message</span>
              <textarea rows={4} className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 outline-none focus:border-[#AFDC1C]" />
            </label>
            <button className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
              {block?.submitLabel || "Send message"}
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            {contacts.length > 0 && (
              <div>
                <h3 className="text-neutral-900" style={{ fontSize: "1.25rem", fontWeight: 700 }}>{block?.contactsTitle || "Key contacts"}</h3>
                <div className="mt-3 space-y-2">
                  {contacts.map((c, i) => (
                    <a key={i} href={`mailto:${c.email}`} className="block p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#AFDC1C] transition-colors">
                      <div className="text-xs text-neutral-500 uppercase tracking-wide">{c.role}</div>
                      <div className="text-neutral-900" style={{ fontWeight: 600 }}>{c.name}</div>
                      <div className="text-sm text-neutral-600 flex items-center gap-1.5 mt-0.5">
                        <Mail className="w-3.5 h-3.5" /> {c.email}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {socials.length > 0 && (
              <div>
                <h3 className="text-neutral-900" style={{ fontSize: "1.25rem", fontWeight: 700 }}>{block?.followTitle || "Follow us"}</h3>
                <div className="mt-3 flex gap-2">
                  {socials.map((s, i) => (
                    <SmartLink key={i} to={s.url} className="w-11 h-11 rounded-full bg-white border border-neutral-200 hover:border-[#AFDC1C] flex items-center justify-center">
                      <Icon name={s.platform} className="w-5 h-5 text-neutral-700" />
                    </SmartLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-sm text-neutral-600">{label}</span>
      <input type={type} className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 outline-none focus:border-[#AFDC1C]" />
    </label>
  );
}
