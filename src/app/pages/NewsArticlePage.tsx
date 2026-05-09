import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, User, Calendar, Tag } from "lucide-react";
import { getArticle, news, formatDate } from "../data/news";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { NotFound } from "./NotFound";

export function NewsArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <NotFound />;

  const others = news.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/50 to-neutral-900/95" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
          <Link to="/news" className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> All news
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-200">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#AFDC1C]/20 text-[#AFDC1C]" style={{ fontWeight: 600 }}>
              <Tag className="w-3.5 h-3.5" /> {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {formatDate(article.date)}</span>
            <span className="inline-flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {article.author}</span>
          </div>
          <h1 className="mt-5 text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-neutral-200">{article.excerpt}</p>
        </div>
      </section>

      <article className="bg-white pt-16 lg:pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-5 text-neutral-800 text-lg leading-relaxed">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-5 lg:px-8 mt-10 pt-8 border-t border-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-neutral-500">
              Written by <span className="text-neutral-900" style={{ fontWeight: 600 }}>{article.author}</span> · {formatDate(article.date)}
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-[#6b8a0a]" style={{ fontWeight: 600 }}>
              Back to news <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-sm text-[#6b8a0a] mb-3" style={{ fontWeight: 600 }}>KEEP READING</div>
          <h2 className="text-neutral-900 mb-8" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.1 }}>
            More from HPFC
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((a) => (
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
                  <div className="text-xs text-neutral-500">{formatDate(a.date)}</div>
                  <h3 className="mt-2 text-neutral-900" style={{ fontSize: "1.125rem", fontWeight: 700, lineHeight: 1.25 }}>
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
