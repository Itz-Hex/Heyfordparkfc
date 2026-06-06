import { usePage } from "../../sanity/hooks";
import { Blocks } from "../components/blocks/Blocks";
import { PageSkeleton } from "../components/blocks/PageSkeleton";

export function TeamsPage() {
  const { data: page, loading } = usePage("teams");
  if (loading) return <PageSkeleton />;
  return <Blocks blocks={page?.blocks ?? []} />;
}
