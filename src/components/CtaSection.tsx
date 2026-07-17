import { ArrowUpRight } from 'lucide-react';
import TelegramButton from './TelegramButton';
import { TELEGRAM_URL } from '../data';

type Props = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
};

export default function CtaSection({
  title = 'Your trading education starts in Telegram',
  subtitle = 'Open the Trade Academy bot, pick your first topic, and start practicing Price Action with an AI mentor — free, in under a minute.',
  primaryLabel = 'Open in Telegram',
}: Props) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gold blur-3xl" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />
      </div>
      <div className="container-px">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-ink-850/90 to-ink-900/90 p-10 text-center shadow-glow sm:p-14">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulseGlow" />
            Start learning today
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 text-balance">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TelegramButton size="lg" label={primaryLabel} />
            <TelegramButton variant="ghost" size="lg" label="Open Mini App" href={TELEGRAM_URL} />
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 font-mono text-sm text-gold-400 hover:text-gold-300"
          >
            t.me/Trade_Academy_Bot
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
