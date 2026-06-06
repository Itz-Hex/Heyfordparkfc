import { ImageWithFallback } from "../figma/ImageWithFallback";
import { resolveImage } from "../../../sanity/client";

export function GalleryBlock({ block }: { block: any }) {
  const images: any[] = block?.images || [];
  if (images.length === 0) return null;
  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title || block?.body) && (
          <div className="max-w-3xl mb-10">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-2 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.body && <p className="mt-3 text-neutral-600">{block.body}</p>}
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((img, i) => {
            const url = resolveImage(img, 1200);
            return (
              <div key={i} className={`overflow-hidden rounded-2xl bg-neutral-200 ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/3]"}`}>
                <ImageWithFallback src={url} alt={img.alt || ""} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
