import * as LucideIcons from "lucide-react";

export function Icon({ name, className }: { name?: string; className?: string }) {
  if (!name) return null;
  const Cmp = (LucideIcons as any)[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
