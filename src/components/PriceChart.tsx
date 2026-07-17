import { chartTrend } from '../data';

type Props = {
  className?: string;
  showAxis?: boolean;
};

export default function PriceChart({ className = '', showAxis = true }: Props) {
  const w = 560;
  const h = 220;
  const pad = 8;
  const max = Math.max(...chartTrend);
  const min = Math.min(...chartTrend);
  const range = max - min || 1;

  const pts = chartTrend.map((v, i) => {
    const x = pad + (i / (chartTrend.length - 1)) * (w - pad * 2);
    const y = pad + (1 - (v - min) / range) * (h - pad * 2);
    return [x, y] as const;
  });

  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${h - pad} L${pts[0][0].toFixed(1)} ${h - pad} Z`;

  // candle markers at a few key points
  const markers = [3, 8, 12, 16];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      preserveAspectRatio="none"
      role="img"
      aria-label="Price action chart trend"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c456" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#e8c456" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a87f24" />
          <stop offset="50%" stopColor="#e8c456" />
          <stop offset="100%" stopColor="#f6ecc6" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {showAxis &&
        [0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={pad}
            x2={w - pad}
            y1={pad + f * (h - pad * 2)}
            y2={pad + f * (h - pad * 2)}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

      <path d={area} fill="url(#areaFill)" />
      <path
        d={line}
        fill="none"
        stroke="url(#lineStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {markers.map((mi) => {
        const [x, y] = pts[mi];
        return (
          <g key={mi}>
            <circle cx={x} cy={y} r="4" fill="#0c0c0f" stroke="#e8c456" strokeWidth="2" />
          </g>
        );
      })}
    </svg>
  );
}
