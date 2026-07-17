import { useState } from 'react';
import { ArrowUp, ArrowDown, BookOpen, GraduationCap, ShieldCheck, Eye } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import CandlestickChart from '../components/CandlestickChart';
import { SectionHeading } from '../components/SectionHeading';
import { demoAssets, demoTimeframes } from '../data';

const annotations = [
  { label: 'Prior low', note: 'Reference level for sweep detection' },
  { label: 'Sweep candle', note: 'Wick below the prior low — liquidity grabbed' },
  { label: 'Confirmation', note: 'Close back inside the range — entry window' },
];

const modes = [
  { icon: BookOpen, title: 'Educational mode', desc: 'Annotations explain every structure point as you chart. Learn while you mark up.' },
  { icon: GraduationCap, title: 'Guided drills', desc: 'Follow a structured drill: identify structure, mark zones, defend your read.' },
  { icon: Eye, title: 'Free practice', desc: 'Clean chart mode. Mark up price action your way, then compare against the pro rubric.' },
];

export default function LiveChart() {
  const [asset, setAsset] = useState(demoAssets[0].id);
  const [tf, setTf] = useState(demoTimeframes[1].id);

  return (
    <>
      <PageHeader
        eyebrow="Live Chart Practice"
        title="Train your eye on real-style market charts"
        subtitle="A dedicated chart training environment with an educational mode that explains structure as you go. Practice reading price action — not financial advice."
      />

      {/* Chart trainer */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-x-6 -top-6 -bottom-6 -z-10 rounded-[2rem] bg-gradient-to-b from-gold-500/10 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-card backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/5 bg-ink-850/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-wine-400/70" />
                  <span className="h-3 w-3 rounded-full bg-gold-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 font-mono text-xs text-zinc-500">Chart trainer · educational</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseGlow" /> LEARN
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex rounded-lg border border-white/10 bg-ink-850 p-1">
                      {demoAssets.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setAsset(a.id)}
                          className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                            asset === a.id ? 'bg-gold-500/15 text-gold-300' : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex rounded-lg border border-white/10 bg-ink-850 p-1">
                      {demoTimeframes.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTf(t.id)}
                          className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                            tf === t.id ? 'bg-gold-500/15 text-gold-300' : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">Mock data · for training only</span>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-xl border border-white/5 bg-ink-950/60 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-sm font-semibold text-zinc-100">
                        {demoAssets.find((a) => a.id === asset)?.label}
                      </p>
                      <p className="font-mono text-[10px] text-zinc-500">{tf} · educational mode</p>
                    </div>
                    <span className="rounded-md bg-gold-500/10 px-2 py-1 font-mono text-[10px] text-gold-300">
                      Annotated
                    </span>
                  </div>
                  <CandlestickChart
                    className="h-[240px] w-full sm:h-[300px]"
                    entryIndex={20}
                    direction="UP"
                    showEntry
                  />
                </div>

                {/* annotations */}
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {annotations.map((a, i) => (
                    <div
                      key={a.label}
                      className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-500/20 font-mono text-[10px] font-semibold text-gold-300">
                          {i + 1}
                        </span>
                        <span className="text-xs font-semibold text-zinc-200">{a.label}</span>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-500">{a.note}</p>
                    </div>
                  ))}
                </div>

                {/* decision preview (non-trading) */}
                <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-white/5 bg-ink-850/60 p-4">
                  <p className="text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-200">Practice prompt:</span> After the
                    sweep + confirmation, which direction would you mark?
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                      <ArrowUp className="h-3.5 w-3.5" /> Up
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-wine-400/30 bg-wine-500/10 px-3 py-1.5 text-xs font-semibold text-wine-200">
                      <ArrowDown className="h-3.5 w-3.5" /> Down
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="border-t border-white/5 py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Training modes"
            title="Three ways to practice chart reading"
            subtitle="Switch between guided, annotated and free practice — all built to train your eye, not to push trades."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {modes.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="group rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/20"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-wine-500/20 bg-wine-500/[0.06] p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-wine-300" />
            <p className="text-xs leading-relaxed text-zinc-400">
              <span className="font-semibold text-wine-200">Not financial advice.</span> Chart
              practice uses mock data and is for education only. Nothing here is a recommendation,
              signal, or promise of profit.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Train your chart eye in Telegram"
        subtitle="Open the Mini App and start chart practice with an educational mode that explains every structure point."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
