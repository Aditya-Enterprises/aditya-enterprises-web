import aeLogo from "./assets/ae-logo.png";

function App() {
  return (
    <div className="login-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-md py-xl font-body-base text-on-surface">
      <main className="w-full max-w-110">
        <section className="card-shadow flex flex-col gap-lg rounded-xl border border-border-subtle bg-surface-container-lowest p-lg sm:p-xl">
          <div className="flex flex-col items-center gap-sm">
            <div className="mb-sm flex h-15 w-15 items-center justify-center rounded-lg">
              <img
                className="h-full w-full object-contain"
                src={aeLogo}
                alt="Aditya Enterprises"
              />
            </div>
            <h1 className="font-headline-md text-headline-md text-sidebar-bg">
              Aditya Enterprises
            </h1>
            <p className="font-body-sm text-body-sm text-outline">
              Professional Real Estate Management
            </p>
          </div>

          <form className="flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <label
                className="px-1 font-label-caps text-label-caps text-on-surface-variant"
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <span
                  className="material-symbols-outlined absolute left-3 top-1/2 text-lg text-outline -translate-y-1/2"
                  aria-hidden="true"
                >
                  mail
                </span>
                <input
                  className="w-full rounded-lg border border-border-subtle bg-white py-3 pl-10 pr-4 text-body-sm transition-all focus:border-primary-action focus:outline-none focus:ring-2 focus:ring-primary-action/20"
                  id="email"
                  name="email"
                  placeholder="agent@adityaenterprises.in"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-xs">
              <div className="flex items-center justify-between gap-md px-1">
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <a
                  className="font-body-sm text-body-sm text-primary-action transition-colors hover:text-hover-state"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <span
                  className="material-symbols-outlined absolute left-3 top-1/2 text-lg text-outline -translate-y-1/2"
                  aria-hidden="true"
                >
                  lock
                </span>
                <input
                  className="w-full rounded-lg border border-border-subtle bg-white py-3 pl-10 pr-4 text-body-sm transition-all focus:border-primary-action focus:outline-none focus:ring-2 focus:ring-primary-action/20"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              className="group mt-sm flex w-full items-center justify-center gap-sm rounded-lg bg-sidebar-bg py-4 font-title-sm text-title-sm text-white shadow-md transition-all hover:bg-primary-action active:scale-[0.98]"
              type="submit"
            >
              Sign In
              <span
                className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </button>
          </form>

          <div className="border-t border-surface-container-high pt-sm text-center">
            <p className="font-body-sm text-body-sm text-outline">
              Don&apos;t have an account?{" "}
              <a
                className="font-semibold text-secondary hover:underline"
                href="#"
              >
                Contact your admin
              </a>
            </p>
          </div>
        </section>

        <footer className="mt-lg flex flex-col items-center gap-sm text-center">
          <div className="flex flex-wrap justify-center gap-md">
            <a
              className="font-label-caps text-label-caps text-outline transition-colors hover:text-sidebar-bg"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-label-caps text-label-caps text-outline transition-colors hover:text-sidebar-bg"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-label-caps text-label-caps text-outline transition-colors hover:text-sidebar-bg"
              href="#"
            >
              Support
            </a>
          </div>
          <p className="font-label-caps text-[10px] uppercase tracking-widest text-outline/60">
            © 2026 Aditya Enterprises. All rights reserved.
          </p>
        </footer>
      </main>

      <div className="fixed right-[-5%] top-[-10%] z-[-1] h-100 w-100 rounded-full bg-surface-medium/20 blur-[100px]" />
      <div className="fixed bottom-[-10%] left-[-5%] z-[-1] h-75 w-75 rounded-full bg-accent-highlight/10 blur-[80px]" />
    </div>
  );
}

export default App;
