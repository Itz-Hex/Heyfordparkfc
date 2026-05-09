import { MapPin, Car, Navigation, Info } from "lucide-react";

const venues = [
  {
    name: "Heyford Park",
    address: "Heyford Park School Specialisms Campus, Izzard Road, Heyford Park, Oxfordshire, OX26 5AB",
    directionsUrl: "https://maps.google.com/?q=Heyford+Park+School+Specialisms+Campus+Izzard+Road+OX26+5AB",
    parking: "TBC",
    note: "TBC",
  },
  {
    name: "Fritwell Field",
    address: "Fewcott Road, Fritwell, Bicester, Oxfordshire, OX27 7QA",
    directionsUrl: "https://maps.google.com/?q=Fewcott+Road+Fritwell+Bicester+OX27+7QA",
    parking: "TBC",
    note: "TBC",
  },
  {
    name: "Tackley Pitch",
    address: "Tackley, Oxfordshire",
    directionsUrl: "https://maps.app.goo.gl/d7tt8aUGPcZkZFij8",
    parking: "TBC",
    note: "TBC",
  },
];

export function Locations() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm text-blue-700 mb-3" style={{ fontWeight: 600 }}>OUR LOCATIONS</div>
          <h2 className="text-neutral-900" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Find us on match day.
          </h2>
          <p className="mt-3 text-neutral-600 text-lg">Tap any address to open it in your maps app.</p>
        </div>

        <p className="mt-3 text-neutral-600">
          Teams aren't tied to a single ground — pitches are allocated week by week, so always check your team's WhatsApp group for the venue.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {venues.map((v) => (
            <div key={v.name} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
              <div className="aspect-[16/9] bg-neutral-100 relative overflow-hidden">
                <iframe
                  title={v.name}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(v.address)}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{v.name}</h3>
                <a
                  href={v.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-start gap-2 text-neutral-700 hover:text-blue-700"
                >
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>{v.address}</span>
                </a>

                <div className="mt-3 flex items-start gap-2 text-neutral-700">
                  <Car className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>{v.parking}</span>
                </div>
                <div className="mt-3 flex items-start gap-2 text-neutral-700">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>{v.note}</span>
                </div>

                <a
                  href={v.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  <Navigation className="w-4 h-4" /> Get directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
