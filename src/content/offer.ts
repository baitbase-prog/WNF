export type PackageTier = {
  name: string;
  price: string;
  duration: string;
  highlights: string[];
  idealFor: string;
  cta: string;
};

export type CaseStudy = {
  client: string;
  work: string;
  outcome?: string;
};

const offer = {
  agency: {
    name: 'Launch Week Agency',
    callToAction: process.env.NEXT_PUBLIC_CALL_URL || '#contact',
    email: 'hello@launchweek.xyz',
    telegram: '@launchweekagency',
    pdf: 'https://example.com/launch-week-deck.pdf',
  },
  seo: {
    title: 'Launch Week | 7-day crypto community + conversion sprint',
    description:
      'Crypto-native launch team for presale, IDO, and TGE campaigns. We compress narrative, quests, distribution, and analytics into 7 days with a Peak Day War-Room.',
  },
  hero: {
    eyebrow: 'LAUNCH WEEK',
    headline: '7-day community + conversion sprint',
    subhead: 'Includes a 24h Peak Day War-Room activation for presale, IDO, TGE',
    primaryCta: 'Book a 20-min call',
    secondaryCta: 'Download PDF',
    stats: [
      { label: 'Time to launch', value: '7 days' },
      { label: 'Peak Day', value: '24h war-room' },
      { label: 'Focus', value: 'Community + conversions' },
    ],
  },
  media: {
    heroAlt: 'Launch week hero visual',
    logoAlt: 'Launch Week logo',
    ogAlt: 'Launch Week preview image',
  },
  sections: {
    offerSentence: {
      id: 'offer',
      title: 'The offer in one sentence',
      eyebrow: 'Offer',
    },
    who: {
      id: 'who',
      title: 'Who this is for',
      eyebrow: 'Who',
    },
    deliverables: {
      id: 'deliverables',
      title: 'Deliverables packed into 7 days',
      eyebrow: 'What you get',
      description: 'Everything required to turn attention into measurable community growth and conversions.',
    },
    how: {
      id: 'how',
      title: 'Seven-day launch sprint',
      eyebrow: 'How it works',
      description: 'Daily milestones keep the sprint accountable and transparent.',
    },
    peak: {
      id: 'peak',
      title: '24h window to convert momentum',
      eyebrow: 'Peak Day War-Room',
      description: 'We schedule, run, and monitor every hour to make the spike count.',
    },
    quests: {
      id: 'quests',
      title: 'Zealy / Galxe-style actions',
      eyebrow: 'Quests module',
      description: 'Designed to reward real participation and keep bots out.',
    },
    measurement: {
      id: 'measurement',
      title: 'Dashboard, UTMs, onchain actions',
      eyebrow: 'Measurement',
      description: 'Daily reporting with baselines, deltas, and the KPIs that matter for your launch.',
    },
    packages: {
      id: 'packages',
      title: 'Pick the sprint that fits',
      eyebrow: 'Packages',
      description: 'Three ways to run launch week—always with clear deliverables and rapid decision loops.',
    },
    cases: {
      id: 'cases',
      title: 'Case studies',
      eyebrow: 'Proof',
      description: 'Placeholder examples—swap in your own outcomes.',
    },
    faq: {
      id: 'faq',
      title: 'Answers for founders',
      eyebrow: 'FAQ',
      description: 'Quick replies to what launch teams ask us most.',
    },
    finalCta: {
      id: 'contact',
      eyebrow: 'Ready to launch',
      headline: 'Book a 20-min call',
      subhead: 'Kickoff within 24 hours after payment',
      pdfNote: 'Download the deck anytime',
    },
  },
  navigation: [
    { href: '#offer', label: 'Offer' },
    { href: '#who', label: 'Who' },
    { href: '#deliverables', label: 'What you get' },
    { href: '#packages', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ],
  copy: {
    whatWeDidLabel: 'What we did',
    outcomeHidden: 'Outcome hidden by default',
    highlightsLabel: 'Highlights',
    idealForLabel: 'Ideal for',
    investmentLabel: 'Investment',
    emailLabel: 'Email',
    telegramLabel: 'Telegram',
  },
  offerSentence:
    'In 7 days, we build your narrative, content, quests, and distribution plan, then run a Peak Day to turn attention into community growth and real actions.',
  who: [
    'Presale, IDO, or TGE in 7-14 days (works up to ~21)',
    'Best for retail and community-driven launches: Memecoin, DeFi, NFT, GameFi, SocialFi',
    'Teams ready for live sessions (AMA, Spaces, podcasts)',
    'Budget available for distribution spend (we manage it)',
  ],
  deliverables: [
    'Messaging Pack: 2 angles (A/B), hooks, CTAs, pinned pitch, FAQ scripts',
    'Content and Design Pack: 7-day plan, drafts, visuals',
    'Community Pack: onboarding, roles, moderation playbook, anti-spam',
    'Quest Campaign: quests, leaderboard, rewards plan',
    'Distribution: community placements, ambassador integrations, native feature articles',
    'Measurement: KPI dashboard + post-sprint report',
  ],
  howTimeline: [
    { day: 'Day 1', detail: 'Audit + baseline, narrative, KPI setup' },
    { day: 'Day 2', detail: 'Messaging pack + content drafts + design direction' },
    { day: 'Day 3', detail: 'Quests setup + onboarding flow + moderation scripts' },
    { day: 'Day 4', detail: 'Distribution booking + partner amplification plan' },
    { day: 'Day 5', detail: 'Live session 1 + iterate based on data' },
    { day: 'Day 6', detail: 'Live session 2 + push best-performing angles' },
    { day: 'Day 7', detail: 'Peak Day War-Room' },
  ],
  peakDay: [
    'Hour-by-hour runbook',
    'Live programming, rapid posting, partner boosts',
    'Real-time KPI tracking and adjustments',
  ],
  quests: [
    'Quest board with simple actions and points',
    'Leaderboard, rewards, and anti-bot checks',
    'Targets: joins, invites, content, wallet connects, onchain actions',
  ],
  measurement: [
    'UTM links, invite links, baseline and daily deltas',
    'Track: community growth rate, engagement, sign-ups, wallet connects, quest completions',
    'Optional: onchain actions tracking for DeFi style launches',
  ],
  packages: <PackageTier[]>[
    {
      name: 'BASIC',
      price: 'TBD',
      duration: '7 days',
      highlights: [
        'Messaging + content sprint',
        'Quest board setup',
        'One live session + Peak Day runbook',
      ],
      idealFor: 'Teams with in-house community managers needing a proven 7-day plan.',
      cta: 'Book BASIC',
    },
    {
      name: 'PRO',
      price: 'TBD',
      duration: '7 days + Peak Day',
      highlights: [
        'Full sprint execution',
        'Distribution booking + ambassador boosts',
        'Two live sessions + Peak Day War-Room',
      ],
      idealFor: 'Founders who want us to own the sprint and coordinate partners.',
      cta: 'Book PRO',
    },
    {
      name: 'PREMIUM',
      price: 'TBD',
      duration: '7 days + extended support',
      highlights: [
        'All PRO inclusions',
        'Onchain action tracking + custom dashboard',
        'C-suite comms + investor updates + debrief',
      ],
      idealFor: 'Teams needing white-glove support, complex onchain goals, or investor visibility.',
      cta: 'Book PREMIUM',
    },
  ],
  terms: 'Default: 100% upfront in USDT/USDC. Split available by request.',
  caseStudies: <CaseStudy[]>[
    {
      client: 'Layer1 Rollup (DeFi)',
      work: 'Narrative refresh, quest campaign, Peak Day war-room',
      outcome: '',
    },
    {
      client: 'GameFi Launchpad',
      work: 'Live sessions + community placements + referral quest',
      outcome: '',
    },
    {
      client: 'Memecoin TGE',
      work: 'Creator amplification + leaderboard + onchain actions',
      outcome: '',
    },
  ],
  faq: [
    {
      question: 'How fast can we start?',
      answer: 'Kickoff within 24 hours after payment with pre-flight materials shared same day.',
    },
    {
      question: 'Do you manage ad spend?',
      answer: 'Yes. We propose the split, handle placements, and report outcomes transparently.',
    },
    {
      question: 'Where do quests run?',
      answer: 'We adapt to Zealy, Galxe, Intract, or a custom form—always with anti-bot checks.',
    },
    {
      question: 'What do you need from us?',
      answer: 'Access to founders or marketing lead for daily check-ins, brand assets, and a payment wallet.',
    },
    {
      question: 'Can you work alongside our internal team?',
      answer: 'Absolutely. We integrate into your comms stack and run the sprint as an embedded pod.',
    },
    {
      question: 'Do you support onchain KPI tracking?',
      answer: 'Yes for DeFi-style launches. We align on target actions and wire them into the dashboard.',
    },
    {
      question: 'Where are you based?',
      answer: 'Fully remote and crypto-native. We can cover US/EU/Asia time zones during the sprint.',
    },
  ],
};

export default offer;
