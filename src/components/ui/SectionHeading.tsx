interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="font-mono text-sm text-electric tracking-wider uppercase">
        {label}
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary max-w-2xl text-base md:text-lg">{subtitle}</p>
      )}
      <div className="mt-6 h-px w-20 bg-electric" />
    </div>
  );
}
