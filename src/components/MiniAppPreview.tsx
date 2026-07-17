import { useState } from 'react';
import {
  LayoutDashboard,
  PlayCircle,
  Bot,
  Award,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Flame,
  Lock,
  CandlestickChart as CandleIcon,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import TelegramButton from './TelegramButton';
import PriceChart from './PriceChart';
import CandlestickChart from './CandlestickChart';

type ScreenId = 'dashboard' | 'mission' | 'mentor' | 'exam' | 'demo';

const screens: { id: ScreenId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'Course dashboard', icon: LayoutDashboard },
  { id: 'mission', label: 'Mission player', icon: PlayCircle },
  { id: 'demo', label: 'Demo account', icon: CandleIcon },
  { id: 'mentor', label: 'AI mentor', icon: Bot },
  { id: 'exam', label: 'Exam result', icon: Award },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-medium text-zinc-400">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="h-2.5 w-4 rounded-[2px] border border-zinc-500" />
        <span>Trade Academy</span>
      </div>
      <span>100%</span>
    </div>
  );
}

function DashboardScreen() {
  const topics = [
    { name: 'Market structure', prog: 80, done: 4, total: 5 },
    { name: 'Liquidity & sweeps', prog: 60, done: 3, total: 5 },
    { name: 'Supply & demand', prog: 30, done: 2, total: 6 },
    { name: 'Zone refinement', prog: 0, done: 0, total: 4, locked: true },
  ];
  return (
    <div className="flex flex-col gap-3 px-4 pb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-zinc-500">Welcome back</p>
          <p className="font-display text-sm font-bold text-white">Alex M.</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-wine-500/15 px-2 py-1 text-[10px] font-semibold text-wine-200">
          <Flame className="h-3 w-3" /> 12 day streak
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Missions', v: '28' },
          { l: 'Exams', v: '4' },
          { l: 'Mastery', v: '68%' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-white/5 bg-white/[0.03] p-2 text-center">
            <p className="font-display text-base font-bold text-gold-300">{s.v}</p>
            <p className="text-[9px] text-zinc-500">{s.l}</p>
          </div>
        ))}
      </div>

      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
        Learning path
      </p>
      {topics.map((t) => (
        <div key={t.name} className="rounded-lg border border-white/5 bg-ink-800/60 p-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-zinc-200">{t.name}</span>
            {t.locked ? (
              <Lock className="h-3 w-3 text-zinc-600" />
            ) : (
              <span className="font-mono text-[9px] text-zinc-500">
                {t.done}/{t.total}
              </span>
            )}
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
            <div
              className={`h-full rounded-full ${t.locked ? 'bg-zinc-700' : 'bg-gradient-to-r from-gold-400 to-gold-600'}`}
              style={{ width: `${t.prog}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MissionScreen() {
  return (
    <div className="flex flex-col px-4 pb-4">
      <div className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4 text-zinc-400" />
        <p className="text-[11px] font-medium text-zinc-300">Liquidity & sweeps · Mission 3</p>
      </div>
      <p className="mt-3 font-display text-sm font-bold text-white">Mark the liquidity sweep</p>
      <p className="mt-1 text-[10px] leading-relaxed text-zinc-500">
        Find the candle that sweeps below the prior low, then draw your demand zone.
      </p>

      <div className="mt-3 overflow-hidden rounded-lg border border-white/5 bg-ink-900/60 p-2">
        <PriceChart className="h-24 w-full" showAxis={false} />
      </div>

      <div className="mt-3 space-y-1.5">
        {[
          { l: 'Identify prior low', done: true },
          { l: 'Mark sweep candle', done: true },
          { l: 'Draw demand zone', done: false },
        ].map((s) => (
          <div
            key={s.l}
            className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5"
          >
            {s.done ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-gold-400" />
            ) : (
              <div className="h-3.5 w-3.5 rounded-full border border-white/15" />
            )}
            <span className="text-[10px] text-zinc-300">{s.l}</span>
          </div>
        ))}
      </div>

      <button className="btn-gold mt-3 w-full py-2 text-[11px]">Submit answer</button>
    </div>
  );
}

function MentorScreen() {
  return (
    <div className="flex flex-col gap-2.5 px-4 pb-4">
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-wine-400 to-wine-600 text-white">
          <Bot className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">AI Mentor</p>
          <p className="text-[9px] text-emerald-400">● online</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/[0.05] px-3 py-2 text-[10px] leading-relaxed text-zinc-200">
          Explain why a liquidity sweep matters and how to trade it.
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gold-500/15 px-3 py-2 text-[10px] leading-relaxed text-gold-100">
          A liquidity sweep is when price spikes beyond a key level to trigger stops, then
          reverses. Smart money fills orders there. Your edge: wait for the sweep + confirmation,
          then enter toward the trapped side.
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.05] px-3 py-2 text-[10px] leading-relaxed text-zinc-200">
          Let's train. I'll build you a 15-minute drill on sweeps below.
        </div>
      </div>

      <div className="mt-1 rounded-xl border border-gold-500/20 bg-gold-500/5 p-2.5">
        <p className="text-[10px] font-semibold text-gold-300">15-minute practice plan</p>
        <div className="mt-1.5 space-y-1">
          {['5 sweeps on 15m XAU/USD', 'Mark zone + entry', '1 mock trade review'].map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-[10px] text-zinc-300">
              <span className="h-1 w-1 rounded-full bg-gold-400" /> {p}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="text-[10px] text-zinc-500">Ask your mentor…</span>
      </div>
    </div>
  );
}

function ExamScreen() {
  return (
    <div className="flex flex-col items-center px-4 pb-4 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-500/15 text-gold-300">
        <Award className="h-7 w-7" />
      </div>
      <p className="mt-3 font-display text-base font-bold text-white">Exam passed</p>
      <p className="text-[10px] text-zinc-500">Market structure · Module 2</p>

      <div className="mt-3 font-display text-3xl font-extrabold gradient-text-gold">82%</div>
      <p className="text-[10px] text-zinc-500">Score · 41 of 50 correct</p>

      <div className="mt-4 w-full space-y-2 text-left">
        <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-200">
            <CheckCircle2 className="h-3 w-3" /> BOS identification
          </span>
          <span className="font-mono text-[10px] text-emerald-300">9/10</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-wine-500/20 bg-wine-500/5 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[10px] text-wine-200">
            <XCircle className="h-3 w-3" /> Liquidity sweeps
          </span>
          <span className="font-mono text-[10px] text-wine-300">6/10</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-200">
            <CheckCircle2 className="h-3 w-3" /> CHS detection
          </span>
          <span className="font-mono text-[10px] text-emerald-300">8/10</span>
        </div>
      </div>

      <p className="mt-3 text-[10px] text-zinc-500">
        Weak topic: <span className="text-wine-300">Liquidity sweeps</span> — mentor plan ready.
      </p>
    </div>
  );
}

function DemoScreen() {
  return (
    <div className="flex flex-col px-4 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4 text-zinc-400" />
          <p className="text-[11px] font-medium text-zinc-300">Demo Simulator</p>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">DEMO</span>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5">
        <span className="font-mono text-[10px] text-zinc-500">Balance</span>
        <span className="font-mono text-xs font-bold text-gold-300">$10,000</span>
      </div>

      <div className="mt-2 flex gap-1">
        {['EUR/USD', 'BTC/USD', 'ETH/USD'].map((a, i) => (
          <span key={a} className={`rounded-md px-2 py-1 font-mono text-[9px] ${i === 0 ? 'bg-gold-500/15 text-gold-300' : 'bg-white/[0.03] text-zinc-500'}`}>
            {a}
          </span>
        ))}
      </div>

      <div className="mt-2 overflow-hidden rounded-lg border border-white/5 bg-ink-900/60 p-1.5">
        <CandlestickChart className="h-24 w-full" showEntry entryIndex={28} direction="UP" />
      </div>

      <div className="mt-2 flex gap-1.5">
        {['1m', '3m', '5m'].map((t, i) => (
          <span key={t} className={`rounded-md px-2 py-1 font-mono text-[9px] ${i === 1 ? 'bg-gold-500/15 text-gold-300' : 'bg-white/[0.03] text-zinc-500'}`}>
            {t}
          </span>
        ))}
        <span className="ml-auto rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[9px] text-zinc-500">30s</span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2 text-[11px] font-semibold text-emerald-300">
          <ArrowUp className="h-3.5 w-3.5" /> Up
        </button>
        <button className="flex items-center justify-center gap-1.5 rounded-lg border border-wine-400/30 bg-wine-500/10 py-2 text-[11px] font-semibold text-wine-200">
          <ArrowDown className="h-3.5 w-3.5" /> Down
        </button>
      </div>

      <div className="mt-3 rounded-lg border border-gold-500/20 bg-gold-500/[0.05] p-2.5">
        <div className="flex items-center gap-1.5">
          <div className="grid h-5 w-5 place-items-center rounded bg-gradient-to-br from-wine-400 to-wine-600 text-white">
            <Bot className="h-3 w-3" />
          </div>
          <p className="text-[10px] font-semibold text-gold-300">AI Mentor</p>
        </div>
        <p className="mt-1.5 text-[9px] leading-relaxed text-zinc-300">
          Entered before sweep completion. Wait for confirmation next time.
        </p>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[280px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-gold-500/15 to-wine-700/10 blur-2xl" />
      <div className="rounded-[2.4rem] border border-white/10 bg-ink-900 p-2.5 shadow-card">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/5 bg-ink-950">
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />
          <StatusBar />
          <div className="min-h-[420px] pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function MiniAppPreview() {
  const [active, setActive] = useState<ScreenId>('dashboard');

  return (
    <section id="preview" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Mini App preview"
          title="A full trading academy, in your pocket"
          subtitle="The Telegram Mini App runs right inside the chat — no download, no separate account. Switch between screens to explore."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          {/* screen switcher */}
          <div className="order-2 space-y-3 lg:order-1">
            {screens.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-gold-500/30 bg-gold-500/[0.06] shadow-glow'
                      : 'border-white/5 bg-ink-850/60 hover:border-white/10'
                  }`}
                >
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      isActive
                        ? 'bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950'
                        : 'border border-white/10 bg-white/[0.03] text-zinc-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={`font-display text-sm font-semibold ${isActive ? 'text-white' : 'text-zinc-200'}`}>
                      {s.label}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {s.id === 'dashboard' && 'Track your path, streaks and topic mastery.'}
                      {s.id === 'mission' && 'Practice on real charts with instant feedback.'}
                      {s.id === 'demo' && 'Train on a virtual $10,000 balance, risk-free.'}
                      {s.id === 'mentor' && 'Chat with your AI mentor any time.'}
                      {s.id === 'exam' && 'Verify your knowledge and find weak spots.'}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-2">
              <TelegramButton size="lg" label="Open Mini App" />
            </div>
          </div>

          {/* phone */}
          <div className="order-1 lg:order-2">
            <PhoneFrame>
              {active === 'dashboard' && <DashboardScreen />}
              {active === 'mission' && <MissionScreen />}
              {active === 'demo' && <DemoScreen />}
              {active === 'mentor' && <MentorScreen />}
              {active === 'exam' && <ExamScreen />}
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
