import { Bot, ArrowRight, Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import TelegramButton from '../components/TelegramButton';
import { mentorActions } from '../data';
import { SectionHeading } from '../components/SectionHeading';

export default function AIMentor() {
  return (
    <>
      <PageHeader
        eyebrow="AI Mentor"
        title="Your personal trading mentor — on demand"
        subtitle="The AI mentor turns every mistake into a lesson and every lesson into a drill. It knows your weak spots and builds a plan that fits the 15 minutes you have."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            center={false}
            eyebrow="Four ways to use your mentor"
            title="Explain, analyze, plan, prepare"
            subtitle="The mentor adapts to where you are in your journey — from first lesson to final exam."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {mentorActions.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="group rounded-2xl border border-white/5 bg-ink-850/70 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-wine-400/20"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-wine-400/30 bg-wine-500/10 text-wine-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor chat demo */}
      <section className="relative overflow-hidden border-y border-white/5 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/3 h-[400px] w-[500px] rounded-full bg-radial-wine blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-radial-gold blur-3xl" />
        </div>
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="A live mentor session"
                title="It's like a senior trader over your shoulder"
                subtitle="Ask about a lesson, paste a setup, or request a drill. The mentor responds instantly and builds a focused practice plan from your weak spots."
              />
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/5 bg-ink-850/50 p-4">
                <Quote className="h-5 w-5 shrink-0 text-gold-500" />
                <p className="text-sm italic leading-relaxed text-zinc-400">
                  "It's like having a senior trader look over my shoulder. The mentor caught a
                  bias flaw I'd had for months."
                </p>
              </div>
              <div className="mt-6">
                <TelegramButton variant="wine" size="lg" label="Try the AI mentor" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-card">
              <div className="flex items-center gap-3 border-b border-white/5 bg-ink-850/60 px-5 py-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-wine-400 to-wine-600 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">AI Mentor</p>
                  <p className="text-xs text-emerald-400">● online · responds instantly</p>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.05] px-4 py-2.5 text-sm leading-relaxed text-zinc-200">
                  I keep entering too early on sweeps. What am I missing?
                </div>
                <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-gold-500/15 px-4 py-2.5 text-sm leading-relaxed text-gold-100">
                  You're entering on the sweep candle itself — that's the trap. Wait for it to
                  close back inside the range with a lower-timeframe confirmation. Let me build
                  you a 15-minute drill to train this exact pattern.
                </div>

                <div className="rounded-xl border border-gold-500/20 bg-gold-500/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                    15-minute practice plan
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      'Review 5 sweep setups on 15m XAU/USD',
                      'Mark the confirmation candle on each',
                      '1 mock entry with defined risk',
                      'Submit for mentor review',
                    ].map((p, i) => (
                      <div key={p} className="flex items-center gap-2.5 text-sm text-zinc-200">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-500/20 font-mono text-[10px] font-semibold text-gold-300">
                          {i + 1}
                        </span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
                  <span className="text-sm text-zinc-500">Ask your mentor anything…</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-gold-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Talk to your AI mentor in Telegram"
        subtitle="Explain a lesson, analyze a mistake, build a practice plan, or prep for an exam — your mentor is ready in the Mini App."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
