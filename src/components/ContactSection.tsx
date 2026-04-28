import { socialLinks } from "../data/siteData";

export function ContactSection() {
  return (
    <section
      className="flex min-h-[calc(100svh-4rem)] items-center bg-sidebar-bg py-8 md:py-10"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
          <div className="flex-1 p-6 sm:p-8 md:p-10">
            <h2 className="mb-2 font-display-lg text-display-lg text-sidebar-bg">
              Get In Touch
            </h2>
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-outline md:text-body-base">
              Our agents are ready to help you navigate your real estate
              journey. Send us a message and we&apos;ll respond within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  id="name"
                  label="Full Name"
                  placeholder="Ranveer Singh"
                  type="text"
                />
                <FormField
                  id="email"
                  label="Email Address"
                  placeholder="ranveer@example.com"
                  type="email"
                />
              </div>
              <FormField
                id="phone"
                label="Phone Number"
                placeholder="+91 9123456789"
                type="tel"
              />

              <div className="space-y-1.5">
                <label
                  className="font-label-caps text-label-caps text-sidebar-bg"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full rounded-lg border-border-subtle py-2.5 text-sm focus:border-primary-action focus:ring-primary-action/20"
                  id="message"
                  placeholder="How can we help you?"
                  rows={3}
                />
              </div>

              <button
                className="w-full rounded-lg bg-primary-action px-8 py-3 font-title-sm text-white transition-all hover:bg-hover-state md:w-auto"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>

          <aside className="flex w-full flex-col justify-center bg-surface-light p-6 sm:p-8 md:w-80 md:p-10">
            <div className="space-y-6">
              <ContactBlock
                title="Office Headquarters"
                lines={[
                  "Shop No.05, Hari Vihar CHS",
                  "Sector-10, New Panvel (E)",
                  "Panvel, 410206",
                ]}
              />
              <ContactBlock
                title="Contact Details"
                lines={[
                  "info@adityaestateconsultants.in",
                  "+91 9322689377",
                  "+91 9082442352",
                ]}
              />
              <div className="border-t border-border-subtle pt-5">
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      aria-label={link.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-bg text-white"
                      href={link.href}
                      key={link.label}
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        aria-hidden="true"
                      >
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

function FormField({ id, label, placeholder, type }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label
        className="font-label-caps text-label-caps text-sidebar-bg"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full rounded-lg border-border-subtle py-2.5 text-sm focus:border-primary-action focus:ring-primary-action/20"
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

type ContactBlockProps = {
  title: string;
  lines: string[];
};

function ContactBlock({ title, lines }: ContactBlockProps) {
  return (
    <div>
      <h4 className="mb-1.5 font-title-sm text-title-sm text-sidebar-bg">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-outline">
        {lines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
