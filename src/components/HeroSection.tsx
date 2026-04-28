export function HeroSection() {
  return (
    <section
      className="relative flex h-180 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#03045e_0%,#0077b6_48%,#00b4d8_100%)] text-white"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(202,240,248,0.38),transparent_30%),radial-gradient(circle_at_80%_72%,rgba(173,232,244,0.28),transparent_32%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 font-display-lg text-display-lg leading-tight md:text-6xl">
          Find Your Dream Home with Aditya Estate Consultants
        </h1>
        <p className="mb-10 text-lg text-white/90">
          Experience the pinnacle of luxury living with our curated portfolio of
          exclusive properties and professional brokerage services.
        </p>

        <form className="mx-auto flex max-w-3xl flex-col gap-2 rounded-xl bg-white p-2 shadow-2xl md:flex-row">
          <label className="flex flex-1 items-center border-b border-outline-variant px-4 md:border-b-0 md:border-r">
            <span
              className="material-symbols-outlined mr-2 text-outline"
              aria-hidden="true"
            >
              search
            </span>
            <input
              className="w-full border-none py-3 text-on-surface focus:ring-0"
              placeholder="Location, Neighborhood"
              type="text"
            />
          </label>

          <label className="flex flex-1 items-center px-4">
            <span
              className="material-symbols-outlined mr-2 text-outline"
              aria-hidden="true"
            >
              home
            </span>
            <select
              className="w-full appearance-none border-none bg-transparent py-3 text-on-surface focus:ring-0"
              defaultValue=""
            >
              <option value="" disabled>
                Property Type
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Luxury Villa</option>
            </select>
          </label>

          <button
            className="whitespace-nowrap rounded-lg bg-primary-action px-8 py-3 font-title-sm text-white transition-all hover:bg-hover-state"
            type="submit"
          >
            Search Now
          </button>
        </form>
      </div>
    </section>
  );
}
