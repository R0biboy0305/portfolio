# CLAUDE.md — Portfolio de Robin Bergmann

---

## Rôle

Tu es un expert en design de portfolios pour développeurs. Tu produis du TypeScript strict, des composants maintenables et un design "Modern Dark" glassmorphism **cohérent à travers tout le site**. Chaque décision de code ou de style doit s'inscrire dans la direction artistique définie ci-dessous.

---

## Stack technique

| Couche     | Technologie                    | Version       |
|------------|-------------------------------|---------------|
| Framework  | Next.js                        | 15.x          |
| UI         | React                          | 19.x          |
| Langage    | TypeScript                     | 5 (strict)    |
| Styling    | Tailwind CSS                   | 4 (PostCSS)   |
| UI Library | shadcn/ui                      | latest        |
| 3D         | Three.js + react-three/fiber   | —             |
| Globe      | react-globe.gl                 | 2.x           |
| Icônes     | lucide-react + FontAwesome     | —             |
| Police     | Poppins (next/font/google)     | —             |

---

## Structure des dossiers

```
src/
├── app/
│   ├── ProjectDetails/[id]/      # Détail projet dynamique
│   ├── components/
│   │   ├── header/               # Header + scroll spy
│   │   ├── footer/
│   │   ├── layout/               # LayoutClientShell (wrapper transparent)
│   │   ├── icon/                 # Mapper d'icônes (nameKey → SVG)
│   │   ├── ImageSlider/          # Slider images
│   │   ├── TechFuncSlider/       # Tabs Tech / Fonctionnalités
│   │   ├── globe_design/         # Globe 3D (ssr: false)
│   │   ├── lineGlobe/            # Anneaux Three.js
│   │   ├── techstack/            # Section compétences
│   │   ├── parcours/             # Timeline expériences
│   │   ├── formation/            # Formation, langues, qualités
│   │   └── HomePage/             # Hero section layout
│   ├── context/ThemeContext.tsx
│   ├── layout.tsx                # Root layout (Poppins, ThemeProvider)
│   ├── page.tsx                  # One-Page : Hero + Projets + About
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx       # Globe + HomePageLayout ("use client")
│   │   ├── ProjectsSection.tsx   # Lit src/data/projects.ts
│   │   └── AboutSection.tsx      # Tabs TechStack/Parcours/Formation
│   └── ui/
│       ├── AnimatedSection.tsx   # Scroll reveal (IntersectionObserver)
│       ├── button.tsx            # shadcn Button
│       └── badge.tsx             # shadcn Badge
├── data/
│   └── projects.ts               # ⚠️ SEULE source de données — éditer ici pour ajouter/modifier un projet
└── lib/
    └── utils.ts                  # Utilitaires shadcn (cn)
```

---

## Règles obligatoires — à exécuter AVANT tout développement UI

**Ces trois règles s'appliquent sans exception.**

1. **Context7 MCP** : Consulte la documentation officielle de Next.js **et** shadcn/ui via Context7 avant de coder tout composant UI. Ne commence à coder qu'après avoir lu les syntaxes.
2. **shadcn/ui** : Pour tout nouveau composant UI (bouton, modal, badge, card), utilise `npx shadcn@latest add [composant]`. Ne recrée jamais un composant shadcn manuellement.
3. **Typecheck** : Après chaque modification de code, lance `npm run typecheck`. Corrige **toutes** les erreurs TypeScript avant de déclarer la tâche terminée.

---

## Design System — directives Always / Never

### Fond et palette

- **Always** : fond `#111111` (`bg-first-color`), accent indigo (`indigo-400` à `indigo-600`), texte `text-white`
- **Never** : fonds blancs, `bg-gray-800`, `bg-zinc-900`, ou toute couleur hors palette

### Cartes et conteneurs

- **Always** : glassmorphism — `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl`
- **Always** : état hover — `hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300`
- **Never** : fond opaque uni sur une carte ou un conteneur de section

```
❌  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
✅  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
        hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300">
```

### Typographie — titres de section

- **Always** : gradient sur les h1/h2 principaux — `font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30`
- **Always** : label de surtitre — `text-indigo-400 text-xs font-medium tracking-widest uppercase`
- **Always** : indicateur décoratif sous le titre — `w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent`
- **Never** : `text-white` plain sur un titre de section principale

```
❌  <h2 className="text-4xl font-bold text-white">Projets</h2>

✅  <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Portfolio</span>
    <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent
        bg-clip-text bg-gradient-to-br from-white via-white to-white/30">Projets</h2>
    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
```

### Boutons CTA

- **Always** : bouton primaire — `bg-indigo-600 hover:bg-indigo-500 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300`
- **Always** : bouton secondaire — `bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full transition-all duration-300`
- **Never** : bouton sans état hover ni transition

### Animations

- **Always** : éléments interactifs (cartes, liens, boutons) — `hover:-translate-y-0.5 transition-all duration-300 ease-in-out`
- **Always** : apparitions au scroll — utilise `<AnimatedSection delay={n}>` (`src/components/ui/AnimatedSection.tsx`)
- **Always** : décaler les délais sur les éléments d'une liste — `delay={index * 80}`
- **Never** : section visible sans animation d'entrée sur la page principale

### Espacement

- **Always** : sections principales — `py-24 px-6`
- **Always** : gaps majeurs — `gap-8` ou `gap-12`
- **Never** : section sans padding vertical explicite

---

## Architecture — règles de décision

### Server Component vs Client Component

| Situation | Directive |
|---|---|
| Lecture de données statiques | Server Component (pas de directive) |
| `useState`, `useEffect`, event listeners | `"use client"` obligatoire |
| IntersectionObserver, scroll spy | `"use client"` obligatoire |
| Composant 3D (Three.js, Globe) | `dynamic(() => import(...), { ssr: false })` dans un Client Component |
| Enfant d'un Client Component avec hooks | `"use client"` obligatoire sur l'enfant |

### Source de données — règle absolue

- **Always** : lire les projets exclusivement depuis `src/data/projects.ts`
- **Always** : filtrer `p.published === true` avant d'afficher en production
- **Never** : importer Prisma, pg, ou toute librairie de base de données — elles ne sont plus dans le projet
- Pour ajouter un projet : éditer directement `src/data/projects.ts` en dupliquant le modèle existant

```typescript
// ✅ Seule façon correcte de lire les projets
import projects from "@/data/projects";
const published = projects.filter(p => p.published);

// ❌ Interdit — Prisma n'existe plus
import { prisma } from "@/lib/prisma";
```

### Ajout d'un projet

Dupliquer l'entrée modèle dans `src/data/projects.ts`. Champs requis : `id` (slug unique), `title`, `preview`, `objectif`, `bilan`, `description`, `published`, `technologies[]`, `functions[]`, `images[]`.

---

## Conventions de code

| Élément | Convention | Exemple |
|---|---|---|
| Pages, composants, dossiers | PascalCase | `ProjectDetails/`, `Header.tsx` |
| Utilitaires, lib, hooks | camelCase | `utils.ts`, `useScrollSpy.ts` |
| Types / Interfaces | PascalCase | `Project`, `Technology` |
| Variables, fonctions | camelCase | `handleScroll`, `activeSection` |
| Path alias | `@/` → `./src/` | `@/data/projects` |
| Commentaires | Aucun par défaut | Seulement si le WHY n'est pas évident |

---

## Schéma de données (`src/data/projects.ts`)

```typescript
Project {
  id: string            // slug unique (ex: "portfolio")
  title, objectif, preview, bilan, description: string
  published: boolean
  technologies: Technology[]  // { id, title, description, icon, postId }
  functions:    Function[]    // { id, title, description, postId }
  images:       Image[]       // { id, url, postId }
}
// icon → clé lowercase de l'iconMap dans src/app/components/icon/Icon.tsx
// url  → chemin relatif depuis /public (ex: "assets/images/projet.jpg")
```

---

## Scripts

```bash
npm run dev          # Développement (hot reload)
npm run build        # Build production
npm run start        # Serveur production
npm run typecheck    # tsc --noEmit (obligatoire après chaque modif)
npm run lint         # ESLint
```

---

## Déploiement

- Plateforme : **Vercel**
- Aucune variable d'environnement requise — le projet est 100% statique côté données
- Images uploadées : chemins relatifs depuis `/public/assets/images/`
