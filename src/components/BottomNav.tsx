import { NavLink } from 'react-router-dom';
import { bottomTabs } from '../data';

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/95 backdrop-blur-xl xl:hidden">
      <div className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {bottomTabs.map((t) => {
          const Icon = t.icon;
          return (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === '/'}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-1 px-1 py-2.5 text-[10px] font-medium transition-colors ${
                  isActive ? 'text-gold-300' : 'text-zinc-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-lg transition-all ${
                      isActive
                        ? 'bg-gold-500/15 shadow-glow'
                        : 'bg-transparent'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="leading-none">{t.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
