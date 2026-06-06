import { MapPin, Car, Navigation, Info } from "lucide-react";

export function LocationsBlock({ block }: { block: any }) {
  const venues: any[] = block?.locations || [];
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          {block?.eyebrow && <div className="text-sm text-blue-700 mb-3" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
          {block?.title && (
            <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {block.title}
            </h2>
          )}
          {block?.body && <p className="mt-3 text-neutral-600 text-lg">{block.body}</p>}
        </div>

        {venues.length > 0 && (
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {venues.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                <div className="aspect-[16/9] bg-neutral-100 relative overflow-hidden">
                  <iframe
                    title={v.name}
                    src={v.mapEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(v.address || v.name || "")}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  {v.name && <h3 className="text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{v.name}</h3>}
                  {v.address && (
                    <a href={v.directionsUrl || `https://maps.google.com/?q=${encodeURIComponent(v.address)}`} target="_blank" rel="noreferrer" className="mt-2 flex items-start gap-2 text-neutral-700 hover:text-blue-700">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{v.address}</span>
                    </a>
                  )}
                  {v.parking && (
                    <div className="mt-3 flex items-start gap-2 text-neutral-700">
                      <Car className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{v.parking}</span>
                    </div>
                  )}
                  {v.note && (
                    <div className="mt-3 flex items-start gap-2 text-neutral-700">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{v.note}</span>
                    </div>
                  )}
                  {v.directionsUrl && (
                    <a href={v.directionsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors" style={{ fontWeight: 600 }}>
                      <Navigation className="w-4 h-4" /> Get directions
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
