
import { Article, Editorial, UpcomingEvent, Dossier } from './types';

// === ARTICLE À LA UNE ============================================
export const FEATURED_ARTICLE: Article = {
  id: 'featured-1',
  category: 'International',
  readTime: '12 min de lecture',
  date: '24 avril 2026',
  title: "L'Inde comme victime collatérale de la guerre en Iran",
  summary: "L'embrasement du golfe Persique recompose les équilibres énergétiques asiatiques. Pourquoi New Delhi paie le prix d'un conflit qu'elle n'a pas choisi — et ce que cela signifie pour la stratégie indo-pacifique de l'Europe.",
  author: "Myriam Benraad",
  authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=1600"
};

// === ÉDITO COLONNE LATÉRALE ====================================
export const SIDE_ARTICLES: Article[] = [
  {
    id: 'side-1',
    category: 'Politique',
    title: "Droite : l'union en solo",
    summary: "Décryptage des recompositions de la droite parlementaire à six mois des municipales.",
    author: "Sophie Valandry",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: 'side-2',
    category: 'Société',
    title: "G. Attal fait du 1er mai une loi-slogan",
    summary: "Comment la majorité tente de réinvestir le terrain social par la communication politique.",
    author: "Marc-Antoine de la Roche",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: 'side-3',
    category: 'Tech',
    title: "Habermas : le guide perdu des stratégistes modernes",
    summary: "Relire l'espace public habermassien à l'ère des plateformes : un détour philosophique nécessaire.",
    author: "Antoine Beauchamp",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=900"
  }
];

// === ÉDITORIAUX (auteurs signature) =============================
export const EDITORIALS: Editorial[] = [
  {
    id: 'ed-1',
    title: "Des fautes contre la Constitution ?",
    author: "Pierre Mazeaud",
    role: "Ancien président du Conseil constitutionnel",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Quand l'exécutif se substitue au législateur, ce n'est plus l'efficacité qu'il sert, c'est sa propre fatigue institutionnelle."
  },
  {
    id: 'ed-2',
    title: "Référendum sur l'immigration : une fausse bonne idée",
    author: "Marie Lefebvre",
    role: "Politiste, directrice d'études EHESS",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "Soumettre au plébiscite une question qui mérite un examen technique revient à confondre le baromètre avec le thermomètre."
  },
  {
    id: 'ed-3',
    title: "9 milliards d'euros !",
    author: "Anne-Sophie Girard",
    role: "Économiste, ancienne membre du HCFP",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    quote: "L'arithmétique budgétaire n'est jamais neutre : elle dit ce qu'on a renoncé à faire avant même de dire ce qu'on finance."
  }
];

// === DERNIÈRES ANALYSES (grille 4 colonnes) =====================
export const LATEST_ARTICLES: Article[] = [
  {
    id: 'lat-1',
    category: 'Société',
    title: "« Une nouvelle politique territoriale pour l'école » : la suppression de postes camouflée",
    summary: "Décryptage de la circulaire qui justifie 4 000 suppressions par un argumentaire territorial discutable.",
    author: "Claire Vallet",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 'lat-2',
    category: 'Économie',
    title: "Logement : l'inéluctable baisse des prix",
    summary: "Analyse des dynamiques de marché et des trois scénarios pour les vingt prochaines années.",
    author: "Jean-Marc Lefebvre",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 'lat-3',
    category: 'International',
    title: "Le Pérou, entre instabilité interne et contraintes externes",
    summary: "Pourquoi Lima cristallise les fractures andines et le retour d'influence chinois.",
    author: "Amadou Diallo",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 'lat-4',
    category: 'Politique',
    title: "Élections municipales 2026 : dénationalisation et défaite de la gauche classique",
    summary: "Lecture des scrutins urbains des 15 et 22 mars : trois leçons sur la recomposition des territoires.",
    author: "Hiroshi Sato",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

// === ARTICLE LONG-FORM INTERCALÉ ================================
export const LONG_FORM_ARTICLE: Article = {
  id: 'long-1',
  category: 'Tech',
  readTime: '20 min de lecture',
  date: '22 avril 2026',
  title: "Souveraineté numérique : ce que coûte vraiment notre dépendance aux clouds américains",
  summary: "Une enquête approfondie sur les choix d'infrastructure de l'État français depuis 2017 et les leviers de réindustrialisation numérique encore disponibles. Avec les contributions de chercheurs du CNRS, d'anciens directeurs de la DINSIC et de représentants de l'écosystème SaaS européen.",
  author: "Klaus Schmidt",
  authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000&h=1000"
};

// === ÉVÉNEMENTS — La Cité des débats / Le Printemps des technologies
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 'evt-1',
    day: '17',
    month: 'MAI',
    year: '2026',
    series: 'La Cité des débats',
    title: "Faut-il avoir peur de l'avenir ?",
    location: "Saint-Raphaël · 9h00 — 18h30",
    href: '#'
  },
  {
    id: 'evt-2',
    day: '06',
    month: 'JUIN',
    year: '2026',
    series: 'Le Printemps des technologies',
    title: "Édition 2026 — Souveraineté, IA et démocratie",
    location: "Paris · Sénat, salle Médicis",
    href: '#'
  },
  {
    id: 'evt-3',
    day: '24',
    month: 'JUIN',
    year: '2026',
    series: 'Conférence-débat',
    title: "Aimons-nous encore la liberté ? avec Pierre Rosanvallon",
    location: "Paris · 10 rue du Colisée · 19h00",
    href: '#'
  }
];

// === DOSSIERS / NUMÉROS RÉCENTS =================================
export const DOSSIERS: Dossier[] = [
  {
    id: 'd-1',
    number: 'N° 1115',
    title: "Démocratie et fragmentation politique",
    cover: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=400&h=560',
    href: '#'
  },
  {
    id: 'd-2',
    number: 'N° 1114',
    title: "L'Europe à l'épreuve de la guerre",
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400&h=560',
    href: '#'
  },
  {
    id: 'd-3',
    number: 'N° 1113',
    title: "Le retour de la planification",
    cover: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400&h=560',
    href: '#'
  },
  {
    id: 'd-4',
    number: 'N° 1112',
    title: "Décarbonation : politiques publiques en tension",
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=400&h=560',
    href: '#'
  },
  {
    id: 'd-5',
    number: 'N° 1111',
    title: "Le Parlement face aux nouvelles urgences",
    cover: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=400&h=560',
    href: '#'
  },
  {
    id: 'd-6',
    number: 'N° 1110',
    title: "Souveraineté technologique européenne",
    cover: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400&h=560',
    href: '#'
  }
];
