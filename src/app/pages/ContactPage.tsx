import { usePage } from "../../sanity/hooks";
import { Blocks } from "../components/blocks/Blocks";
import { PageSkeleton } from "../components/blocks/PageSkeleton";

export function ContactPage() {
  const { data: page, loading } = usePage("contact");
  if (loading) return <PageSkeleton />;
  return <Blocks blocks={page?.blocks ?? []} />;
}
