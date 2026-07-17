import { ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import DemoSimulator from '../components/DemoSimulator';

export default function DemoAccount() {
  return (
    <>
      <PageHeader
        eyebrow="Demo Account"
        title="Practice on demo before risking real money"
        subtitle="Train on a virtual $10,000 balance with real-style candlestick charts. Make decisions, see the result, and let the AI mentor explain every trade."
      />

      <div className="container-px -mt-6">
        <div className="mx-auto flex max-w-2xl items-start gap-3 rounded-xl border border-wine-500/20 bg-wine-500/[0.06] p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-wine-300" />
          <p className="text-xs leading-relaxed text-zinc-400">
            <span className="font-semibold text-wine-200">Educational demo mode only.</span> The
            simulator uses virtual funds and mock price data. It is not financial advice, not a
            signal service, and makes no profit promises. Never trade with money you cannot afford
            to lose.
          </p>
        </div>
      </div>

      <DemoSimulator />

      <CtaSection
        title="Start demo training in Telegram"
        subtitle="Open the Mini App, get your virtual $10,000 balance, and practice Price Action decisions with AI feedback on every trade."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
