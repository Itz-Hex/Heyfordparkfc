import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { news, formatDate } from "../data/news";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewsStrip() {
  const items = news.slice(0, 3);
  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>LATEST NEWS</div>
            <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              From the touchline.
            </h2>
            <p className="mt-3 text-neutral-600">Match reports, club news, and updates from around HPFC.</p>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors text-sm" style={{ fontWeight: 600 }}>
            All news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((a) => (
            <Link
              key={a.slug}
              to={`/news/${a.slug}`}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="px-2 py-0.5 rounded-full bg-[#AFDC1C]/20 text-[#4d6608]" style={{ fontWeight: 600 }}>
                    {a.category}
                  </span>
                  <span>{formatDate(a.date)}</span>
                </div>
                <h3 className="mt-3 text-neutral-900" style={{ fontSize: "1.125rem", fontWeight: 700, lineHeight: 1.25 }}>
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 flex-1">{a.excerpt}</p>
                <div className="mt-4 text-sm text-neutral-700 group-hover:text-neutral-900 flex items-center gap-1.5" style={{ fontWeight: 600 }}>
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
