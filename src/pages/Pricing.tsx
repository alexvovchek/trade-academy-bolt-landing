import { Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import { plans, TELEGRAM_URL } from '../data';
import { SectionHeading } from '../components/SectionHeading';

const tiers = [
  { tag: 'Free start', desc: 'Begin your Price Action journey — no card, no token, forever free.' },
  { tag: 'Full Academy', desc: 'The complete curriculum: all theory, missions, chart practice and exams.' },
  { tag: 'AI Mentor', desc: 'Everything in Full Academy plus unlimited AI mentor sessions and mock exams.' },
  { tag: 'Partner plan', desc: 'For channels & educators: co-branded missions, ad placements and analytics.' },
];

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Start free. Upgrade when you're ready."
        subtitle="Simple, transparent plans. Prices shown are placeholders — final pricing is set inside the Telegram Mini App."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => {
              const featured = p.featured;
              const accentRing =
                p.accent === 'gold'
                  ? 'hover:border-gold-500/40'
                  : p.accent === 'wine'
                  ? 'hover:border-wine-400/40'
                  : 'hover:border-white/15';

              return (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-2xl border p-6 shadow-card transition-all duration-300 hover:-translate-y-1 ${
                    featured
                      ? 'border-gold-500/40 bg-gradient-to-b from-gold-500/[0.08] to-ink-850/80 shadow-glow'
                      : `border-white/5 bg-ink-850/70 ${accentRing}`
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{p.tagline}</p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span
                      className={`font-display text-3xl font-extrabold ${
                        p.accent === 'wine' ? 'text-wine-200' : p.accent === 'gold' ? 'gradient-text-gold' : 'text-white'
                      }`}
                    >
                      {p.price}
                    </span>
                    {p.period && <span className="text-sm text-zinc-500">{p.period}</span>}
                  </div>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            p.accent === 'wine' ? 'text-wine-300' : 'text-gold-400'
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                      featured
                        ? 'btn-gold'
                        : p.accent === 'wine'
                        ? 'btn-wine'
                        : 'btn-ghost'
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-zinc-600">
            Placeholder pricing for demonstration. No payment is processed on this site.
          </p>
        </div>
      </section>

      {/* Tier summary */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Which plan fits you"
            title="Four plans, one learning platform"
            subtitle="From your first lesson to a co-branded partner integration — there's a tier for every stage."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.tag}
                className="rounded-2xl border border-white/5 bg-ink-850/70 p-5 shadow-card"
              >
                <span className="rounded-md bg-gold-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                  {t.tag}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Pick your plan in Telegram"
        subtitle="Open the bot to start free, or unlock Full Academy and AI Mentor from inside the Mini App."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
