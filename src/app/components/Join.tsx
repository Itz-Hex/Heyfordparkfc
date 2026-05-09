import { useState } from "react";
import {
  CheckCircle2,
  MessageCircle,
  Mail,
} from "lucide-react";

const fees = [
  {
    label: "Rising Stars",
    value: "Free",
    note: "Free football for ages 4–7",
  },
  {
    label: "U7 – U11",
    value: "£TBC",
    note: "Per season",
  },
  {
    label: "U11 – U16",
    value: "£TBC",
    note: "Per season",
  },
];

const steps = [
  {
    n: 1,
    title: "Express interest",
    body: "Fill out the form below — takes 60 seconds.",
  },
  {
    n: 2,
    title: "We get in touch",
    body: "Your team's manager will email within 3 days.",
  },
  {
    n: 3,
    title: "Trial session",
    body: "Come along to a training session — no commitment.",
  },
  {
    n: 4,
    title: "Register",
    body: "If it's a fit, we'll get you signed up for the season.",
  },
];

export function Join() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div
            className="inline-block px-3 py-1 rounded-full bg-[#AFDC1C] text-neutral-900 text-sm mb-4"
            style={{ fontWeight: 700 }}
          >
            JOIN US
          </div>
          <h2
            className="text-neutral-900"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Join Heyford Park FC
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Everything you need to know before signing your
            child up.
          </p>
        </div>

        {/* 01 — Places */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <div>
            <div
              className="text-sm text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              01
            </div>
            <h3
              className="mt-1 text-neutral-900"
              style={{ fontSize: "1.5rem", fontWeight: 700 }}
            >
              A place for every child
            </h3>
          </div>
          <div className="lg:col-span-2 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <p className="text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "U7",
                "U8",
                "U9",
                "U10",
                "U11",
                "U12",
                "U13",
                "U14",
                "U15",
                "U16",
              ].map((a) => (
                <span
                  key={a}
                  className="px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-sm"
                >
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-5 p-4 rounded-xl bg-white border border-neutral-200">
              <div
                className="text-neutral-900"
                style={{ fontWeight: 700 }}
              >
                Team full? Join the waitlist.
              </div>
              <p className="text-sm text-neutral-600 mt-1">
                If your child's age group is at capacity, we'll
                add them to a waitlist and get in touch as soon
                as a place opens up.
              </p>
            </div>
            <a
              href="/teams"
              className="mt-5 inline-flex items-center gap-2 text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              See all teams →
            </a>
          </div>
        </div>

        {/* 02 — Training */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div>
            <div
              className="text-sm text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              02
            </div>
            <h3
              className="mt-1 text-neutral-900"
              style={{ fontSize: "1.5rem", fontWeight: 700 }}
            >
              When and where we train
            </h3>
          </div>
          <div className="lg:col-span-2 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <p className="text-neutral-700 mb-4">
              Teams train weekly through the season at one of
              two grounds. Match days are Saturdays (younger
              teams) and Sundays (older teams).
            </p>
            <div className="rounded-xl bg-white border border-neutral-200 p-4 text-sm grid grid-cols-3 gap-2">
              <div className="text-neutral-500">Day</div>
              <div className="text-neutral-500">Venue</div>
              <div className="text-neutral-500">Teams</div>
              <div className="border-t pt-2 col-span-3 grid grid-cols-3 gap-2 text-neutral-800">
                <div>TBC</div>
                <div>Heyford Park</div>
                <div>TBC</div>
              </div>
              <div className="border-t pt-2 col-span-3 grid grid-cols-3 gap-2 text-neutral-800">
                <div>TBC</div>
                <div>Fritwell Field</div>
                <div>TBC</div>
              </div>
            </div>
            <a
              href="/locations"
              className="mt-5 inline-flex items-center gap-2 text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              See full directions and parking →
            </a>
          </div>
        </div>

        {/* 03 — Cost */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div>
            <div
              className="text-sm text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              03
            </div>
            <h3
              className="mt-1 text-neutral-900"
              style={{ fontSize: "1.5rem", fontWeight: 700 }}
            >
              Cost &amp; fees
            </h3>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-3">
            {fees.map((f) => (
              <div
                key={f.label}
                className="p-5 rounded-2xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40"
              >
                <div className="text-xs text-neutral-600 uppercase tracking-wide">
                  {f.label}
                </div>
                <div
                  className="mt-1 text-neutral-900"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                  }}
                >
                  {f.value}
                </div>
                <div className="text-sm text-neutral-600 mt-1">
                  {f.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Q4 - steps */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div>
            <div
              className="text-sm text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              04
            </div>
            <h3
              className="mt-1 text-neutral-900"
              style={{ fontSize: "1.5rem", fontWeight: 700 }}
            >
              How to register
            </h3>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="p-5 rounded-2xl border border-neutral-200"
              >
                <div
                  className="w-8 h-8 rounded-full bg-neutral-900 text-[#AFDC1C] flex items-center justify-center"
                  style={{ fontWeight: 700 }}
                >
                  {s.n}
                </div>
                <div
                  className="mt-3 text-neutral-900"
                  style={{ fontWeight: 700 }}
                >
                  {s.title}
                </div>
                <div className="text-sm text-neutral-600 mt-1">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 p-8 rounded-3xl bg-neutral-900 text-white">
            <h3
              style={{ fontSize: "1.75rem", fontWeight: 700 }}
            >
              Register your interest
            </h3>
            <p className="text-neutral-300 mt-2">
              We'll be in touch within 3 days.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-start gap-3 p-5 rounded-xl bg-[#AFDC1C]/15 border border-[#AFDC1C]/40">
                <CheckCircle2 className="w-6 h-6 text-[#AFDC1C] shrink-0" />
                <div>
                  <div style={{ fontWeight: 700 }}>
                    Thanks — we've got it.
                  </div>
                  <div className="text-sm text-neutral-300 mt-1">
                    A team manager will be in touch within 3
                    days.
                  </div>
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
                  <Field
                    label="Child's date of birth"
                    type="date"
                  />
                </div>
                <Field
                  label="Anything we should know?"
                  textarea
                />
                <button
                  className="px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  Send registration
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div
              className="text-sm text-[#6b8a0a]"
              style={{ fontWeight: 600 }}
            >
              GET IN TOUCH
            </div>
            <h3
              className="text-neutral-900"
              style={{ fontSize: "1.5rem", fontWeight: 700 }}
            >
              Prefer a quick chat first?
            </h3>
            <p className="text-neutral-600">
              Drop us an email or message us on Facebook — we'll
              find the right team and answer anything else you
              need.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <ContactRow
                icon={Mail}
                label="join@heyfordparkfootballclub.co.uk"
                link="mailto:join@heyfordparkfootballclub.co.uk"
              />
              <ContactRow
                icon={MessageCircle}
                label="Message on Facebook"
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  textarea,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-neutral-300">{label}</span>
      {textarea ? (
        <textarea
          rows={3}
          className="mt-1 w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white outline-none focus:border-[#AFDC1C]"
        />
      ) : (
        <input
          type={type}
          className="mt-1 w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white outline-none focus:border-[#AFDC1C]"
        />
      )}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  sub,
  link,
}: {
  icon: any;
  label: string;
  sub?: string;
  link?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 hover:border-[#AFDC1C] hover:bg-[#AFDC1C]/5 transition-colors">
      <div className="w-10 h-10 rounded-full bg-[#AFDC1C]/20 text-[#6b8a0a] flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div
          className="text-neutral-900"
          style={{ fontWeight: 600 }}
        >
          {label}
        </div>
        {sub && (
          <div className="text-sm text-neutral-500">{sub}</div>
        )}
      </div>
    </div>
  );
  return link ? <a href={link}>{inner}</a> : inner;
}