export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Companies', href: '/companies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
