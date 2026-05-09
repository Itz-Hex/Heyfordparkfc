export function Footer() {
  const sponsors = ["Acme Corporation", "Acme Corporation", "Acme Corporation", "Acme Corporation"];
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="text-sm text-neutral-500 uppercase tracking-wide mb-4">Our sponsors</div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
          {sponsors.map((s) => (
            <div key={s} className="text-neutral-400" style={{ fontWeight: 600 }}>{s}</div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 grid sm:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#AFDC1C] flex items-center justify-center text-neutral-900" style={{ fontWeight: 800 }}>H</div>
            <div>
              <div className="text-white" style={{ fontWeight: 700 }}>Heyford Park FC</div>
              <div className="text-xs text-neutral-500">FA Accredited · Est. 2019</div>
            </div>
          </div>
          <div className="text-sm text-neutral-500 sm:text-center">
            © 2026 Heyford Park Football Club
          </div>
          <div className="sm:text-right text-sm text-neutral-500">
            Built with care for our players & families.
          </div>
        </div>
      </div>
    </footer>
  );
}
