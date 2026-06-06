import { useSanityQuery } from "../../../sanity/hooks";
import { resolveImage } from "../../../sanity/client";

const ALL_COMMITTEE_QUERY = `*[_type == "committeeMember"] | order(order asc) { _id, name, role, email, photo, order }`;

export function CommitteeBlock({ block }: { block: any }) {
  const provided: any[] = block?.members || [];
  const needsFetch = provided.length === 0;
  const { data } = useSanityQuery<any[]>(needsFetch ? ALL_COMMITTEE_QUERY : `[]`, {}, [needsFetch]);
  const members = provided.length > 0 ? provided : (data || []);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {(block?.eyebrow || block?.title) && (
          <div className="max-w-2xl mb-8">
            {block?.eyebrow && <div className="text-sm text-[#6b8a0a]" style={{ fontWeight: 600 }}>{block.eyebrow}</div>}
            {block?.title && (
              <h2 className="mt-1 text-neutral-900" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {block.title}
              </h2>
            )}
            {block?.body && <p className="mt-3 text-neutral-600">{block.body}</p>}
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {members.map((c) => {
            const photo = resolveImage(c.photo, 120);
            const initials = (c.name || "").split(" ").map((n: string) => n[0]).join("");
            return (
              <div key={c._id} className="p-5 rounded-2xl border border-neutral-200 flex items-center gap-4">
                {photo ? (
                  <img src={photo} alt={c.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AFDC1C] to-[#9bc718] flex items-center justify-center text-neutral-900 shrink-0" style={{ fontWeight: 700 }}>
                    {initials}
                  </div>
                )}
                <div>
                  {c.role && <div className="text-xs text-neutral-500 uppercase tracking-wide">{c.role}</div>}
                  {c.name && <div className="text-neutral-900" style={{ fontWeight: 600 }}>{c.name}</div>}
                  {c.email && <a href={`mailto:${c.email}`} className="text-xs text-[#6b8a0a]">{c.email}</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
