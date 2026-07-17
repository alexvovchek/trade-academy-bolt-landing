type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 section-title text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 text-balance">{subtitle}</p>
      )}
    </div>
  );
}
