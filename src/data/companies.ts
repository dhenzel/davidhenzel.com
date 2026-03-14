export interface Company {
  name: string;
  url: string;
  description: string;
  category: 'AI & Consulting' | 'SaaS' | 'B2B Services' | 'Community & Coaching' | 'Recruiting';
}

export const companies: Company[] = [
  { name: 'AI Operator', url: 'https://aioperator.com', description: 'AI consulting and implementation for businesses', category: 'AI & Consulting' },
  { name: 'upcoach', url: 'https://upcoach.com', description: 'All-in-one platform for coaching businesses', category: 'SaaS' },
  { name: 'Sendloop', url: 'https://sendloop.com', description: 'Email marketing automation platform', category: 'SaaS' },
  { name: 'Octeth', url: 'https://octeth.com', description: 'Enterprise email infrastructure and deliverability', category: 'SaaS' },
  { name: 'LTVplus', url: 'https://ltvplus.com', description: 'Outsourced customer support teams', category: 'B2B Services' },
  { name: 'WinbackEngine', url: 'https://winbackengine.com', description: 'Automated customer win-back campaigns', category: 'B2B Services' },
  { name: 'RecoverPayments', url: 'https://recoverpayments.com', description: 'Failed payment recovery service', category: 'B2B Services' },
  { name: 'Shortlist', url: 'https://shortlist.io', description: 'Curated talent matching platform', category: 'B2B Services' },
  { name: 'Love Not Fear', url: 'https://lovenotfear.com', description: 'Framework for conscious leadership and living', category: 'Community & Coaching' },
  { name: 'LNF People', url: 'https://lnfpeople.com', description: 'Values-driven recruiting and team building', category: 'Recruiting' },
];
