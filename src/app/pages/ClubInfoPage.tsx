import { usePage } from "../../sanity/hooks";
import { Blocks } from "../components/blocks/Blocks";
import { PageSkeleton } from "../components/blocks/PageSkeleton";

export function ClubInfoPage() {
  const { data: page, loading } = usePage("club-info");
  if (loading) return <PageSkeleton />;
  return <Blocks blocks={page?.blocks ?? []} />;
}
