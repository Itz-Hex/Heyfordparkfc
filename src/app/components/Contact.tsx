import { ArrowRight, Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router";
import { usePage, getPageSection } from "../../sanity/hooks";
import { PortableText } from "../../sanity/PortableText";

const contacts = [
  { role: "Secretary", name: "Pete Ciechan", email: "secretary@heyfordparkfootballclub.co.uk" },
  { role: "Child Welfare Officer", name: "Faye Napper", email: "welfare@heyfordparkfootballclub.co.uk" },
  { role: "Communications Officer", name: "Mike Gill", email: "comms@heyfordparkfootballclub.co.uk" },
  { role: "Fundraising Officer", name: "Juliette Miller", email: "fundraising@heyfordparkfootballclub.co.uk" },
];

export function Contact() {
  const { data: page } = usePage("contact");
  const intro = getPageSection(page, "intro");
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>CONTACT US</div>
          <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {intro?.heading || "Get in touch."}
          </h2>
          {intro?.body && (
            <div className="mt-4 text-neutral-600 text-lg">
              <PortableText value={intro.body} />
            </div>
          )}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          <Link
            to="/join"
            className="p-5 rounded-2xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40 text-left hover:bg-[#AFDC1C]/25 transition-colors flex items-center justify-between"
          >
            <div>
              <div className="text-neutral-900" style={{ fontWeight: 700 }}>Looking to join?</div>
              <div className="text-sm text-neutral-600">Go to Join Us for everything you need.</div>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-700" />
          </Link>
          <Link
            to="/locations"
            className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-left hover:bg-blue-100 transition-colors flex items-center justify-between"
          >
            <div>
              <div className="text-neutral-900" style={{ fontWeight: 700 }}>Looking for directions?</div>
              <div className="text-sm text-neutral-600">Find pitches, parking, and maps.</div>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-700" />
          </Link>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          <form className="lg:col-span-3 p-8 rounded-3xl bg-white border border-neutral-200 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }} className="text-neutral-900">General enquiry</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Your name" />
              <Input label="Email" type="email" />
            </div>
            <label className="block">
              <span className="text-sm text-neutral-600">Subject</span>
              <select className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 bg-white outline-none focus:border-[#AFDC1C]">
                <option>General enquiry</option>
                <option>Sponsorship</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-neutral-600">Message</span>
              <textarea rows={4} className="mt-1 w-full border border-neutral-300 rounded-lg px-3 py-2 outline-none focus:border-[#AFDC1C]" />
            </label>
            <button className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" style={{ fontWeight: 600 }}>
              Send message
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-neutral-900" style={{ fontSize: "1.25rem", fontWeight: 700 }}>Key contacts</h3>
              <div className="mt-3 space-y-2">
                {contacts.map((c) => (
                  <a
                    key={c.role}
                    href={`mailto:${c.email}`}
                    className="block p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#AFDC1C] transition-colors"
                  >
                    <div className="text-xs text-neutral-500 uppercase tracking-wide">{c.role}</div>
                    <div className="text-neutral-900" style={{ fontWeight: 600 }}>{c.name}</div>
                    <div className="text-sm text-neutral-600 flex items-center gap-1.5 mt-0.5">
                      <Mail className="w-3.5 h-3.5" /> {c.email}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-neutral-900" style={{ fontSize: "1.25rem", fontWeight: 700 }}>Follow us</h3>
              <div className="mt-3 flex gap-2">
                <a href="#" className="w-11 h-11 rounded-full bg-white border border-neutral-200 hover:border-[#AFDC1C] flex items-center justify-center"><Facebook className="w-5 h-5 text-neutral-700" /></a>
                <a href="#" className="w-11 h-11 rounded-full bg-white border border-neutral-200 hover:border-[#AFDC1C] flex items-center justify-center"><Instagram className="w-5 h-5 text-neutral-700" /></a>
              </div>
            </div>
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
