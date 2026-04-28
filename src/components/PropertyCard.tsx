import type { Listing } from "../data/siteData";

type PropertyCardProps = {
  listing: Listing;
};

export function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border-subtle bg-white shadow-[0_8px_30px_rgb(3,4,94,0.08)]">
      <div className="relative h-64 overflow-hidden">
        <img
          alt={listing.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={listing.image}
        />
        <div
          className={`absolute left-4 top-4 rounded px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${listing.statusColor}`}
        >
          {listing.status}
        </div>
        <div className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">
          {listing.price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 font-title-sm text-title-sm text-sidebar-bg">
          {listing.title}
        </h3>
        <p className="mb-4 flex items-center gap-1 text-sm text-outline">
          <span
            className="material-symbols-outlined text-xs"
            aria-hidden="true"
          >
            location_on
          </span>
          {listing.location}
        </p>
        <div className="flex justify-between border-t border-border-subtle pt-4 text-outline">
          {listing.features.map((feature) => (
            <div className="flex items-center gap-2" key={feature.label}>
              <span
                className="material-symbols-outlined text-primary-action"
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <span className="font-body-sm text-body-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
