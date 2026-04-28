import { services } from "../data/siteData";

export function ServicesSection() {
  return (
    <section
      className="flex min-h-[calc(100svh-4rem)] items-center bg-surface-light py-14 md:py-16"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-action">
            Expertise
          </span>
          <h2 className="mt-2 font-headline-md text-headline-md text-sidebar-bg">
            Professional Real Estate Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              className="rounded-xl border border-border-subtle bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              key={service.title}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-medium">
                <span
                  className="material-symbols-outlined text-2xl text-sidebar-bg"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="mb-4 font-title-sm text-title-sm text-sidebar-bg">
                {service.title}
              </h3>
              <p className="leading-relaxed text-outline">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
