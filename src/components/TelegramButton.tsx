import { TELEGRAM_URL } from '../data';

type Props = {
  variant?: 'gold' | 'ghost' | 'wine';
  size?: 'md' | 'lg';
  label?: string;
  href?: string;
  className?: string;
};

export default function TelegramButton({
  variant = 'gold',
  size = 'md',
  label = 'Open Telegram Mini App',
  href = TELEGRAM_URL,
  className = '',
}: Props) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0';
  const sizes = {
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  };
  const variants = {
    gold:
      'bg-gradient-to-b from-gold-300 to-gold-500 text-ink-950 shadow-glow hover:from-gold-200 hover:to-gold-400',
    ghost:
      'border border-white/10 bg-white/[0.03] text-zinc-100 hover:border-gold-500/40 hover:bg-white/[0.06]',
    wine:
      'border border-wine-400/40 bg-wine-500/10 text-wine-100 hover:bg-wine-500/20',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
      </svg>
      {label}
    </a>
  );
}
