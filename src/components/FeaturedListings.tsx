import { listings } from "../data/siteData";
import { PropertyCard } from "./PropertyCard";

export function FeaturedListings() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" id="properties">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-action">
            Premium Selection
          </span>
          <h2 className="mt-2 font-headline-md text-headline-md text-sidebar-bg">
            Featured Listings
          </h2>
        </div>
        <a
          className="flex items-center gap-2 font-title-sm text-primary-action hover:underline"
          href="#properties"
        >
          View All Properties
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <PropertyCard key={listing.title} listing={listing} />
        ))}
      </div>
    </section>
  );
}
