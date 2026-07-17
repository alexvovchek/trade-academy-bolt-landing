import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, BookOpen, Target, ClipboardCheck, Brain } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import PriceChart from '../components/PriceChart';
import { SectionHeading } from '../components/SectionHeading';

const curriculum = [
  { title: 'Market structure', lessons: 5, prog: 80, topics: ['BOS & CHS', 'Trend stages', 'Momentum shifts'] },
  { title: 'Liquidity & sweeps', lessons: 5, prog: 60, topics: ['Stop runs', 'Sweep & reversal', 'Liquidity pools'] },
  { title: 'Supply & demand', lessons: 6, prog: 30, topics: ['Zone creation', 'Fresh vs tested', 'Mitigation'] },
  { title: 'Zone refinement', lessons: 4, prog: 0, topics: ['Premium / discount', 'Confluence', 'Entry timing'] },
];

const examBreakdown = [
  { topic: 'BOS identification', score: '9/10', pass: true },
  { topic: 'CHS detection', score: '8/10', pass: true },
  { topic: 'Liquidity sweeps', score: '6/10', pass: false },
  { topic: 'Zone refinement', score: '7/10', pass: true },
];

export default function Academy() {
  return (
    <>
      <PageHeader
        eyebrow="Academy"
        title="Learn Price Action the way traders actually use it"
        subtitle="Structured theory, interactive missions on real charts, timed exams and diagnostics that surface your weak topics — all in one curriculum."
      />

      {/* Theory curriculum */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Theory"
            title="A structured curriculum, not a video dump"
            subtitle="Bite-sized lessons that compound. Each module builds on the last, from market structure to advanced zone refinement."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {curriculum.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{m.title}</h3>
                      <p className="font-mono text-xs text-zinc-500">{m.lessons} lessons</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-semibold text-gold-300">{m.prog}%</span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full ${m.prog === 0 ? 'bg-zinc-700' : 'bg-gradient-to-r from-gold-400 to-gold-600'}`}
                    style={{ width: `${m.prog}%` }}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive missions */}
      <section className="relative overflow-hidden border-y border-white/5 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [background-size:56px_56px] opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_50%,#000,transparent)]" />
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Interactive missions"
            title="Learn by doing, on real charts"
            subtitle="Each mission is a focused task with instant feedback and a clear pass/fail signal. Mark up real market structure inside the Mini App."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-card">
              <div className="flex items-center justify-between border-b border-white/5 bg-ink-850/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-wine-400/70" />
                  <span className="h-3 w-3 rounded-full bg-gold-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 font-mono text-xs text-zinc-500">Liquidity & sweeps · Mission 3</span>
                </div>
                <span className="rounded-full bg-gold-500/15 px-2 py-0.5 text-[10px] font-semibold text-gold-300">Mission</span>
              </div>
              <div className="p-4">
                <p className="font-display text-sm font-bold text-white">Mark the liquidity sweep</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  Find the candle that sweeps below the prior low, then draw your demand zone.
                </p>
                <div className="mt-3 overflow-hidden rounded-lg border border-white/5 bg-ink-950/60 p-2">
                  <PriceChart className="h-36 w-full" />
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { l: 'Identify prior low', done: true },
                    { l: 'Mark sweep candle', done: true },
                    { l: 'Draw demand zone', done: false },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                    >
                      {s.done ? (
                        <CheckCircle2 className="h-4 w-4 text-gold-400" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-white/15" />
                      )}
                      <span className="text-xs text-zinc-300">{s.l}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-gold mt-4 w-full py-2 text-xs">
                  Submit answer
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: Target, title: 'Mission player', desc: 'Mark structure, draw zones, defend your thesis — graded instantly.' },
                { icon: ClipboardCheck, title: 'Step-by-step feedback', desc: 'Each step is checked against a pro rubric. Wrong marks get explained.' },
                { icon: Brain, title: 'Adaptive difficulty', desc: 'Missions scale to your mastery so you never plateau or coast.' },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/5 bg-ink-850/70 p-5 shadow-card"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-gold-500/30 bg-gold-500/10 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Exam & diagnostics */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Exam & weak topic diagnostics"
            title="Prove what you know. Fix what you don't."
            subtitle="Timed exams verify mastery. Diagnostics map exactly where you're weak — and feed those topics straight back into your practice plan."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card">
              <div className="flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/15 text-gold-300">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">Exam result · Market structure</h3>
              </div>
              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-4xl font-extrabold gradient-text-gold">82%</span>
                <span className="mb-1 font-mono text-xs text-zinc-500">41 of 50 correct</span>
              </div>
              <div className="mt-5 space-y-2">
                {examBreakdown.map((e) => (
                  <div
                    key={e.topic}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
                      e.pass
                        ? 'border-emerald-500/20 bg-emerald-500/5'
                        : 'border-wine-500/20 bg-wine-500/5'
                    }`}
                  >
                    <span className={`flex items-center gap-1.5 text-sm ${e.pass ? 'text-emerald-200' : 'text-wine-200'}`}>
                      <CheckCircle2 className={`h-3.5 w-3.5 ${e.pass ? 'text-emerald-400' : 'text-wine-400'}`} />
                      {e.topic}
                    </span>
                    <span className={`font-mono text-sm ${e.pass ? 'text-emerald-300' : 'text-wine-300'}`}>{e.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-wine-500/20 bg-wine-500/[0.06] p-6 shadow-card">
              <div className="flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-wine-500/15 text-wine-200">
                  <Brain className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">Weak topic diagnostics</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                After every exam, diagnostics rank your topics by mastery and auto-generate a
                targeted drill plan for the weakest ones.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { topic: 'Liquidity sweeps', mastery: 42 },
                  { topic: 'Order blocks', mastery: 55 },
                  { topic: 'Market structure', mastery: 68 },
                  { topic: 'Zone refinement', mastery: 73 },
                ].map((t) => (
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
              <Link to="/ai-mentor" className="btn-wine mt-6 w-full">
                Build my practice plan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Start the curriculum in Telegram"
        subtitle="Open the bot, pick your first module, and work through missions with instant feedback from your AI mentor."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
