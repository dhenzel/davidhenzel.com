export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Ventures', href: '/companies' },
  { label: 'Writing', href: '/blog' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Contact', href: '/contact' },
];
