import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { news, formatDate } from "../data/news";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NewsPage() {
  const [featured, ...rest] = news;
  return (
    <>
      <PageHero
        eyebrow="NEWS"
        title="From the touchline."
        description="Match reports, club news, and updates from around Heyford Park FC."
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Link
            to={`/news/${featured.slug}`}
            className="group block rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all bg-white"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="px-2 py-0.5 rounded-full bg-[#AFDC1C]/20 text-[#4d6608]" style={{ fontWeight: 600 }}>
                    {featured.category}
                  </span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <h2 className="mt-4 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h2>
                <p className="mt-4 text-neutral-600 text-lg">{featured.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-neutral-900" style={{ fontWeight: 600 }}>
                  Read full article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>MORE STORIES</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((a) => (
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
