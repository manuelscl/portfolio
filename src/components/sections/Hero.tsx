import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTailwindCss, faReact, faGitAlt, faTypescript } from "@fortawesome/free-brands-svg-icons";

const techIcons = [
  { icon: faTailwindCss, label: "Tailwind", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { icon: faReact, label: "React", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { icon: faGitAlt, label: "Git", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { icon: faTypescript, label: "TypeScript", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-electric/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-electric text-sm tracking-wider">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-text-primary leading-tight">
                Manuel Cárdenas
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-semibold text-text-muted leading-tight">
                Frontend developer.
              </h2>
            </div>

            <p className="text-text-secondary text-base md:text-lg max-w-lg leading-relaxed">
              Building web applications with React, JavaScript, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-6 py-3 rounded-lg bg-electric text-white font-semibold text-sm hover:bg-electric-dim transition-colors shadow-lg shadow-electric/20"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border text-text-primary font-semibold text-sm hover:border-electric/50 hover:text-electric transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: Profile photo with floating tech icons */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-hover flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-40 h-40 mx-auto rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center">
                      <span className="font-mono text-electric text-2xl font-bold">MC</span>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Floating tech icons — translate outward on hover */}
              {techIcons.map((icon) => (
                <div
                  key={icon.label}
                  className={`absolute ${icon.position} group`}
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:border-electric/50 group-hover:shadow-electric/10">
                    <FontAwesomeIcon icon={icon.icon} className="w-5 h-5 text-text-muted group-hover:text-electric transition-colors" />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {icon.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
