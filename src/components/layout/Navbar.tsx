import { useState } from "react";
import { NAV_LINKS } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";

const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-electric/10 border border-electric/30 flex items-center justify-center">
              <span className="font-mono text-electric font-bold text-sm">MC</span>
            </div>
            <span className="font-mono font-semibold text-text-primary hidden sm:block">
              manuelscl<span className="text-electric">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-electric bg-electric/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Availability + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-electric text-white text-sm font-semibold hover:bg-electric-dim transition-colors"
            >
              Hire me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-electric bg-electric/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 rounded-lg bg-electric text-white text-sm font-semibold text-center hover:bg-electric-dim transition-colors"
              >
                Hire me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
