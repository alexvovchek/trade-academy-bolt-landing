import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import TelegramButton from '../components/TelegramButton';
import MiniAppPreview from '../components/MiniAppPreview';
import { benefits, TELEGRAM_URL } from '../data';

const homeBenefits = benefits.slice(0, 3);

function Ticker() {
  const items = [
    { s: 'XAU/USD', p: '2,418.30', d: '+0.82%', up: true },
    { s: 'EUR/USD', p: '1.0842', d: '-0.14%', up: false },
    { s: 'BTC/USDT', p: '67,910', d: '+2.41%', up: true },
    { s: 'GBP/JPY', p: '198.45', d: '+0.31%', up: true },
    { s: 'US30', p: '39,872', d: '+0.56%', up: true },
    { s: 'NAS100', p: '18,210', d: '-0.22%', up: false },
  ];
  const row = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden border-y border-white/5 bg-ink-900/60">
      <div className="flex w-max animate-ticker gap-8 py-2.5">
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap px-2 text-xs">
            <span className="font-mono font-medium text-zinc-400">{it.s}</span>
            <span className="font-mono font-semibold text-zinc-100">{it.p}</span>
            <span className={it.up ? 'text-emerald-400' : 'text-wine-300'}>{it.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-radial-gold blur-2xl" />
          <div className="absolute right-0 top-32 h-[300px] w-[480px] rounded-full bg-radial-wine blur-2xl" />
          <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40 [mask-image:radial-gradient(70%_50%_at_50%_30%,#000,transparent)]" />
        </div>

        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow animate-pulseGlow">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Trading Education
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Trade Academy
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-gold-300 sm:text-2xl">
              AI-тренер по Price Action
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg text-balance">
              Master Price Action through theory, interactive missions, real chart practice and an
              AI mentor — all inside a Telegram Mini App. No installs. No noise. Just deliberate
              practice that makes you a better trader.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TelegramButton size="lg" label="Open in Telegram" />
              <Link to="/academy" className="btn-ghost">
                Explore the Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-gold-500" />
              Free to start — no card, no token required
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Ticker />
        </div>
      </section>

      {/* 3 key benefits */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid gap-4 md:grid-cols-3">
            {homeBenefits.map((b) => {
              const Icon = b.icon;
              const isWine = b.accent === 'wine';
              return (
                <div
                  key={b.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 ${
                      isWine ? 'bg-wine-500/10 opacity-0 group-hover:opacity-100' : 'bg-gold-500/10 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl border ${
                      isWine
                        ? 'border-wine-400/30 bg-wine-500/10 text-wine-200'
                        : 'border-gold-500/30 bg-gold-500/10 text-gold-300'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini App preview */}
      <MiniAppPreview />

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gold blur-3xl" />
        </div>
        <div className="container-px">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-ink-850/90 to-ink-900/90 p-10 text-center shadow-glow sm:p-14">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulseGlow" />
              Start learning today
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Your trading education starts in Telegram
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 text-balance">
              Open the Trade Academy bot, pick your first topic, and start practicing Price Action
              with an AI mentor — free, in under a minute.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TelegramButton size="lg" label="Open in Telegram" />
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Open Mini App
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
