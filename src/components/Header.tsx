import { useEffect, useState } from "react";
import { navLinks } from "../data/siteData";
import aeLogo from "../assets/ae-logo.png";

export function Header() {
  const [activeSection, setActiveSection] = useState(navLinks[0].id);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-blue-50 bg-white shadow-[0_8px_30px_rgb(3,4,94,0.04)] backdrop-blur-sm">
      <div className="relative mx-4 flex items-center justify-between px-4 py-4 sm:mx-6 lg:mx-8">
        <div className="flex min-w-0 items-center justify-start gap-3 ">
          <img
            src={aeLogo}
            className="h-10 w-10 shrink-0 object-contain"
            alt="Aditya Estate Consultants"
          />
          <a
            className="whitespace-nowrap text-lg font-bold tracking-tight text-blue-900 md:block md:text-xl xl:text-2xl"
            href="#home"
          >
            Aditya Estate Consultants
          </a>
        </div>
        <div className="absolute left-1/2 hidden -translate-x-1/2  md:block">
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                className={
                  activeSection === link.id
                    ? "border-b-2 border-blue-700 pb-1 font-body-base font-semibold text-blue-700"
                    : "font-body-base text-slate-600 transition-colors hover:text-blue-600"
                }
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="">
          <a
            className="rounded-lg bg-primary-action px-6 py-2.5 font-title-sm text-white transition-all duration-200 hover:bg-hover-state active:scale-95"
            href="#contact"
          >
            Schedule Visit
          </a>
        </div>
      </div>
    </header>
  );
}
