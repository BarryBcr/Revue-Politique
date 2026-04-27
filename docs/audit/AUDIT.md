# Audit design — Refonte Revue Politique et Parlementaire

**Date** : 2026-04-27
**Référentiel d'inspiration** : [Le Grand Continent](https://legrandcontinent.eu/fr/)
**Site actuel prod** : [revuepolitique.fr](https://www.revuepolitique.fr/)
**Maquette V1 actuelle** : [slateblue-gull-594588.hostingersite.com](https://slateblue-gull-594588.hostingersite.com/)

Captures dans ce dossier :
- `01-grand-continent-home.png` — référence
- `02-revuepolitique-current.png` — site prod existant
- `03-mockup-current.png` — maquette V1 (Hostinger)
- `04-grand-continent-article.png` — référence page article

---

## 1. Lecture des trois sites

### 1.1 Le Grand Continent (référence)

**Identité visuelle**
- Header sombre fin (barre noire) en haut → puis bandeau clair avec **logo wordmark centré** (serif gras + accent rouge sur le « C »)
- Palette : noir + blanc + crème + **rouge `#c4332a`** comme accent éditorial unique
- Typo : grosse serif (probablement Tiempos / Lyon) pour titres ; sans-serif courte pour métadonnées
- Aucun bleu, aucun gradient, aucune ombre portée — austérité éditoriale assumée

**Architecture de la home**
- **Hero asymétrique** : 1 article principal (image grande + titre serif) + colonne « Édito » à droite (3-4 brèves avec étiquette rouge)
- **« Nouveautés à lire dans la revue »** — grille 4 colonnes, titres serif, surtitre catégorie en petit
- **Article long format** intercalé : 1 image carrée à gauche + titre/résumé à droite
- **Promo livre** centré (couverture + texte + extraits)
- **Bloc « Dimanches »** : grosses dates type calendrier (`06 / 29 dimanche`) en serif énorme
- **« Comptes-rendus »** : 6 couvertures de livres en ligne
- **Footer noir massif** avec citations courantes en wall-of-text

**Codes éditoriaux clés**
1. Pas de cards rectangulaires uniformes. Grilles **variables** (1+3, 4 colonnes, 2/8, etc.)
2. Hiérarchie typographique très marquée : titres XXL, surtitres minuscules en majuscules tracking large
3. **Étiquettes rouges** pour les éditos / surtitres
4. Beaucoup d'air, marges généreuses, max-width ~1100px
5. Les **dates** sont graphiques (très gros chiffres serif)
6. Les **auteurs** ont une vignette ronde avec leur nom en bas

### 1.2 revuepolitique.fr (prod actuel)

Constat brutal : **template WordPress vieillissant**.

- Header avec logo bleu compact + nav avec onglets jaune/orange/rouge
- Boîtes bleues empilées (catégories), images écrasées
- **Pas de hiérarchie éditoriale** — tout a la même importance visuelle
- CTA « Découvrez notre offre d'abonnement » en bandeau bleu vif, esthétique 2014
- Footer dense avec carte Google Maps + sommaire de revue dans un tableau
- Pas de cohérence typographique
- Le bleu utilisé `#0e3a8a` est saturé, agressif

**Verdict** : à refondre intégralement.

### 1.3 Maquette V1 (Hostinger)

C'est déjà **bien plus propre** que la prod. Forces :
- Logo wordmark serif centré (bonne direction)
- Palette restreinte (bleu + gris)
- Hero : 1 article principal grand + 2 brèves à droite
- Section éditoriaux avec photos d'auteurs rondes
- Grille 4 colonnes pour rubrique secondaire

**Mais** comparée à Le Grand Continent on identifie 8 problèmes design.

---

## 2. Diagnostic — les 8 points qui ne fonctionnent pas encore

| # | Problème | Localisation code | Sévérité |
|---|----------|------------------|----------|
| 1 | **Bleu mal doté** (le bleu reste l'identité signature de la revue, à conserver) : il est utilisé sur 9 éléments distincts (logo, top banner, nav active, surtitre catégorie, fil vertical, CTA bandeau plein, bouton « S'abonner », bordure éditos hover, footer headings) → ça sature et empêche le bleu de jouer son rôle d'accent | `tailwind.config` `brand.blue`, `Header.tsx`, `Hero.tsx:30`, `CTASection.tsx`, `Footer.tsx` | **Haute** |
| 2 | **Header trop chargé** : top banner promo + logo + 60px de marge + nav 6 items + CTA bleu + lien « Contribuez aux débats » centré dessous = 5 niveaux empilés | `App.tsx:48-50`, `Header.tsx:11-77` | **Haute** |
| 3 | **Hiérarchie typographique faible** : titre Hero `text-5xl` (~48px), titres sidebar `text-xl` (~20px), titre rubrique `text-3xl` (~30px) — l'écart est insuffisant pour créer de l'autorité éditoriale | `Hero.tsx:34`, `CategoryGrid.tsx:13` | **Haute** |
| 4 | **Espacement vertical incohérent** dans le Hero : sidebar utilise `gap-40` (160px entre les 2 brèves) → trou visuel au scroll, asymétrie maladroite vs colonne principale | `Hero.tsx:48` | **Moyenne** |
| 5 | **Cartes éditoriaux trop « marketing »** : photo ronde centrée + bg gris clair + bordure bleue au hover = effet « tiles d'équipe corporate » au lieu de « tribunes d'experts » | `Editorials.tsx:22` | **Moyenne** |
| 6 | **CTA bleu massif** au milieu de la page coupe la lecture, casse le flow éditorial (Le Grand Continent met ses CTA en discrètes pop-ups contextuelles) | `CTASection.tsx:6` | **Haute** |
| 7 | **Pas de section dates/événements** ni de bloc « livres / dossiers » — la maquette manque les 2 blocs signature de Le Grand Continent (`Dimanches` + `Comptes-rendus`) | absent | **Moyenne** |
| 8 | **Ancres nav cassées** : `Header.tsx:43` génère `href="#politique"`, `#international`, `#tech`… mais aucune `<section id="...">` correspondante existe dans `App.tsx`. Le clic ne fait rien | `Header.tsx:43`, `App.tsx:91-95` | **Haute** |

---

## 3. Maquette finale proposée — V2

### 3.1 Identité

**Principe directeur révisé** : le bleu `#3b71b9` est la **couleur signature de la Revue Politique et Parlementaire**, on la conserve comme **accent éditorial unique** (rôle équivalent au rouge `#c4332a` chez Le Grand Continent — utilisé avec parcimonie pour signer la marque, pas pour structurer la page).

| Élément | V1 actuelle | V2 proposée |
|---------|-------------|-------------|
| Couleur structure (titres, texte, header bg, footer) | Bleu/blanc mélangés | **Noir** `#0a0a0a` (structure) + blanc cassé `#fafaf7` (fond) |
| **Bleu signature** `#3b71b9` (conservé) | Partout (9 emplois) | **Réduit à 4 emplois** : logo wordmark · étiquette catégorie « À la une » + surtitres rubriques · lien nav actif · trait vertical d'accent (`<span class="border-l-4 border-brand-blue">`) |
| Bleu foncé `#2e5a96` | hover CTA | conservé pour hover liens uniquement |
| Boutons primaires | Plein bleu | **Noir plein** (`bg-ink text-white`) ou **outline bleu** (`border-brand-blue text-brand-blue`) — le bleu plein est gardé pour 1 seul CTA majeur (S'abonner header) |
| Fond CTA « Contribuez » | Bandeau bleu plein | **Crème `#f3eee5`** ou rien (épuré, plus de bandeau) |
| Fond éditoriaux | Gris `slate-50` | Blanc cassé, bordure top 2px **bleue** au hover (signature) |
| Typo titres | Noto Serif | **Noto Serif Display** (variante Display, plus contrastée pour XXL) — fallback Noto Serif |
| Typo corps | Public Sans | Conserver Public Sans |
| Typo surtitres | Public Sans bold uppercase | Public Sans bold tracking-[0.25em] |
| Couleur surtitres rubrique | Bleu | **Bleu signature** `#3b71b9` (rôle signature conservé) |
| Couleur surtitres internes (auteur, métadonnées) | Slate | Slate `#64748b` (neutre) |

### 3.2 Structure de la home V2

```
┌─────────────────────────────────────────────────┐
│ Header noir (h:36px) — Analyses · Doctrines ·    │  bandeau noir fin
│ Dossiers · Livres · Événements      [Édition FR]│
├─────────────────────────────────────────────────┤
│              REVUE POLITIQUE                    │  logo centré XXL serif
│              et parlementaire                   │  fondée 1894
│         [Menu]            [Connexion · Abonner] │  utilitaires
├═════════════════════════════════════════════════┤  séparateur fin gris
│                                                 │
│  ┌──────────────────┐  ┌────────────────────┐  │
│  │                  │  │ ÉDITO             │  │
│  │  [Image hero]    │  │ • Brève 1 (lien   │  │
│  │                  │  │   bordeaux)        │  │
│  │                  │  │ • Brève 2          │  │
│  └──────────────────┘  │ • Brève 3          │  │
│                                                 │
│  GÉOPOLITIQUE · 15 MIN                          │
│  L'ordre mondial à l'épreuve des              │
│  crises contemporaines                          │  serif 64-72px
│  Une analyse approfondie des tensions...       │
│  ⚪ Par Jean-Marc Lefebvre                      │
└─────────────────────────────────────────────────┘
                ──── × ────              séparateur ornemental

┌─────────────────────────────────────────────────┐
│  Nouveautés à lire dans la revue               │
│                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ img  │  │ img  │  │ img  │  │ img  │        │  grille 4 col
│  │titre │  │titre │  │titre │  │titre │        │
│  └──────┘  └──────┘  └──────┘  └──────┘        │
└─────────────────────────────────────────────────┘
                ──── × ────

┌─────────────────────────────────────────────────┐
│  ┌─────────┐  ÉCONOMIE                         │
│  │         │  Les banques centrales à          │  asymétrique 1/3 + 2/3
│  │  img    │  l'heure du doute inflationniste  │  format long-form
│  │         │  Article approfondi sur les...    │
│  └─────────┘  → Lire l'analyse complète        │
└─────────────────────────────────────────────────┘
                ──── × ────

┌─────────────────────────────────────────────────┐
│  Nos éditoriaux           [Tout parcourir →]    │
│                                                 │
│  ┌─────────────────┐ ┌──────────────┐           │
│  │ La fin des      │ │ Le retour    │           │  cards plates
│  │ certitudes      │ │ de l'histoire│           │  bordure top bordeaux
│  │ — Marie Lef.    │ │ — P. Durand  │           │  pas de fond gris
│  │ « citation... » │ │ « cit... »   │           │
│  └─────────────────┘ └──────────────┘           │
└─────────────────────────────────────────────────┘
                ──── × ────

┌─────────────────────────────────────────────────┐
│  06   PROCHAINS RENDEZ-VOUS                     │
│  MAI  Colloque « Démocratie & numérique »       │  bloc Dimanches/Events
│  18:00 → S'inscrire                             │  (gros chiffre serif)
│                                                 │
│  29   Conférence « Souveraineté européenne »    │
│  MAI  → S'inscrire                              │
└─────────────────────────────────────────────────┘
                ──── × ────

┌─────────────────────────────────────────────────┐
│  DOSSIERS         (= "Comptes-rendus" LGC)      │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐                  │  6 couvertures
│  │  │ │  │ │  │ │  │ │  │ │  │                  │  (numéros revue)
│  └──┘ └──┘ └──┘ └──┘ └──┘ └──┘                  │
└─────────────────────────────────────────────────┘
                ──── × ────

┌─────────────────────────────────────────────────┐
│  Contribuez aux débats                          │
│  Texte court + bouton bordeaux outline         │  CTA discret, pas
│                                                 │  de bandeau plein
└─────────────────────────────────────────────────┘

Footer noir massif (style LGC)
```

### 3.3 Décisions design détaillées

**Header (Header.tsx)**
- Bandeau noir fin (h:40px) : nav primaire 5 items à gauche + sélecteur édition à droite
- Bandeau blanc cassé (h:120px) : `[≡ Menu]` à gauche · **REVUE POLITIQUE** centré (serif 36px + sous-titre 11px tracking 0.45em « ET PARLEMENTAIRE · FONDÉE EN 1894 ») · `[Connexion] [S'abonner]` à droite
- Suppression du top banner promo (déplacé en footer ou en pop-up contextuelle)
- Suppression du « Contribuez aux débats » centré sous la nav (devient une section dédiée plus bas)

**Hero (Hero.tsx)**
- Image hero **passée en pleine largeur** au-dessus du titre (pas de ratio 16/9 contenu — pleine bleed)
- Titre **64-72px** en mobile-first 40-48px, ligne-height serrée 0.95
- Sidebar « Édito » : étiquette rouge bordeaux uppercase + 3 brèves (pas 2), espacement régulier `gap-8` (pas `gap-40`)
- Auteur en bas avec vignette ronde 32px et nom en small-caps

**Section nouveautés (nouveau composant `LatestArticles.tsx`)**
- Grille 4 colonnes — titres serif 18-20px
- Surtitre catégorie 10px tracking large bordeaux
- Pas d'effet hover scale sur image (trop « marketing »), juste léger underline du titre

**Long-form intercalé (nouveau composant `FeatureLongForm.tsx`)**
- Layout asymétrique 1 image carrée 400×400 + 2/3 texte
- Permet de mettre en valeur 1 article éditorial au milieu de la page

**Editorials.tsx**
- Retirer le fond gris `bg-slate-50`
- Garder photos rondes mais en grayscale permanent (esthétique « portrait éditorial »)
- Citation en serif italic 16px, pas en italique sans-serif
- **Bordure top 2px bleue** (`border-brand-blue`) à la place du border-bottom hover — la signature bleue trouve ici son rôle d'accent éditorial

**CTASection.tsx → Contribute.tsx (refonte)**
- Plus de bandeau plein bleu (qui coupe le flow)
- Bloc épuré sur fond crème `#f3eee5` : gros titre serif à gauche + texte + **bouton noir plein** (`bg-ink text-white`) ou outline bleu
- Le bleu reste signature de la marque mais n'est plus le fond de toute une section

**Nouvelle section `UpcomingEvents.tsx`**
- Inspiration directe « Dimanches » LGC
- Liste 2-3 événements avec gros chiffre date 80px serif à gauche

**Nouvelle section `Dossiers.tsx`**
- 6 couvertures de revue/dossier en ligne
- Inspiration directe « Comptes-rendus »

**Footer.tsx**
- Garder noir mais étendre : ajouter wall-of-text avec dernières publications (style LGC)
- Logo en bas à gauche, encore plus petit
- Réseaux sociaux : icônes outline minimal, pas de matérial-icons custom

### 3.4 Tokens design (à mettre dans `index.html` Tailwind config)

```js
colors: {
  ink: {
    DEFAULT: '#0a0a0a',  // titres, texte structurant, header bg
    soft: '#1a1a1a',
    muted: '#6b6b6b',    // métadonnées, surtitres internes
    light: '#a8a8a8'
  },
  paper: {
    DEFAULT: '#fafaf7',  // fond principal (blanc cassé chaud)
    cream: '#f3eee5',    // blocs "extraits / livres / contribuer"
    line: '#e8e4d9'      // séparateurs ornementaux
  },
  brand: {
    blue: '#3b71b9',     // SIGNATURE conservée — usage parcimonieux
    darkBlue: '#2e5a96', // hover liens uniquement
    grey: '#c6c6c6'
  }
}
fontFamily: {
  sans: ['Inter', 'Public Sans', 'sans-serif'],
  serif: ['"Noto Serif Display"', '"Noto Serif"', 'serif'],
  mono: ['"JetBrains Mono"', 'monospace']
}
fontSize: {
  'display-xl': ['72px', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
  'display-lg': ['56px', { lineHeight: '1.0',  letterSpacing: '-0.015em' }],
  'display-md': ['40px', { lineHeight: '1.05', letterSpacing: '-0.01em' }]
}
```

### 3.5 Plan d'implémentation (phases)

**Phase 1 — Foundation (2-3h)**
- [ ] Mettre à jour `index.html` Tailwind config (couleurs + typo + display sizes)
- [ ] Refactor `Header.tsx` (2 bandeaux, suppression banner promo)
- [ ] Mettre à jour `App.tsx` : virer top banner, ajouter sections IDs (`#analyses`, `#doctrines`, `#dossiers`, `#evenements`, `#livres`)

**Phase 2 — Hero & Latest (2h)**
- [ ] Refactor `Hero.tsx` : layout 8/4 avec édito sidebar + 3 brèves au lieu de 2
- [ ] Renommer `CategoryGrid.tsx` en `LatestArticles.tsx` + retirer effets hover scale
- [ ] Créer `FeatureLongForm.tsx` (bloc asymétrique au milieu)

**Phase 3 — Editorials & CTA (1h)**
- [ ] Refactor `Editorials.tsx` : retirer fond gris, grayscale permanent, bordure top bordeaux
- [ ] Refactor `CTASection.tsx` → `Contribute.tsx` (épuré, outline)

**Phase 4 — Nouveaux blocs (2h)**
- [ ] Créer `UpcomingEvents.tsx` avec gros chiffres dates
- [ ] Créer `Dossiers.tsx` avec couvertures de numéros
- [ ] Mettre à jour `constants.tsx` avec données fixtures (events, dossiers)

**Phase 5 — Footer & ArticleDetail (1-2h)**
- [ ] Étendre `Footer.tsx` : wall-of-text dernières publis
- [ ] Refactor `ArticleDetail.tsx` : adopter le hero asymétrique LGC (image gauche + panneau noir titre droite)

**Phase 6 — Validation (30min)**
- [ ] Build + déploiement sur Hostinger
- [ ] Capture comparative avant/après
- [ ] Pass mobile (resize browser MCP)

**Total estimé : ~9h de dev + 1h finitions**

---

## 4. Questions ouvertes

1. ~~Couleur accent~~ → **Décidé 2026-04-27** : on conserve le **bleu `#3b71b9`** comme signature de la Revue Politique et Parlementaire. Il joue le rôle d'accent unique (équivalent rouge chez LGC) et non plus de couleur structurante.
2. **Logo** : on garde l'actuel SVG (montagne + ligne au-dessus du wordmark) ou on simplifie en pur wordmark serif (style LGC) ?
3. **Données** : tu veux que je remplisse les nouveaux composants (Events, Dossiers) avec des fixtures réalistes inspirées de la vraie revue, ou tu fournis du contenu ?
4. **Pages secondaires** : on inclut dans cette refonte la page Article (déjà existante mais à harmoniser) et une page Rubrique (n'existe pas) ?
5. **Mode sombre** : LGC ne l'a pas, ta V1 a `class="light"` dans `<html>` — on laisse light-only ?

Réponds aux 4 points restants et je lance la Phase 1.
