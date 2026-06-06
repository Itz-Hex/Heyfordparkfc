export function PageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-neutral-100 h-64 lg:h-80" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 space-y-6">
        <div className="h-8 w-2/3 bg-neutral-100 rounded" />
        <div className="h-4 w-1/2 bg-neutral-100 rounded" />
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="h-40 bg-neutral-100 rounded-2xl" />
          <div className="h-40 bg-neutral-100 rounded-2xl" />
          <div className="h-40 bg-neutral-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
