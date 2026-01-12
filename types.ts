
export interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  authorImage: string;
  image: string;
  date?: string;
  readTime?: string;
}

export interface Editorial {
  id: string;
  title: string;
  author: string;
  authorImage: string;
  quote: string;
}

export enum NavigationTab {
  POLITIQUE = 'Politique',
  INTERNATIONAL = 'International',
  ECONOMIE = 'Économie',
  SOCIETE = 'Société',
  TECH = 'Tech',
  EVENEMENTS = 'Événements'
}
