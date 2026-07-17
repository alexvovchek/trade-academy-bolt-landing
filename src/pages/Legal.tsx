import { ShieldAlert, AlertTriangle, Scale } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const sections: { icon: typeof ShieldAlert; title: string; body: string[] }[] = [
  {
    icon: AlertTriangle,
    title: 'Risk disclaimer',
    body: [
      'Trading foreign exchange, cryptocurrencies, CFDs and other leveraged instruments carries a high level of risk and may not be suitable for all investors. The possibility exists that you could sustain a loss of some or all of your initial investment.',
      'Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. Never trade with money you cannot afford to lose.',
      'Trade Academy is an educational product. It does not provide financial advice, investment recommendations, trading signals, or any promise of profit.',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Educational purpose only',
    body: [
      'All content on this website and inside the Telegram Mini App — lessons, missions, the demo trading simulator, AI mentor responses, charts, journals and analytics — is provided for educational and demonstration purposes only.',
      'The demo simulator uses a virtual balance and mock price data. No real money is involved, no orders are placed, and no broker connection exists.',
      'All figures shown on this website (KPIs, traffic sources, trade journals, exam results) are mock data for demonstration and do not represent real users or real performance.',
    ],
  },
  {
    icon: Scale,
    title: 'No liability',
    body: [
      'The authors and operators of Trade Academy shall not be held liable for any loss or damage resulting from reliance on any educational content provided.',
      'You alone are responsible for any trading or investment decisions you make. You should consult a licensed financial advisor before making any investment decisions.',
      'By using Trade Academy you acknowledge that you have read and understood this disclaimer.',
    ],
  },
];

export default function Legal() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Risk Disclaimer"
        title="Legal & risk disclaimer"
        subtitle="Please read this carefully. Trade Academy is an educational product — not financial advice, not a signal service, and not a guarantee of profit."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          {/* prominent warning banner */}
          <div className="mx-auto mb-12 max-w-3xl flex items-start gap-4 rounded-2xl border border-wine-500/25 bg-wine-500/[0.06] p-6">
            <ShieldAlert className="mt-0.5 h-7 w-7 shrink-0 text-wine-300" />
            <div>
              <p className="font-display text-base font-bold text-wine-200">
                High-risk activity warning
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Trading involves substantial risk. The content on this platform is for education
                only and does not constitute financial advice. Never trade with money you cannot
                afford to lose.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/5 bg-ink-850/70 p-6 shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-wine-400/30 bg-wine-500/10 text-wine-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-lg font-semibold text-white">{s.title}</h2>
                  </div>
                  <div className="mt-4 space-y-3">
                    {s.body.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-zinc-400">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-zinc-600">
            This disclaimer is provided for demonstration purposes and is not legal advice.
            Final legal terms are set inside the Telegram Mini App.
          </p>
        </div>
      </section>
    </>
  );
}
