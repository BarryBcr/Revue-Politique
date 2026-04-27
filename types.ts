
export interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  authorImage?: string;
  image: string;
  date?: string;
  readTime?: string;
}

export interface Editorial {
  id: string;
  title: string;
  author: string;
  role?: string;
  authorImage: string;
  quote: string;
}

export interface UpcomingEvent {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  series: string;
  location: string;
  href: string;
}

export interface Dossier {
  id: string;
  number: string;
  title: string;
  cover: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Politique',    href: '#politique' },
  { label: 'International', href: '#international' },
  { label: 'Économie',     href: '#economie' },
  { label: 'Société',      href: '#societe' },
  { label: 'Tech',         href: '#tech' },
  { label: 'Événements',   href: '#evenements' }
];
