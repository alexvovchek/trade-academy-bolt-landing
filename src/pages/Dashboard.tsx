import { Megaphone, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import { kpis, weakTopics, trafficSources, demoJournal } from '../data';
import { SectionHeading } from '../components/SectionHeading';

const demoTradeRows = demoJournal.slice(0, 6);

const partnerAds = [
  { name: 'BrokerCo', placement: 'Course screen', impressions: '128K', ctr: '4.2%' },
  { name: 'ChartPro', placement: 'Mission transition', impressions: '94K', ctr: '3.6%' },
  { name: 'FX Community', placement: 'Exam results', impressions: '61K', ctr: '5.1%' },
];

export default function Dashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard Preview"
        title="A mock admin view of the whole academy"
        subtitle="Users, completed missions, exam pass rate, weak topics, demo trades, traffic sources and partner ads — all in one operator dashboard. Mock data for demonstration."
      />

      {/* KPI cards */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Key metrics"
            title="What operators track"
            subtitle="The numbers that show academy health — learner growth, completion, mastery and conversion."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => {
              const Icon = k.icon;
              return (
                <div
                  key={k.label}
                  className="rounded-2xl border border-white/5 bg-ink-850/70 p-5 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {k.delta}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-2xl font-bold text-white">{k.value}</p>
                  <p className="text-xs text-zinc-500">{k.label}</p>
                </div>
              );
            })}
          </div>

          {/* weak topics + traffic sources */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-white">Weak topics</h3>
                <span className="text-xs text-zinc-500">avg mastery across cohort</span>
              </div>
              <div className="mt-5 space-y-4">
                {weakTopics.map((t) => (
                  <div key={t.topic}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-300">{t.topic}</span>
                      <span className="font-mono text-xs text-zinc-500">{t.mastery}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full ${
                          t.mastery < 50
                            ? 'bg-gradient-to-r from-wine-400 to-wine-600'
                            : 'bg-gradient-to-r from-gold-400 to-gold-600'
                        }`}
                        style={{ width: `${t.mastery}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-white">Traffic sources</h3>
                <span className="text-xs text-zinc-500">last 30 days</span>
              </div>
              <div className="mt-5 flex h-4 overflow-hidden rounded-full">
                {trafficSources.map((s, i) => {
                  const colors = ['bg-gold-400', 'bg-gold-600', 'bg-wine-400', 'bg-wine-600'];
                  return (
                    <div
                      key={s.source}
                      className={colors[i]}
                      style={{ width: `${s.share}%` }}
                      title={`${s.source}: ${s.share}%`}
                    />
                  );
                })}
              </div>
              <div className="mt-5 space-y-2.5">
                {trafficSources.map((s, i) => {
                  const dot = ['bg-gold-400', 'bg-gold-600', 'bg-wine-400', 'bg-wine-600'][i];
                  return (
                    <div key={s.source} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                        {s.source}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">{s.share}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* demo trades table */}
          <div className="mt-4 rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-gold-400" />
                <h3 className="font-display text-base font-semibold text-white">Recent demo trades</h3>
              </div>
              <span className="text-xs text-zinc-500">mock data</span>
            </div>
            <div className="mt-5 space-y-1.5">
              {demoTradeRows.map((j, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <span className="font-mono text-[10px] text-zinc-600">{j.time}</span>
                  <span className="font-mono text-xs text-zinc-300">{j.asset}</span>
                  <span
                    className={`font-mono text-[10px] font-semibold ${
                      j.dir === 'UP' ? 'text-emerald-400' : 'text-wine-300'
                    }`}
                  >
                    {j.dir}
                  </span>
                  <span
                    className={`font-mono text-xs font-semibold ${
                      j.outcome === 'win' ? 'text-emerald-300' : 'text-wine-300'
                    }`}
                  >
                    {j.amount}
                  </span>
                  <span className="ml-auto hidden text-xs text-zinc-500 sm:block">{j.lesson}</span>
                </div>
              ))}
            </div>
          </div>

          {/* partner ads */}
          <div className="mt-4 rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-gold-400" />
                <h3 className="font-display text-base font-semibold text-white">Partner ads</h3>
              </div>
              <span className="text-xs text-zinc-500">active placements</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {partnerAds.map((a) => (
                <div
                  key={a.name}
                  className="rounded-xl border border-white/5 bg-ink-900/60 p-4"
                >
                  <p className="font-display text-sm font-semibold text-white">{a.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">{a.placement}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-sm font-semibold text-gold-300">{a.impressions}</p>
                      <p className="text-[10px] text-zinc-600">impressions</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-semibold text-emerald-300">{a.ctr}</p>
                      <p className="text-[10px] text-zinc-600">CTR</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-600">
            All figures are mock data for demonstration purposes.
          </p>
        </div>
      </section>

      <CtaSection
        title="See the real dashboard in Telegram"
        subtitle="Open the Mini App to track your own learning progress, exam scores and weak topic diagnostics."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
