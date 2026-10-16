import { SERVICES } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap: Record<string, string> = {
  code: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  layout: "M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v4H7V7zm0 6h4v4H7v-4zm6 0h4v4h-4v-4z",
  refresh: "M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
  zap: "M7 2v11h3v9l7-12h-4l4-8z",
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I do"
          subtitle="End-to-end web development services tailored to your business needs."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative rounded-xl border border-border bg-surface-elevated p-6 md:p-8 hover:border-electric/40 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5"
            >
              {/* Editorial number */}
              <span className="absolute top-4 right-4 font-mono text-4xl font-bold text-border group-hover:text-electric/20 transition-colors">
                {service.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                <svg className="w-6 h-6 text-electric" fill="currentColor" viewBox="0 0 24 24">
                  <path d={iconMap[service.icon]} />
                </svg>
              </div>

              <h3 className="text-lg font-semibold font-mono text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
