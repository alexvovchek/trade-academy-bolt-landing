type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-radial-gold blur-2xl" />
        <div className="absolute right-0 top-10 h-[260px] w-[420px] rounded-full bg-radial-wine blur-2xl" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]" />
      </div>
      <div className="container-px py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow animate-pulseGlow">{eyebrow}</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 text-balance">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
