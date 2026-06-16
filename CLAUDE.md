# CLAUDE.md — Portfolio de Robin Bergmann

Contexte de travail pour les sessions Claude Code sur ce projet.

---

## Vue d'ensemble

Portfolio personnel full-stack avec Next.js App Router, PostgreSQL via Prisma, et visuels 3D (globe interactif, anneaux animés). Permet de présenter des projets stockés en base de données avec upload d'images.
Ce projet met aussi en avant mon parcours professionnel ainsi que mes compténces en termes de technologies de développement et IA générative (Workflows, agents, skills, etc...).
---

## Stack technique

| Couche | Technologie | Version |
|--------|------------|---------|
| Framework | Next.js | 16.1.6 |
| UI | React | 19.2.3 |
| Langage | TypeScript | 5 (strict) |
| Styling | Tailwind CSS | 4 (PostCSS plugin) |
| ORM | Prisma | 6.19.2 |
| BDD | PostgreSQL | — |
| 3D | Three.js + react-three/fiber | 0.183.1 / 9.5.0 |
| Globe | react-globe.gl | 2.37.0 |
| Icônes | lucide-react + FontAwesome | — |

---

## Structure des dossiers

~~~text
src/
├── app/
│   ├── About/                    # Page À propos (carousel de sections)
│   ├── AddProject/               # Formulaire d'ajout de projet (admin)
│   ├── Projets/                  # Liste des projets (SSR)
│   ├── ProjectDetails/[id]/      # Détail projet dynamique (SSR)
│   ├── components/
│   │   ├── header/               # Navigation principale
│   │   ├── footer/
│   │   ├── layout/               # LayoutClientShell (dynamic import)
│   │   ├── button/               # Bouton réutilisable (link ou button)
│   │   ├── icon/                 # Mapper d'icônes par clé string
│   │   ├── ImageSlider/          # Slider images avec dots
│   │   ├── TechFuncSlider/       # Tab slider Tech / Fonctionnalités
│   │   ├── globe_design/         # Globe 3D interactif (react-globe.gl)
│   │   ├── lineGlobe/            # Anneaux animés (Three.js)
│   │   ├── techstack/            # Section stack technique
│   │   ├── parcours/             # Expériences professionnelles
│   │   ├── formation/            # Formation et langues
│   │   └── HomePageLayout/       # Layout assemblage page d'accueil
│   ├── context/
│   │   └── ThemeContext.tsx      # Context thème light/dark
│   ├── layout.tsx                # Root layout (wraps ThemeContext)
│   ├── page.tsx                  # Home page
│   └── globals.css               # Tailwind + animations + CSS variables
├── lib/
│   ├── prisma.ts                 # Singleton Prisma (évite multi-instances HMR)
│   └── createProject.ts          # Server Action: upload image + create Post
└── generated/prisma/             # Client Prisma généré (ne pas éditer)

prisma/
├── schema.prisma                 # Schéma BDD
└── migrations/                   # Migrations SQL
~~~

---

## Scripts npm

~~~bash
npm run dev             # Serveur de développement (hot reload)
npm run build           # Build production
npm run start           # Serveur production
npm run lint            # ESLint
npm run typecheck       # Vérification TypeScript (tsc --noEmit)
~~~

Commandes Prisma utiles (non définies dans package.json) :
~~~bash
npx prisma migrate dev    # Créer et appliquer une migration
npx prisma studio         # Interface admin BDD
npx prisma generate       # Regénérer le client (lancé auto en postinstall)
~~~

---

## Schéma de données

~~~prisma
Post {
  id, title, objectif, preview, bilan, description, published
  technologies: Technology[]   # @relation onDelete: Cascade
  functions:    Function[]     # @relation onDelete: Cascade
  images:       Image[]        # @relation onDelete: Cascade
}

Technology { id, title, description, icon, postId }
Function   { id, title, description, postId }
Image      { id, url, postId }
~~~

Variable d'environnement requise : `DATABASE_URL` (PostgreSQL connection string).

---

## Conventions & Design System

### Fichiers, Dossiers et Code
- Pages et composants : **PascalCase** (`Header.tsx`, `Projets/`, `ProjectDetails/`)
- Utilitaires et lib : **camelCase** (`prisma.ts`, `createProject.ts`)
- Composants internes d'un dossier : sous-dossier `__components/`
- Fonctions et variables : camelCase
- Types/Interfaces : PascalCase (`ThemeContextType`, `IconItem`)
- Path alias : `@/` → `./src/`

### Direction Artistique & Styling
- Tailwind classes inline en priorité. Le CSS doit toujours être en Tailwind CSS.
- CSS variables globales dans `globals.css` (`--primary-color: #000A1C`, `--bg-color: #111111`).
- **Thème :** "Modern Dark" exclusif pour le moment. Couleurs dominantes : fond `#111111`, accent indigo, texte blanc.
- **Profondeur & Cartes :** Privilégie le Glassmorphism pour les surcouches (ex: `bg-white/5 backdrop-blur-md border border-white/10`).
- **Bordures et espacements :** Utilise des bords arrondis élégants (`rounded-xl` ou `rounded-2xl`) et des espacements aérés (ex: `gap-8` ou `gap-12`).
- **Typographie :** Utilise une hiérarchie claire. Les titres (h1, h2) doivent être impactants (ex: `font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r`).

### Animations & Interactions
- Tous les éléments interactifs (boutons, cartes de projet, liens) doivent avoir des micro-interactions au survol (`hover:-translate-y-1`, `hover:shadow-lg`, `hover:border-indigo-500/50`).
- Utilise systématiquement des transitions douces Tailwind (`transition-all duration-300 ease-in-out`).
- Les apparitions d'éléments au scroll ou au chargement doivent être fluides (`fade-in`, `slide-up`).

### Règles d'Interface (UX/UI)
- **Mobile-First :** Développe d'abord pour mobile (`flex-col`), puis ajoute les breakpoints pour desktop (`md:flex-row`).
- **Accessibilité (a11y) :** Tout code UI généré doit être sémantique (`<nav>`, `<article>`, `<section>`). Les boutons et images doivent avoir des `aria-label` ou `alt` pertinents.
- **États UI :** Gère systématiquement les états de chargement (Skeletons ou Spinners) et les états vides (ex: "Aucun projet trouvé").

---

## Patterns importants

### Server vs Client Components
- Pages de données (`Projets`, `ProjectDetails`) : **Server Components async** qui fetch via Prisma
- Composants interactifs : `"use client"` en haut de fichier
- Composants 3D : chargés avec `dynamic(() => import(...), { ssr: false })` pour éviter les erreurs SSR

### Fetch de données
~~~typescript
// Server Component — accès Prisma direct
const projects = await prisma.post.findMany({
  where: { published: true },
  include: { technologies: true, images: true }
});
~~~

### Server Action (upload + BDD)
- `src/lib/createProject.ts` : reçoit un `FormData`, écrit le fichier dans `public/assets/images/`, puis crée le Post via Prisma
- Les espaces dans les noms de fichiers sont remplacés par des underscores

### Gestion d'état
- État local : `useState` par composant
- État global : `ThemeContext` uniquement (léger, pas de Redux/Zustand)
- Mémoïzation : `useMemo` pour les matériaux Three.js

---

## Points d'attention

- **Pas de tests** : aucune infrastructure test (Jest, Vitest, Playwright)
- **Pas de validation de schéma** : pas de Zod/Yup côté server actions
- **Pas d'authentification** : la page `/AddProject` n'est pas protégée
- **Upload fichiers** : stockage local dans `public/assets/images/` — incompatible avec les déploiements serverless sans volume persistant
- **Pagination** : absente sur la liste des projets
- **React Compiler** activé dans `next.config.ts` — les annotations de mémoïzation manuelles peuvent être redondantes

---

## Déploiement

- Plateforme cible probable : **Vercel** (Next.js natif)
- Requiert une base PostgreSQL externe (Railway, Supabase, Neon, etc.)
- Variable d'environnement obligatoire : `DATABASE_URL`
- Adapter Prisma : `@prisma/adapter-pg` (non-edge, engine classique)

---

## Spécificités & Règles de comportement pour Claude

- Tu es un expert en design graphique, spécialisé dans les portfolios pour les développeurs/étudiants sortant de formation. Tu mets en avant les capacités UX/UI acquises tout en garantissant une maintenabilité et une propreté de code irréprochables.
- Il doit y avoir une cohérence parfaite entre chaque composant et une direction graphique unifiée sur tout le site web.
- Tu as tous les droits de modifier tous les fichiers présents dans le projet, hormis le `.env`.
- **RÈGLE MCP OBLIGATOIRE :** Avant chaque développement UI, tu dois obligatoirement utiliser l'outil Context7 pour consulter la documentation officielle de la version actuelle de Next.js ainsi que de **shadcn/ui**. Ne commence à coder qu'après avoir validé les syntaxes.
- Utilise la librairie **shadcn/ui** pour créer les composants (boutons, modales, etc.). Pour ajouter un composant, utilise de préférence la commande `npx shadcn@latest add [composant]`.
- Après chaque génération de code, tu devras **obligatoirement** lancer le script `npm run typecheck` et corriger les erreurs s'il y en a.