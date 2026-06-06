import { useEffect, useState } from "react";
import { client } from "./client";

export function useSanityQuery<T>(query: string, params: Record<string, any> = {}, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    client
      .fetch<T>(query, params)
      .then((res) => {
        if (!cancelled) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  _id, slug, title, sections
}`;

export function usePage(slug: string) {
  return useSanityQuery<any>(PAGE_QUERY, { slug }, [slug]);
}

export function getPageSection(
  page: { sections?: Array<{ key?: string; heading?: string; body?: any }> } | null,
  key: string
) {
  if (!page?.sections) return null;
  return page.sections.find((s) => s.key === key) || null;
}
