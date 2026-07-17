import { ArrowRight, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import { partnerFeatures, TELEGRAM_URL } from '../data';
import { SectionHeading } from '../components/SectionHeading';

const placements = [
  { tag: 'Course screen', desc: 'Sponsored lesson header', cta: 'Brand logo + tagline' },
  { tag: 'Mission transition', desc: 'Full-screen interstitial', cta: 'Video or static creative' },
  { tag: 'Exam results', desc: 'Celebration moment', cta: 'Co-branded badge' },
];

const requestSteps = [
  'Tell us about your channel, brand or community',
  'Pick a placement package or custom integration',
  'We build the creative and attribute your traffic',
];

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="Partners & Advertising"
        title="A premium channel for serious trading brands"
        subtitle="Trade Academy reaches an engaged, self-selecting audience of active traders — right inside Telegram. Integrate your brand, your content and your community."
      />

      {/* Partner features */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="What we offer"
            title="Native placements, creator integrations, Telegram traffic"
            subtitle="Reach traders where they already learn — inside the Mini App and across partner Telegram communities."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/20"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                </div>
              );
            })}
          </div>

          {/* placement showcase */}
          <div className="mt-8 grid gap-4 rounded-2xl border border-white/5 bg-ink-850/50 p-6 sm:grid-cols-3">
            {placements.map((p) => (
              <div key={p.tag} className="rounded-xl border border-white/5 bg-ink-900/60 p-4">
                <span className="rounded-md bg-gold-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                  {p.tag}
                </span>
                <p className="mt-3 text-sm font-medium text-zinc-200">{p.desc}</p>
                <p className="mt-1 text-xs text-zinc-500">{p.cta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner request CTA */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Become a partner"
                title="Request a partnership in three steps"
                subtitle="Whether you run a Telegram channel, a broker, or a trading education brand — we'll build an integration that fits your audience."
              />
              <div className="mt-8 space-y-3">
                {requestSteps.map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-ink-850/70 p-4 shadow-card"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-500/15 font-mono text-sm font-semibold text-gold-300">
                      {i + 1}
                    </span>
                    <span className="text-sm text-zinc-200">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-ink-850/90 to-ink-900/90 p-8 shadow-glow sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/10 blur-2xl" />
              <h3 className="font-display text-xl font-bold text-white">Partner request</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Tell us about your brand and we'll reach out with a tailored placement plan.
              </p>

              <div className="mt-6 space-y-3">
                {['Channel / brand name', 'Telegram handle', 'Audience size', 'What you want to promote'].map(
                  (f) => (
                    <div
                      key={f}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-500"
                    >
                      {f}
                    </div>
                  )
                )}
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 w-full"
              >
                Submit partner request
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-zinc-600">
                <Check className="h-3 w-3 text-gold-500" /> No tokens or payment required to enquire
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Reach active traders inside Telegram"
        subtitle="Native placements, creator integrations and attributed traffic — built for serious trading brands."
        primaryLabel="Advertise with us"
      />
    </>
  );
}
