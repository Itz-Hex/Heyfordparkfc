import { Link, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  accent = "#AFDC1C",
}: {
  eyebrow: string;
  title: string;
  description: string;
  accent?: string;
}) {
  const { pathname } = useLocation();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #AFDC1C 0px, transparent 40%), radial-gradient(circle at 80% 60%, #2563eb 0px, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <nav className="flex items-center gap-1.5 text-sm text-neutral-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-neutral-200 capitalize">{c.replace("-", " ")}</span>
            </span>
          ))}
        </nav>
        <div className="text-sm mb-3" style={{ color: accent, fontWeight: 600 }}>{eyebrow}</div>
        <h1 className="text-white max-w-4xl" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          {title}
        </h1>
        <p className="mt-5 text-lg text-neutral-300 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
