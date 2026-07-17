import { NavLink } from 'react-router-dom';
import { TELEGRAM_URL, navLinks } from '../data';

export default function PageFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 pb-24 xl:pb-12">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M3 17l5-5 4 4 8-9 1 2-9 10-4-4-5 5z" />
                </svg>
              </span>
              <span className="font-display text-base font-bold text-white">
                Trade<span className="text-gold-400"> Academy</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              An education-first Telegram Mini App platform. Learn Price Action through
              theory, missions, real chart practice and an AI mentor.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex font-mono text-sm text-gold-400 hover:text-gold-300"
            >
              t.me/Trade_Academy_Bot
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()} Trade Academy. Educational product only — not
            financial advice. All data shown is mock data for demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
}
