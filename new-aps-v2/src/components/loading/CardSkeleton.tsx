export default function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-[#ECE5DA] bg-white p-6">
      <div className="h-56 rounded-2xl bg-slate-200" />

      <div className="mt-6 h-6 w-3/4 rounded bg-slate-200" />

      <div className="mt-4 h-4 w-full rounded bg-slate-200" />

      <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />

      <div className="mt-6 h-10 w-36 rounded-full bg-slate-200" />
    </div>
  );
}