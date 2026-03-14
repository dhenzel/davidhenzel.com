export interface Company {
  name: string;
  url: string;
  description: string;
  logo: string;
}

export const companies: Company[] = [
  { name: 'AI Operator', url: 'https://aioperator.com', description: 'AI consulting and implementation for businesses', logo: '/logos/companies/aioperator.jpeg' },
  { name: 'upcoach', url: 'https://upcoach.com', description: 'All-in-one platform for coaching businesses', logo: '/logos/companies/upcoach.png' },
  { name: 'Sendloop', url: 'https://sendloop.com', description: 'Email marketing automation platform', logo: '/logos/companies/sendloop.png' },
  { name: 'Octeth', url: 'https://octeth.com', description: 'Enterprise email infrastructure and deliverability', logo: '/logos/companies/octeth.png' },
  { name: 'LTVplus', url: 'https://ltvplus.com', description: 'Outsourced customer support teams', logo: '/logos/companies/ltvplus.svg' },
  { name: 'WinbackEngine', url: 'https://winbackengine.com', description: 'Automated customer win-back campaigns', logo: '/logos/companies/winbackengine.svg' },
  { name: 'RecoverPayments', url: 'https://recoverpayments.com', description: 'Failed payment recovery service', logo: '/logos/companies/recoverpayments.png' },
  { name: 'Shortlist', url: 'https://shortlist.io', description: 'Outbound marketing agency', logo: '/logos/companies/shortlist.svg' },
  { name: 'Love Not Fear', url: 'https://lovenotfear.com', description: 'Framework for conscious leadership and living', logo: '/logos/companies/lovenotfear.png' },
  { name: 'LNF People', url: 'https://lnfpeople.com', description: 'Values-driven recruiting and team building', logo: '/logos/companies/lnfpeople.jpg' },
];
