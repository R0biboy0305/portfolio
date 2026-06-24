# Portfolio — Robin Bergmann

Portfolio de développeur back-end construit avec Next.js, React et TypeScript. Design glassmorphism, globe 3D interactif et animations au scroll.

## Stack technique

| Couche | Technologie | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| UI | React | 19.x |
| Langage | TypeScript (strict) | 5.x |
| Styling | Tailwind CSS | 4.x |
| UI Library | shadcn/ui | latest |
| 3D | Three.js + react-three/fiber | — |
| Globe | react-globe.gl | 2.x |
| Police | Poppins (next/font/google) | — |

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/R0biboy0305/portfolio.git
cd portfolio

# Installer les dépendances
npm install
```

## Scripts

```bash
npm run dev          # Serveur de développement (hot reload)
npm run build        # Build de production
npm run start        # Serveur de production
npm run typecheck    # Vérification TypeScript (tsc --noEmit)
npm run lint         # Analyse statique ESLint
```

## Structure du projet

```
src/
├── app/
│   ├── ProjectDetails/[id]/      # Page de détail projet (SSR dynamique)
│   ├── Projets/ProjectClient.tsx  # Grille de projets (Client Component)
│   ├── components/
│   │   ├── Header/                # Header flottant + scroll spy
│   │   ├── Footer/                # Footer avec liens sociaux et CV
│   │   ├── Layout/                # LayoutClientShell (wrapper)
│   │   ├── Globe/                 # Globe 3D (chargé sans SSR)
│   │   ├── Home/                  # Hero layout (texte, CTA, icônes tech)
│   │   ├── ImageSlider/           # Slider d'images avec lightbox
│   │   ├── TechFuncSlider/        # Onglets Technologies / Fonctionnalités
│   │   ├── TechStack/             # Grille de compétences par catégorie
│   │   ├── Parcours/              # Timeline expériences professionnelles
│   │   ├── Formation/             # Formation, langues, qualités, intérêts
│   │   ├── Sections/              # Sections de la page d'accueil
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                    # Composants UI réutilisables
│   ├── data/
│   │   └── projects.ts            # Source de données des projets
│   ├── layout.tsx                 # Root layout (Poppins, Header, Footer)
│   ├── page.tsx                   # Page d'accueil (One-Page)
│   └── globals.css
├── lib/
│   └── utils.ts                   # Utilitaires shadcn (cn)
└── public/
    └── assets/
        ├── images/                # Captures d'écran des projets
        └── CV/                    # CV téléchargeable (PDF)
```

## Architecture

- **Server Components** par défaut pour le rendu statique et le chargement des données
- **Client Components** (`"use client"`) uniquement pour les interactions (scroll spy, onglets, slider)
- **Chargement dynamique** (`next/dynamic` avec `ssr: false`) pour les composants 3D (Three.js, Globe)
- **Données statiques** dans `src/app/data/projects.ts` — aucune base de données

## Fonctionnalités

- Globe 3D interactif en arrière-plan du hero
- Animations d'entrée au scroll via IntersectionObserver
- Navigation avec scroll spy et smooth scroll
- Slider d'images avec lightbox plein écran
- Thème clair / sombre
- Responsive design de 320px aux écrans ultra-larges
- CV téléchargeable, liens GitHub et LinkedIn

## Déploiement

Déployé sur **Vercel**. Aucune variable d'environnement requise.

## Auteur

**Robin Bergmann** — Développeur back-end en alternance  
[LinkedIn](https://www.linkedin.com/in/robin-bergmann-450521189/) · [GitHub](https://github.com/R0biboy0305)
