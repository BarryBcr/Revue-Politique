
import { Article, Editorial } from './types';

export const FEATURED_ARTICLE: Article = {
  id: 'main-1',
  category: 'Géopolitique',
  readTime: '15 Min de lecture',
  title: "L'ordre mondial à l'épreuve des crises contemporaines : vers une nouvelle architecture ?",
  summary: "Une analyse approfondie des tensions géopolitiques actuelles, de la recomposition des alliances en Europe de l'Est aux nouveaux défis en Indopacifique.",
  author: "Jean-Marc Lefebvre",
  authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
};

export const SIDE_ARTICLES: Article[] = [
  {
    id: 'side-1',
    category: 'Institution',
    title: "Réforme parlementaire : vers un nouveau souffle démocratique",
    summary: "Décryptage des enjeux constitutionnels de la rentrée et l'avenir de la representation nationale.",
    author: "Sophie Valandry",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'side-2',
    category: 'Technologie',
    title: "Souveraineté numérique : l'Europe face aux géants de la tech",
    summary: "Pourquoi la maîtrise des données est devenue le nerf de la guerre politique au XXIème siècle.",
    author: "Marc-Antoine de la Roche",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export const EDITORIALS: Editorial[] = [
  {
    id: 'ed-1',
    title: "La fin des certitudes",
    author: "Marie Lefebvre",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Nous entrons dans une ère de volatilité où les anciennes alliances ne garantissent plus la paix durable..."
  },
  {
    id: 'ed-2',
    title: "Le retour de l'histoire",
    author: "Pierre Durand",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "L'illusion de la fin de l'histoire s'évapore face à la résurgence des nationalismes identitaires en Occident."
  },
  {
    id: 'ed-3',
    title: "Défis écologiques",
    author: "Claire Vallet",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "La planification écologique doit devenir le pilier central de tout programme politique réaliste pour la décennie."
  }
];

export const SECONDARY_ARTICLES: Article[] = [
  {
    id: 'sec-1',
    category: 'Japon',
    title: "Le renouveau industriel nippon face à la Chine",
    summary: "Analyse de la restructuration des chaînes de valeur en Asie de l'Est.",
    author: "Hiroshi Sato",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: 'sec-2',
    category: 'Finance',
    title: "Les banques centrales à l'heure du doute inflationniste",
    summary: "Les nouveaux dilemmes monétaires des grandes puissances occidentales.",
    author: "Anne-Sophie Girard",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: 'sec-3',
    category: 'Afrique',
    title: "Émergence des nouvelles puissances régionales",
    summary: "Comment le Nigéria, l'Éthiopie et l'Afrique du Sud redessinent la géopolitique continentale.",
    author: "Amadou Diallo",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
    image: "https://images.unsplash.com/photo-1484156818044-c040038b0719?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: 'sec-4',
    category: 'Europe',
    title: "L'élargissement de l'UE : le grand tabou ?",
    summary: "Pourquoi la question de l'intégration des Balkans et de l'Ukraine divise les 27.",
    author: "Klaus Schmidt",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&q=80&w=600&h=450"
  }
];
