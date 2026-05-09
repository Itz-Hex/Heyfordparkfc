import { Link } from "react-router";
import { Home as HomeIcon } from "lucide-react";

export function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-neutral-900 text-white">
      <div className="max-w-xl px-5 text-center">
        <div className="text-[#AFDC1C]" style={{ fontSize: "5rem", fontWeight: 800, lineHeight: 1 }}>404</div>
        <h1 className="mt-4 text-white" style={{ fontSize: "2rem", fontWeight: 700 }}>That page took a wrong turn.</h1>
        <p className="mt-3 text-neutral-300">The link might be old, or the page may have moved. Let's get you back to the game.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AFDC1C] hover:bg-[#9bc718] text-neutral-900 transition-colors" style={{ fontWeight: 700 }}>
          <HomeIcon className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
