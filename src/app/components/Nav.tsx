import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NavLink, Link } from "react-router";

const items = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About HPFC" },
  { to: "/teams", label: "Teams" },
  { to: "/news", label: "News" },
  { to: "/join", label: "Join Us", accent: true },
  { to: "/locations", label: "Our Locations" },
  { to: "/club-info", label: "Club Info" },
  { to: "/contact", label: "Contact Us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#AFDC1C] flex items-center justify-center">
            <span className="text-neutral-900" style={{ fontWeight: 700 }}>H</span>
          </div>
          <div className="hidden sm:block leading-tight text-left">
            <div style={{ fontWeight: 700 }} className="text-neutral-900">Heyford Park FC</div>
            <div className="text-xs text-neutral-500">Boys & Girls · Ages 4–16</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm transition-colors ${
                  item.accent
                    ? `text-neutral-900 hover:bg-[#AFDC1C]/20 ${isActive ? "bg-[#AFDC1C]/30" : ""}`
                    : `text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 ${isActive ? "bg-neutral-100 text-neutral-900" : ""}`
                }`
              }
              style={item.accent ? { fontWeight: 600 } : undefined}
            >
              {item.accent && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#AFDC1C] mr-1.5 align-middle" />}
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://www.kitlocker.com/heyfordparkfc"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-neutral-900 text-sm flex items-center gap-1.5 transition-colors"
            style={{ fontWeight: 600 }}
          >
            <ShoppingBag className="w-4 h-4" />
            Club Shop
          </a>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-5 py-3 flex flex-col">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className="text-left py-2.5 text-neutral-800 border-b border-neutral-100 last:border-0"
              >
                {item.accent && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#AFDC1C] mr-2 align-middle" />}
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://www.kitlocker.com/heyfordparkfc"
              target="_blank"
              rel="noreferrer"
              className="mt-3 mb-2 px-4 py-3 rounded-full bg-amber-400 text-neutral-900 text-center"
              style={{ fontWeight: 600 }}
            >
              Club Shop ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
