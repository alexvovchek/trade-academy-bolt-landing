import {
  Home,
  CreditCard,
  LayoutDashboard,
  BookOpen,
  Target,
  LineChart,
  Bot,
  ClipboardCheck,
  TrendingUp,
  MessageCircle,
  ListChecks,
  GraduationCap,
  Brain,
  Sparkles,
  Megaphone,
  Handshake,
  Users,
  Radio,
  CandlestickChart,
  Wallet,
  Timer,
  TrendingDown,
  NotebookPen,
  type LucideIcon,
} from 'lucide-react';

export const TELEGRAM_URL = 'https://t.me/Trade_Academy_Bot';

export type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: 'gold' | 'wine';
};

export const benefits: Benefit[] = [
  {
    icon: BookOpen,
    title: 'Theory',
    desc: 'Structured Price Action curriculum — structure, liquidity, zones, candle intent. Bite-sized lessons that compound.',
    accent: 'gold',
  },
  {
    icon: Target,
    title: 'Interactive missions',
    desc: 'Learn by doing. Each mission is a focused task with instant feedback and a clear pass/fail signal.',
    accent: 'gold',
  },
  {
    icon: LineChart,
    title: 'Real chart practice',
    desc: 'Mark up real market charts inside the Mini App. Spot entries, draw zones, defend your thesis.',
    accent: 'gold',
  },
  {
    icon: Bot,
    title: 'AI mentor',
    desc: 'A personal mentor that explains lessons, trains weak spots and builds your 15-minute practice plan.',
    accent: 'wine',
  },
  {
    icon: ClipboardCheck,
    title: 'Exam & diagnostics',
    desc: 'Verify what you actually know. Diagnostics surface weak topics before they cost you real money.',
    accent: 'wine',
  },
  {
    icon: TrendingUp,
    title: 'Personal progress',
    desc: 'Track missions passed, exam scores and topic mastery in one trader dashboard.',
    accent: 'gold',
  },
];

export type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const steps: Step[] = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Open Telegram',
    desc: 'Tap Start in the Trade Academy bot. No installs, no logins — the Mini App opens right inside Telegram.',
  },
  {
    num: '02',
    icon: ListChecks,
    title: 'Choose a topic',
    desc: 'Pick a Price Action topic — structure, liquidity, zones — or follow the recommended learning path.',
  },
  {
    num: '03',
    icon: Target,
    title: 'Complete missions',
    desc: 'Work through interactive missions on real charts. Get instant feedback from the AI mentor.',
  },
  {
    num: '04',
    icon: GraduationCap,
    title: 'Pass the exam',
    desc: 'Take a timed exam to prove mastery. Diagnostics map exactly where you still need work.',
  },
  {
    num: '05',
    icon: Brain,
    title: 'Improve with AI mentor',
    desc: 'Your mentor builds a focused practice plan from your weak topics — so every session counts.',
  },
];

export type MentorAction = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const mentorActions: MentorAction[] = [
  {
    icon: Sparkles,
    title: 'Explain a lesson',
    desc: 'Ask “explain liquidity sweep” and get a clear, chart-backed breakdown in plain language.',
  },
  {
    icon: Target,
    title: 'Train on a topic',
    desc: 'Generate targeted drills for your weakest topic until the pattern becomes instinct.',
  },
  {
    icon: Brain,
    title: 'Analyze a mistake',
    desc: 'Paste your setup or describe your entry — the mentor pinpoints the flaw in your logic.',
  },
  {
    icon: LineChart,
    title: '15-minute practice plan',
    desc: 'Get a focused daily drill: what to mark, what to look for, how many reps.',
  },
  {
    icon: ClipboardCheck,
    title: 'Prepare for exam',
    desc: 'Run a mock exam with the mentor, then review every wrong answer together.',
  },
];

export type PartnerFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const partnerFeatures: PartnerFeature[] = [
  {
    icon: Megaphone,
    title: 'Advertising placements',
    desc: 'Premium ad slots inside the Mini App — course screens, mission transitions, exam results.',
  },
  {
    icon: Handshake,
    title: 'Partner integrations',
    desc: 'Co-branded missions and learning paths with brokers, signal communities and educators.',
  },
  {
    icon: Radio,
    title: 'Traffic from Telegram communities',
    desc: 'Plug Trade Academy into your channel — onboarding, referrals and attribution built in.',
  },
  {
    icon: Users,
    title: 'Creator promotion',
    desc: 'Featured educator profiles, guest missions and a path to monetize your trading content.',
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
  accent: 'gold' | 'wine' | 'neutral';
};

export const plans: Plan[] = [
  {
    name: 'Free Start',
    price: '$0',
    period: 'forever',
    tagline: 'Begin your Price Action journey',
    features: ['First 3 theory lessons', '5 starter missions', 'Diagnostics preview', 'Community access'],
    cta: 'Start free',
    accent: 'neutral',
  },
  {
    name: 'Full Academy',
    price: '$29',
    period: '/ month',
    tagline: 'The complete curriculum',
    features: ['All theory & missions', 'Real chart practice', 'Full exam suite', 'Progress dashboard', 'Priority support'],
    cta: 'Get Full Academy',
    featured: true,
    accent: 'gold',
  },
  {
    name: 'Mentor Mode',
    price: '$79',
    period: '/ month',
    tagline: 'Your personal AI mentor',
    features: ['Everything in Full Academy', 'Unlimited AI mentor sessions', 'Custom practice plans', 'Mistake analysis', 'Mock exams'],
    cta: 'Unlock Mentor',
    accent: 'wine',
  },
  {
    name: 'Partner Plan',
    price: 'Custom',
    period: '',
    tagline: 'For channels & educators',
    features: ['Co-branded missions', 'Ad placements', 'Referral attribution', 'Creator promotion', 'Analytics dashboard'],
    cta: 'Talk to us',
    accent: 'neutral',
  },
];

export type Kpi = {
  icon: LucideIcon;
  label: string;
  value: string;
  delta: string;
  positive: boolean;
};

export const kpis: Kpi[] = [
  { icon: Users, label: 'Active users', value: '12,480', delta: '+8.2% wk', positive: true },
  { icon: Target, label: 'Completed missions', value: '48,910', delta: '+12.4% wk', positive: true },
  { icon: ClipboardCheck, label: 'Exam pass rate', value: '74.3%', delta: '+2.1% wk', positive: true },
  { icon: TrendingUp, label: 'Conversion to Telegram', value: '31.6%', delta: '+4.7% wk', positive: true },
];

export type WeakTopic = { topic: string; mastery: number };
export const weakTopics: WeakTopic[] = [
  { topic: 'Liquidity sweeps', mastery: 42 },
  { topic: 'Order blocks', mastery: 55 },
  { topic: 'Market structure', mastery: 68 },
  { topic: 'Zone refinement', mastery: 73 },
];

export type TrafficSource = { source: string; share: number };
export const trafficSources: TrafficSource[] = [
  { source: 'Telegram channels', share: 46 },
  { source: 'Organic search', share: 22 },
  { source: 'Partner referrals', share: 18 },
  { source: 'Direct', share: 14 },
];

export type NavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export const navLinks: NavItem[] = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Academy', to: '/academy', icon: BookOpen },
  { label: 'AI Mentor', to: '/ai-mentor', icon: Bot },
  { label: 'Demo Account', to: '/demo-account', icon: Wallet },
  { label: 'Live Chart', to: '/live-chart', icon: LineChart },
  { label: 'Partners', to: '/partners', icon: Handshake },
  { label: 'Pricing', to: '/pricing', icon: CreditCard },
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
];

export const bottomTabs: NavItem[] = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Academy', to: '/academy', icon: BookOpen },
  { label: 'Mentor', to: '/ai-mentor', icon: Bot },
  { label: 'Demo', to: '/demo-account', icon: Wallet },
  { label: 'Pricing', to: '/pricing', icon: CreditCard },
];

export const chartTrend = [38, 41, 39, 44, 47, 45, 50, 53, 49, 57, 61, 58, 66, 70, 68, 74, 80, 78, 85];

/* ── Demo Trading Simulator (educational, mock data only) ── */

export const DEMO_BALANCE = 10000;

export type DemoAsset = { id: string; label: string; price: string };
export const demoAssets: DemoAsset[] = [
  { id: 'eurusd', label: 'EUR/USD', price: '1.0842' },
  { id: 'btcusd', label: 'BTC/USD', price: '67,910' },
  { id: 'ethusd', label: 'ETH/USD', price: '3,482' },
];

export type Timeframe = { id: string; label: string };
export const demoTimeframes: Timeframe[] = [
  { id: '1m', label: '1m' },
  { id: '3m', label: '3m' },
  { id: '5m', label: '5m' },
];

export type DemoFeature = { icon: LucideIcon; title: string; desc: string };
export const demoFeatures: DemoFeature[] = [
  {
    icon: Wallet,
    title: 'Virtual demo balance',
    desc: 'Start with $10,000 in virtual funds. Reset anytime. No deposits, no real money, ever.',
  },
  {
    icon: CandlestickChart,
    title: 'Real candlestick charts',
    desc: 'Train on live-style price action across EUR/USD, BTC/USD and ETH/USD on 1m, 3m and 5m.',
  },
  {
    icon: Timer,
    title: 'Timed decisions',
    desc: 'Pick a direction and a duration. Practice reading structure under time pressure — safely.',
  },
  {
    icon: Bot,
    title: 'AI mentor on every trade',
    desc: 'After each demo trade the mentor explains the setup, flags the mistake and links the weak topic.',
  },
  {
    icon: NotebookPen,
    title: 'Trading journal',
    desc: 'Every demo trade is logged with asset, direction, outcome and the lesson learned.',
  },
  {
    icon: TrendingDown,
    title: 'Weak topic detection',
    desc: 'The simulator maps your losses to the Price Action concepts you still need to drill.',
  },
];

export type JournalEntry = {
  time: string;
  asset: string;
  dir: 'UP' | 'DOWN';
  outcome: 'win' | 'loss';
  amount: string;
  lesson: string;
};
export const demoJournal: JournalEntry[] = [
  { time: '14:02', asset: 'EUR/USD', dir: 'UP', outcome: 'win', amount: '+$85', lesson: 'Confirmed BOS before entry' },
  { time: '13:48', asset: 'BTC/USD', dir: 'DOWN', outcome: 'loss', amount: '-$100', lesson: 'Entered before sweep completion' },
  { time: '13:21', asset: 'ETH/USD', dir: 'UP', outcome: 'win', amount: '+$85', lesson: 'Good demand zone entry' },
  { time: '12:57', asset: 'EUR/USD', dir: 'DOWN', outcome: 'loss', amount: '-$100', lesson: 'Ignored higher-timeframe trend' },
  { time: '12:30', asset: 'BTC/USD', dir: 'UP', outcome: 'win', amount: '+$85', lesson: 'Patience on confirmation candle' },
];

export type DemoStat = { label: string; value: string; sub: string };
export const demoDailyStats: DemoStat[] = [
  { label: 'Demo trades today', value: '14', sub: '8 wins · 6 losses' },
  { label: 'Demo win rate', value: '57%', sub: '7-day rolling' },
  { label: 'Top weak topic', value: 'Liquidity sweeps', sub: '3 losses linked' },
  { label: 'Best asset', value: 'EUR/USD', sub: '71% win rate' },
];
