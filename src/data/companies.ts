export interface Company {
  name: string;
  url: string;
  description: string;
  logo: string;
  featured?: boolean;
  /** focus = current focus (Relote stack); exited = past company/exit; default active */
  status?: 'focus' | 'active' | 'exited';
}

export const companies: Company[] = [
  {
    name: 'Relote',
    url: 'https://relote.com',
    description: 'Helping you forge an AI-native company. We rebuild businesses around AI, workflow by workflow: an assessment, a six-month transformation, and a Context Engine you own. Built by operators who rebuilt their own portfolio first, and got so excited by the results we now do it for others.',
    logo: '',
    status: 'focus',
  },
  {
    name: 'Love Not Fear',
    url: 'https://lovenotfear.com',
    description: 'The <a href="https://lovenotfear.com" target="_blank" rel="noopener">operating system for conscious leadership</a> and purposeful living. A four-pillar framework: purpose, values, vision, habits. Helps <a href="https://lovenotfear.com/students" target="_blank" rel="noopener">students find their calling</a> and <a href="https://lovenotfear.com/entrepreneurs" target="_blank" rel="noopener">entrepreneurs build what matters</a>.',
    logo: '/logos/companies/lovenotfear.png',
    featured: true,
  },
  {
    name: 'upcoach',
    url: 'https://upcoach.com',
    description: 'An all-in-one <a href="https://upcoach.com" target="_blank" rel="noopener">coaching platform</a> that lets program creators build, sell, and run structured group coaching programs, with built-in payments, progress tracking, and client management.',
    logo: '/logos/companies/upcoach.png',
    featured: true,
  },
  {
    name: 'Context Engine',
    url: 'https://contextengine.com',
    description: 'Your company\'s permanent memory. A single-tenant, self-hostable <a href="https://contextengine.com" target="_blank" rel="noopener">context layer for AI</a> that captures your emails, calls, documents, and decisions and serves them to any MCP-capable tool or agent, so your AI already knows your world without endless re-briefing. Sold standalone at contextengine.com; part of the Relote stack.',
    logo: '/logos/companies/contextengine.png',
    featured: true,
    status: 'focus',
  },
  {
    name: 'Daimon',
    url: 'https://daimon.sh',
    description: 'The ambient agent in the Relote stack. It sits quietly inside the chats where your team already works, remembers what matters (decisions, commitments, blockers, open loops), and surfaces the intelligence on demand. No new app to adopt, no runaway automation.',
    logo: '',
    status: 'focus',
  },
  {
    name: 'Relote Cloud',
    url: 'https://relote.com/cloud',
    description: 'Your engines, run for you, never read by us. A fully managed service that provisions, operates, and maintains your context engines and daimons on servers you own. Least-privilege by design: the operator can run and repair your instances but cannot read what is inside them.',
    logo: '',
    status: 'focus',
  },
  {
    name: 'Sendloop',
    url: 'https://sendloop.com',
    description: 'An <a href="https://sendloop.com" target="_blank" rel="noopener">email marketing platform</a> built for high-volume senders, offering drag-and-drop campaign creation, advanced segmentation, and transactional email delivery for businesses and agencies.',
    logo: '/logos/companies/sendloop.png',
  },
  {
    name: 'Octeth',
    url: 'https://octeth.com',
    description: 'A <a href="https://octeth.com" target="_blank" rel="noopener">self-hosted email marketing platform</a> that lets agencies own their email infrastructure, with full white-labeling, unlimited clients, and major savings over SaaS alternatives.',
    logo: '/logos/companies/octeth.png',
  },
  {
    name: 'LTVplus',
    url: 'https://ltvplus.com',
    description: '<a href="https://ltvplus.com" target="_blank" rel="noopener">Customer service outsourcing</a> that combines AI efficiency with dedicated human agents, delivering 24/7 omnichannel support for eCommerce and SaaS brands.',
    logo: '/logos/companies/ltvplus.svg',
    featured: true,
  },
  {
    name: 'WinbackEngine',
    url: 'https://winbackengine.com',
    description: 'A <a href="https://winbackengine.com" target="_blank" rel="noopener">customer win-back service</a> that uses AI-powered omnichannel outreach, including real phone calls by trained agents, to reactivate lapsed customers with a guaranteed 3x ROI.',
    logo: '/logos/companies/winbackengine.svg',
  },
  {
    name: 'RecoverPayments',
    url: 'https://recoverpayments.com',
    description: 'A done-for-you <a href="https://recoverpayments.com" target="_blank" rel="noopener">failed payment recovery service</a> that helps subscription businesses recover lost revenue through human-led dunning campaigns and personalized outreach.',
    logo: '/logos/companies/recoverpayments.png',
  },
  {
    name: 'Shortlist',
    url: 'https://shortlist.io',
    description: 'A <a href="https://shortlist.io" target="_blank" rel="noopener">revenue-first marketing agency</a> that guarantees ROI on SEO and content, focusing on bottom-of-funnel keywords and conversion-optimized strategies that drive actual revenue.',
    logo: '/logos/companies/shortlist.svg',
    featured: true,
  },
  {
    name: 'LNF People',
    url: 'https://lnfpeople.com',
    description: 'An <a href="https://lnfpeople.com" target="_blank" rel="noopener">offshore talent recruitment agency</a> that uses the Love Not Fear hiring method to match purpose-aligned candidates to values-driven companies, with a 95%+ retention rate.',
    logo: '/logos/companies/lnfpeople.jpg',
  },
  {
    name: 'TaskDrive',
    url: 'https://taskdrive.com',
    description: 'A <a href="https://taskdrive.com" target="_blank" rel="noopener">global talent recruitment service</a> that helps businesses hire remote professionals aligned with their mission, vision, and culture. One-time fee model.',
    logo: '/logos/companies/taskdrive.png',
  },
  {
    name: 'Koala Krunch',
    url: 'https://koalakrunch.de',
    description: 'A <a href="https://koalakrunch.de" target="_blank" rel="noopener">healthy snack brand</a> offering 100% fruit snacks with nothing else: no sugar, no additives. Vegan, gluten-free, and packed with vitamins and fiber.',
    logo: '/logos/companies/koalakrunch.png',
  },
  {
    name: 'Dünyam Village',
    url: 'https://dunyamvillage.com',
    description: 'An exclusive <a href="https://dunyamvillage.com" target="_blank" rel="noopener">retreat center in Bodrum, Turkey</a> offering whole-place bookings for leadership teams and groups of up to 12. Transformative experiences in nature.',
    logo: '/logos/companies/dunyamvillage.png',
    featured: true,
  },
  {
    name: 'MaxCDN',
    url: 'https://en.wikipedia.org/wiki/MaxCDN',
    description: 'The content delivery network I co-founded in Los Angeles. We grew it into a global CDN serving millions of sites, then exited, the outcome that funded everything since.',
    logo: '',
    status: 'exited',
  },
  {
    name: '12moons',
    url: '',
    description: 'One of a small portfolio of German e-commerce brands I built and sold together, my second exit, alongside Aroma Tee (tea) and 1a-Teppich (rugs).',
    logo: '',
    status: 'exited',
  },
  {
    name: 'Emma',
    url: '',
    description: 'A small retail chain, four stores across Germany selling home accessories and furniture.',
    logo: '',
    status: 'exited',
  },
  {
    name: 'RMS',
    url: '',
    description: 'Rhein-Main Support. One of my very first ventures, maintaining the in-house servers of local businesses back when servers still lived in company basements.',
    logo: '',
    status: 'exited',
  },
];
