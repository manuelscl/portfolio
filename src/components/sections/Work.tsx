import { useState } from "react";
import { PROJECTS } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { MockupFrame } from "../ui/MockupFrame";

export function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = PROJECTS[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Work"
          title="Featured projects"
          subtitle="A selection of recent projects I've designed and developed."
        />

        <div className="relative group grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Details & Navigation */}
          <div className="space-y-6">
            {/* Outlined big number */}
            <span
              className="block font-mono text-7xl md:text-8xl font-bold leading-none select-none"
              style={{
                WebkitTextStroke: "2px var(--color-border-light)",
                color: "transparent",
              }}
            >
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            {/* Title & Description */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-text-primary">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-electric/10 border border-electric/20 text-electric text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Live Preview */}
              <a
                href={project.link}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-electric hover:border-electric/50 transition-colors"
                aria-label="Live Preview"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={project.link}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-electric hover:border-electric/50 transition-colors"
                aria-label="GitHub Repository"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Project Image Showcase */}
          <div className="relative">
            <div key={currentIndex} className="animate-fade-in">
              <MockupFrame variant={project.mockup} />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 -left-20 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#232329] border border-gray-800 text-[#0095FF] flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#0095FF] hover:text-white transition-all duration-200"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-20 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#232329] border border-gray-800 text-[#0095FF] flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#0095FF] hover:text-white transition-all duration-200"
            aria-label="Next project"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
