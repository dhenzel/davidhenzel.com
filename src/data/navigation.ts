export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Companies', href: '/companies' },
  { label: 'Content', href: '/blog' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Contact', href: '/contact' },
];
