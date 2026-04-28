import { footerLinks } from "../data/siteData";

export function Footer() {
  return (
    <footer className="w-full border-t border-blue-100 bg-slate-50 py-6 md:py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:gap-6">
        <div className="flex w-full flex-col gap-1 md:min-w-105">
          <div className="text-lg font-bold text-blue-900">
            Aditya Estate Consultants
          </div>
          <p className="max-w-130 font-body-sm text-xs leading-snug text-blue-900/70 md:text-sm">
            (c) 2026 Aditya Estate Consultants. Professional Real Estate
            Management.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {footerLinks.map((link) => (
            <a
              className="text-xs text-slate-500 transition-all hover:text-blue-600 md:text-sm"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {["language", "help"].map((icon) => (
            <button
              aria-label={icon === "language" ? "Language" : "Help"}
              className="text-slate-400 transition-colors hover:text-primary-action"
              key={icon}
              type="button"
            >
              <span
                className="material-symbols-outlined text-xl"
                aria-hidden="true"
              >
                {icon}
              </span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
