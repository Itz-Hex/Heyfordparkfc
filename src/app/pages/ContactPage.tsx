import { PageHero } from "../components/PageHero";
import { Contact } from "../components/Contact";
import { MapPin, Mail, Clock } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email us", value: "hello@heyfordparkfootballclub.co.uk", note: "TBC", href: "mailto:hello@heyfordparkfootballclub.co.uk" },
  { icon: MapPin, label: "Visit us", value: "Heyford Park, OX26 5AB", note: "TBC", href: "https://maps.google.com/?q=Heyford+Park+School+Specialisms+Campus+Izzard+Road+OX26+5AB" },
];

const office = [
  { day: "Monday", hours: "TBC" },
  { day: "Tuesday – Friday", hours: "TBC" },
  { day: "Saturday", hours: "TBC" },
  { day: "Sunday", hours: "TBC" },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Get in touch."
        description="Drop us a message and we'll get back to you."
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-3">
          {channels.map((c) => (
            <a key={c.label} href={c.href} className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#AFDC1C]/20 flex items-center justify-center shrink-0">
                <c.icon className="w-6 h-6 text-[#6b8a0a]" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">{c.label}</div>
                <div className="text-neutral-900" style={{ fontWeight: 700, fontSize: "1.125rem" }}>{c.value}</div>
                <div className="text-sm text-neutral-600 mt-1">{c.note}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Contact />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#6b8a0a]" />
              <h2 className="text-neutral-900" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>
                When you'll find us
              </h2>
            </div>
            <div className="rounded-2xl border border-neutral-200 overflow-hidden">
              {office.map((o, i) => (
                <div key={o.day} className={`p-4 flex justify-between gap-4 ${i ? "border-t border-neutral-100" : ""}`}>
                  <div className="text-neutral-900" style={{ fontWeight: 600 }}>{o.day}</div>
                  <div className="text-neutral-600 text-right">{o.hours}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <h3 className="text-neutral-900" style={{ fontWeight: 700, fontSize: "1.25rem" }}>Press & media enquiries</h3>
            <p className="text-neutral-600 mt-3">
              We're always happy to talk to local press about our players, fundraising efforts, or community work. Please contact our Club Secretary directly with deadlines and we'll get back to you the same day where possible.
            </p>
            <a href="mailto:secretary@heyfordparkfootballclub.co.uk" className="mt-4 inline-block text-[#6b8a0a]" style={{ fontWeight: 600 }}>
              secretary@heyfordparkfootballclub.co.uk →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
