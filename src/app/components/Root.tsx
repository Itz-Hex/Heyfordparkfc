import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
