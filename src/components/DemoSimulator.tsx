import { useMemo, useState } from 'react';
import {
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Bot,
  ShieldCheck,
  AlertTriangle,
  TrendingDown,
  NotebookPen,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import TelegramButton from './TelegramButton';
import CandlestickChart from './CandlestickChart';
import {
  DEMO_BALANCE,
  demoAssets,
  demoTimeframes,
  demoFeatures,
  demoJournal,
  demoDailyStats,
} from '../data';

type Phase = 'idle' | 'trading' | 'result';
type Direction = 'UP' | 'DOWN';
type Outcome = 'win' | 'loss';

const DURATIONS = [10, 30, 60];

const mentorExplanations: Record<Outcome, string[]> = {
  win: [
    'Good read. Price respected the demand zone and your direction matched the higher-timeframe bias.',
    'You waited for confirmation before entering — that discipline is exactly what we train.',
    'Solid entry. The structure was clear and you did not force the trade.',
  ],
  loss: [
    'You entered before the sweep completed. Price needed one more wick below the level before reversing.',
    'The higher timeframe was bearish — this UP entry fought the trend. Always check HTF bias first.',
    'No confirmation candle. You predicted instead of reacting. Wait for structure to confirm.',
  ],
};

const mistakeTopics: Record<Outcome, string> = {
  win: 'No mistake — clean execution',
  loss: 'Premature entry before confirmation',
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function DemoSimulator() {
  const [asset, setAsset] = useState(demoAssets[0].id);
  const [tf, setTf] = useState(demoTimeframes[0].id);
  const [duration, setDuration] = useState(30);
  const [phase, setPhase] = useState<Phase>('idle');
  const [direction, setDirection] = useState<Direction | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [balance, setBalance] = useState(DEMO_BALANCE);
  const [stake] = useState(100);
  const [payout] = useState(85);
  const [trades, setTrades] = useState(0);
  const [wins, setWins] = useState(0);
  const [mentorText, setMentorText] = useState<string | null>(null);
  const [mistake, setMistake] = useState<string | null>(null);

  const assetLabel = useMemo(
    () => demoAssets.find((a) => a.id === asset)?.label ?? '',
    [asset]
  );

  const startTrade = (dir: Direction) => {
    if (phase === 'trading') return;
    setDirection(dir);
    setPhase('trading');
    setSeconds(duration);
    setOutcome(null);
    setMentorText(null);
    setMistake(null);

    const tick = duration;
    let remaining = tick;
    const iv = setInterval(() => {
      remaining -= 1;
      setSeconds(remaining);
      if (remaining <= 0) {
        clearInterval(iv);
        // mock outcome: ~55% win, slightly favor learning
        const win = Math.random() < 0.55 ? (dir === 'UP' ? true : Math.random() < 0.5) : dir === 'DOWN';
        const result: Outcome = win ? 'win' : 'loss';
        setOutcome(result);
        setPhase('result');
        setTrades((t) => t + 1);
        if (win) {
          setWins((w) => w + 1);
          setBalance((b) => b + payout);
        } else {
          setBalance((b) => Math.max(0, b - stake));
        }
        setMentorText(pick(mentorExplanations[result]));
        setMistake(mistakeTopics[result]);
      }
    }, 1000);
  };

  const reset = () => {
    setPhase('idle');
    setDirection(null);
    setOutcome(null);
    setSeconds(0);
    setMentorText(null);
    setMistake(null);
  };

  const resetBalance = () => {
    setBalance(DEMO_BALANCE);
    setTrades(0);
    setWins(0);
    reset();
  };

  const winRate = trades ? Math.round((wins / trades) * 100) : 0;
  const timerPct = duration ? (seconds / duration) * 100 : 0;

  return (
    <section id="demo" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 h-[420px] w-[600px] rounded-full bg-radial-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[480px] rounded-full bg-radial-wine blur-3xl" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
      </div>

      <div className="container-px">
        <SectionHeading
          eyebrow="Demo Trading Simulator"
          title="Practice on demo before risking real money"
          subtitle="Train on a virtual $10,000 balance with real-style candlestick charts. Make decisions, see the result, and let the AI mentor explain every trade. Educational only — no real money, no signals, no guarantees."
        />

        {/* educational disclaimer */}
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-wine-500/20 bg-wine-500/[0.06] p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-wine-300" />
          <p className="text-xs leading-relaxed text-zinc-400">
            <span className="font-semibold text-wine-200">Educational demo mode only.</span> The
            simulator uses virtual funds and mock price data. It is not financial advice, not a
            signal service, and makes no profit promises. Never trade with money you cannot afford
            to lose.
          </p>
        </div>

        {/* simulator monitor */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute -inset-x-6 -top-6 -bottom-6 -z-10 rounded-[2rem] bg-gradient-to-b from-gold-500/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-card backdrop-blur">
            {/* window bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-ink-850/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-wine-400/70" />
                <span className="h-3 w-3 rounded-full bg-gold-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-zinc-500">Demo Simulator · educational</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseGlow" /> DEMO
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px]">
              {/* chart + controls */}
              <div className="p-4 sm:p-5">
                {/* controls row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* asset selector */}
                    <div className="flex rounded-lg border border-white/10 bg-ink-850 p-1">
                      {demoAssets.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => { setAsset(a.id); reset(); }}
                          className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                            asset === a.id ? 'bg-gold-500/15 text-gold-300' : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                    {/* timeframe */}
                    <div className="flex rounded-lg border border-white/10 bg-ink-850 p-1">
                      {demoTimeframes.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => { setTf(t.id); reset(); }}
                          className={`rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                            tf === t.id ? 'bg-gold-500/15 text-gold-300' : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg border border-white/10 bg-ink-850 px-3 py-1.5">
                      <span className="font-mono text-xs text-zinc-500">Balance</span>{' '}
                      <span className="font-mono text-sm font-bold text-gold-300">${balance.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={resetBalance}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:text-gold-300"
                      title="Reset demo balance"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* chart */}
                <div className="relative mt-4 overflow-hidden rounded-xl border border-white/5 bg-ink-950/60 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-sm font-semibold text-zinc-100">{assetLabel}</p>
                      <p className="font-mono text-[10px] text-zinc-500">Demo · {tf} · mock data</p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-zinc-500">Stake $100</span>
                      <span className="rounded-md bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-300">Payout +$85</span>
                    </div>
                  </div>
                  <CandlestickChart
                    className="h-[200px] w-full sm:h-[260px]"
                    entryIndex={phase === 'result' ? 28 : null}
                    direction={direction}
                    showEntry={phase === 'result'}
                  />

                  {/* timer bar */}
                  {phase === 'trading' && (
                    <div className="absolute inset-x-3 bottom-3">
                      <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-zinc-400">
                        <span>Trade in progress · {direction}</span>
                        <span>{seconds}s</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-1000 ease-linear"
                          style={{ width: `${timerPct}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* duration + direction controls */}
                <div className="mt-4">
                  {phase !== 'trading' && (
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-xs text-zinc-500">Duration:</span>
                      {DURATIONS.map((d) => (
                        <button
                          key={d}
                          onClick={() => setDuration(d)}
                          className={`rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
                            duration === d
                              ? 'bg-gold-500/15 text-gold-300'
                              : 'bg-white/[0.03] text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {d}s
                        </button>
                      ))}
                    </div>
                  )}

                  {phase !== 'trading' && phase !== 'result' && (
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => startTrade('UP')}
                        className="group flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3.5 text-sm font-semibold text-emerald-300 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
                      >
                        <ArrowUp className="h-5 w-5" /> Up
                      </button>
                      <button
                        onClick={() => startTrade('DOWN')}
                        className="group flex items-center justify-center gap-2 rounded-xl border border-wine-400/30 bg-wine-500/10 py-3.5 text-sm font-semibold text-wine-200 transition-all hover:-translate-y-0.5 hover:bg-wine-500/20"
                      >
                        <ArrowDown className="h-5 w-5" /> Down
                      </button>
                    </div>
                  )}

                  {phase === 'result' && outcome && (
                    <div className="space-y-3">
                      <div
                        className={`flex items-center justify-between rounded-xl border p-4 ${
                          outcome === 'win'
                            ? 'border-emerald-500/30 bg-emerald-500/[0.08]'
                            : 'border-wine-500/30 bg-wine-500/[0.08]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`grid h-10 w-10 place-items-center rounded-full ${
                              outcome === 'win' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-wine-500/20 text-wine-300'
                            }`}
                          >
                            {outcome === 'win' ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
                          </div>
                          <div>
                            <p className={`font-display text-base font-bold ${outcome === 'win' ? 'text-emerald-300' : 'text-wine-300'}`}>
                              {outcome === 'win' ? 'Win' : 'Loss'}
                            </p>
                            <p className="font-mono text-xs text-zinc-400">
                              {assetLabel} · {direction} · {duration}s
                            </p>
                          </div>
                        </div>
                        <p className={`font-mono text-lg font-bold ${outcome === 'win' ? 'text-emerald-300' : 'text-wine-300'}`}>
                          {outcome === 'win' ? `+$${payout}` : `-$${stake}`}
                        </p>
                      </div>

                      {/* AI mentor explanation */}
                      <div className="rounded-xl border border-gold-500/20 bg-gold-500/[0.05] p-4">
                        <div className="flex items-center gap-2">
                          <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-wine-400 to-wine-600 text-white">
                            <Bot className="h-4 w-4" />
                          </div>
                          <p className="text-xs font-semibold text-gold-300">AI Mentor explanation</p>
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-zinc-200">{mentorText}</p>
                        <div className="mt-3 flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-wine-300" />
                          <p className="text-xs text-zinc-400">
                            <span className="font-semibold text-wine-200">Mistake analysis: </span>
                            {mistake}
                          </p>
                        </div>
                        <div className="mt-2 flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                          <TrendingDown className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                          <p className="text-xs text-zinc-400">
                            <span className="font-semibold text-gold-300">Weak topic: </span>
                            Liquidity sweeps — added to your next practice plan.
                          </p>
                        </div>
                      </div>

                      <button onClick={reset} className="btn-gold w-full">
                        Next demo trade
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* side panel: session stats */}
              <div className="border-t border-white/5 bg-ink-850/60 p-4 lg:border-l lg:border-t-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                  Session stats
                </p>
                <div className="mt-3 space-y-2.5">
                  {[
                    { l: 'Demo balance', v: `$${balance.toLocaleString()}` },
                    { l: 'Trades', v: `${trades}` },
                    { l: 'Wins', v: `${wins}` },
                    { l: 'Win rate', v: `${winRate}%` },
                  ].map((s) => (
                    <div key={s.l} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                      <span className="text-xs text-zinc-500">{s.l}</span>
                      <span className="font-mono text-sm font-semibold text-zinc-100">{s.v}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                  Trading journal
                </p>
                <div className="mt-3 space-y-1.5">
                  {demoJournal.slice(0, 4).map((j, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5">
                      <span className="font-mono text-[9px] text-zinc-600">{j.time}</span>
                      <span className="font-mono text-[10px] text-zinc-300">{j.asset}</span>
                      <span className={`font-mono text-[10px] ${j.dir === 'UP' ? 'text-emerald-400' : 'text-wine-300'}`}>{j.dir}</span>
                      <span className={`ml-auto font-mono text-[10px] font-semibold ${j.outcome === 'win' ? 'text-emerald-300' : 'text-wine-300'}`}>
                        {j.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* features grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demoFeatures.map((f) => {
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

        {/* daily training stats */}
        <div className="mt-8 rounded-2xl border border-white/5 bg-ink-850/50 p-6">
          <div className="flex items-center gap-2">
            <NotebookPen className="h-4 w-4 text-gold-400" />
            <h3 className="font-display text-base font-semibold text-white">Daily training statistics</h3>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {demoDailyStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/5 bg-ink-900/60 p-4">
                <p className="text-xs text-zinc-500">{s.label}</p>
                <p className="mt-1.5 font-display text-lg font-bold text-white">{s.value}</p>
                <p className="text-[10px] text-zinc-600">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Recent journal entries</p>
            <div className="space-y-1.5">
              {demoJournal.map((j, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                  <span className="font-mono text-[10px] text-zinc-600">{j.time}</span>
                  <span className="font-mono text-xs text-zinc-300">{j.asset}</span>
                  <span className={`font-mono text-[10px] font-semibold ${j.dir === 'UP' ? 'text-emerald-400' : 'text-wine-300'}`}>{j.dir}</span>
                  <span className={`font-mono text-xs font-semibold ${j.outcome === 'win' ? 'text-emerald-300' : 'text-wine-300'}`}>{j.amount}</span>
                  <span className="ml-auto hidden text-xs text-zinc-500 sm:block">{j.lesson}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <TelegramButton size="lg" label="Start demo training in Telegram" />
          <TelegramButton variant="ghost" size="lg" label="Open Telegram Mini App" />
        </div>
      </div>
    </section>
  );
}
