import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';

type QA = { q: string; a: string };

const faqGroups: { label: string; items: QA[] }[] = [
  {
    label: 'General',
    items: [
      {
        q: 'Is Trade Academy free?',
        a: 'Yes — the Free Start plan gives you access to the first theory lessons, starter missions and a diagnostics preview, forever. No card or token required.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No. Trade Academy runs as a Telegram Mini App. Open the bot, tap Start, and the full academy opens inside Telegram.',
      },
      {
        q: 'Is this financial advice?',
        a: 'No. Trade Academy is an educational product. Everything inside the platform — lessons, missions, the demo simulator and the AI mentor — is for learning purposes only and is not financial advice, a signal service, or a promise of profit.',
      },
    ],
  },
  {
    label: 'Learning',
    items: [
      {
        q: 'How does the AI mentor work?',
        a: 'The mentor explains lessons, analyzes your mistakes, builds focused practice plans from your weak topics and runs mock exams. It adapts to your progress and responds instantly inside the Mini App.',
      },
      {
        q: 'What are missions?',
        a: 'Missions are interactive, hands-on tasks on real-style charts. You mark up structure, draw zones and defend your thesis — graded instantly against a pro rubric.',
      },
      {
        q: 'How do exams work?',
        a: 'Exams are timed and verify mastery of a module. After each exam, diagnostics rank your topics by mastery and auto-generate a targeted drill plan for the weakest ones.',
      },
    ],
  },
  {
    label: 'Demo & data',
    items: [
      {
        q: 'Is the demo simulator real trading?',
        a: 'No. The demo simulator uses a virtual $10,000 balance and mock price data. No real money is ever involved. It exists to practice decision-making safely.',
      },
      {
        q: 'Is the data on this site real?',
        a: 'All figures shown on this website — KPIs, charts, journals, traffic sources — are mock data for demonstration purposes only.',
      },
    ],
  },
];

function FaqRow({ item }: { item: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/5 bg-ink-850/70 shadow-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-sm font-semibold text-white">{item.q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gold-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about Trade Academy — how it works, what's free, and what the demo simulator actually is."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-3xl space-y-10">
            {faqGroups.map((g) => (
              <div key={g.label}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                  {g.label}
                </p>
                <div className="space-y-3">
                  {g.items.map((item) => (
                    <FaqRow key={item.q} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Still have questions?"
        subtitle="Open the Trade Academy bot in Telegram — explore the free lessons and missions yourself in under a minute."
        primaryLabel="Open in Telegram"
      />
    </>
  );
}
