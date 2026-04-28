import { teamImage } from "../assets/pageAssets";
import { stats } from "../data/siteData";

export function WhyChooseUs() {
  return (
    <section
      className="mx-auto max-w-7xl overflow-hidden px-6 py-24"
      id="about"
    >
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-action">
            The Advantage
          </span>
          <h2 className="mb-6 mt-2 font-display-lg text-display-lg text-sidebar-bg">
            Why Partner With Us?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-outline">
            We combine deep market knowledge with a client-first approach,
            ensuring that every transaction is smooth, transparent, and
            profitable.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 font-display-lg text-display-lg text-primary-action">
                  {stat.value}
                </div>
                <div className="font-label-caps text-label-caps text-outline">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface-medium">
            <img
              alt="Professional real estate team reviewing property portfolios"
              className="h-full w-full object-cover"
              src={teamImage}
            />
            <div className="absolute inset-0 bg-primary-container/20" />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-60 rounded-2xl border border-border-subtle bg-white p-6 shadow-xl">
            <p className="font-body-sm text-body-sm italic text-sidebar-bg">
              "The people at Aditya Estate Consultants transformed our selling
              experience. Their professionalism is unmatched."
            </p>
            <p className="mt-4 font-bold text-primary-action">
              - Mr. Mukesh Ambani
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
