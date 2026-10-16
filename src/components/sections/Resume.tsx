import { useState } from "react";
import { EXPERIENCE, EDUCATION, SKILLS, ABOUT_ME } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

const tabs = ["Experience", "Education", "Skills", "About me"] as const;
type Tab = (typeof tabs)[number];

function ExperiencePanel() {
  return (
    <div className="space-y-6">
      {EXPERIENCE.map((exp) => (
        <div
          key={exp.role}
          className="rounded-lg border border-border bg-surface-elevated p-5 hover:border-electric/30 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h4 className="font-semibold text-text-primary">{exp.role}</h4>
            <span className="font-mono text-xs text-electric">{exp.period}</span>
          </div>
          <p className="text-sm text-electric/80 mb-2">{exp.company}</p>
          <p className="text-sm text-text-secondary leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

function EducationPanel() {
  return (
    <div className="space-y-6">
      {EDUCATION.map((edu) => (
        <div
          key={edu.degree}
          className="rounded-lg border border-border bg-surface-elevated p-5 hover:border-electric/30 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h4 className="font-semibold text-text-primary">{edu.degree}</h4>
            <span className="font-mono text-xs text-electric">{edu.period}</span>
          </div>
          <p className="text-sm text-electric/80 mb-2">{edu.school}</p>
          <p className="text-sm text-text-secondary leading-relaxed">{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

function SkillsPanel() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILLS.map((group) => (
        <div
          key={group.category}
          className="rounded-lg border border-border bg-surface-elevated p-5"
        >
          <h4 className="font-mono text-sm font-semibold text-electric mb-3">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md bg-surface-hover border border-border text-xs text-text-secondary font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="rounded-lg border border-border bg-surface-elevated p-6 space-y-4">
      {ABOUT_ME.map((paragraph, i) => (
        <p key={i} className="text-sm text-text-secondary leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

const panelMap: Record<Tab, () => React.ReactNode> = {
  Experience: () => <ExperiencePanel />,
  Education: () => <EducationPanel />,
  Skills: () => <SkillsPanel />,
  "About me": () => <AboutPanel />,
};

export function Resume() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <section id="resume" className="py-20 md:py-28 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Resume"
          title="My background"
          subtitle="A snapshot of my experience, skills, and education."
        />

        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          {/* Vertical tabs */}
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all text-left ${
                  activeTab === tab
                    ? "bg-electric/10 text-electric border border-electric/30"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated border border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Panel content */}
          <div className="min-h-[300px]">
            {panelMap[activeTab]()}
          </div>
        </div>
      </div>
    </section>
  );
}
