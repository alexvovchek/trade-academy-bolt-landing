type Candle = {
  o: number;
  h: number;
  l: number;
  c: number;
};

type Props = {
  className?: string;
  candles?: Candle[];
  entryIndex?: number | null;
  direction?: 'UP' | 'DOWN' | null;
  showEntry?: boolean;
};

function seededSeries(seed: number, count: number): Candle[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const out: Candle[] = [];
  let price = 50;
  for (let i = 0; i < count; i++) {
    const drift = (rand() - 0.48) * 6;
    const o = price;
    const c = Math.max(8, o + drift);
    const h = Math.max(o, c) + rand() * 4;
    const l = Math.min(o, c) - rand() * 4;
    out.push({ o, h, l, c });
    price = c;
  }
  return out;
}

const defaultCandles = seededSeries(7, 32);

export default function CandlestickChart({
  className = '',
  candles = defaultCandles,
  entryIndex = null,
  direction = null,
  showEntry = false,
}: Props) {
  const w = 560;
  const h = 240;
  const padX = 6;
  const padY = 10;
  const all = candles.flatMap((c) => [c.h, c.l]);
  const max = Math.max(...all);
  const min = Math.min(...all);
  const range = max - min || 1;
  const slot = (w - padX * 2) / candles.length;
  const cw = slot * 0.62;

  const y = (v: number) => padY + (1 - (v - min) / range) * (h - padY * 2);
  const x = (i: number) => padX + i * slot + slot / 2;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none" role="img" aria-label="Candlestick chart">
      <defs>
        <filter id="cglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={padX} x2={w - padX} y1={padY + f * (h - padY * 2)} y2={padY + f * (h - padY * 2)} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {candles.map((c, i) => {
        const up = c.c >= c.o;
        const color = up ? '#34d399' : '#f87171';
        const bodyTop = y(Math.max(c.o, c.c));
        const bodyH = Math.max(1.5, Math.abs(y(c.o) - y(c.c)));
        return (
          <g key={i}>
            <line x1={x(i)} x2={x(i)} y1={y(c.h)} y2={y(c.l)} stroke={color} strokeWidth="1" opacity="0.7" />
            <rect x={x(i) - cw / 2} y={bodyTop} width={cw} height={bodyH} fill={color} opacity="0.9" rx="1" />
          </g>
        );
      })}

      {showEntry && entryIndex !== null && direction && (
        <g filter="url(#cglow)">
          <line
            x1={x(entryIndex)}
            x2={w - padX}
            y1={y(candles[entryIndex].c)}
            y2={y(candles[entryIndex].c)}
            stroke={direction === 'UP' ? '#e8c456' : '#b23a40'}
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx={x(entryIndex)} cy={y(candles[entryIndex].c)} r="5" fill="#0c0c0f" stroke={direction === 'UP' ? '#e8c456' : '#b23a40'} strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}
