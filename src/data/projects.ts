/**
 * Source de données statique des projets — remplace Prisma pour les lectures.
 * Pour convertir en fichier .mdx, configurez @next/mdx dans next.config.ts
 * et renommez ce fichier en projects.mdx (les exports JS/TS sont valides en MDX).
 *
 * Structure identique au schéma Prisma :
 *   Post > Technology[], Function[], Image[]
 */

// ─── Types (miroir du schéma Prisma) ─────────────────────────────────────────

export type Technology = {
    id: string;
    title: string;
    description: string;
    /** Clé d'icône — doit correspondre à l'iconMap dans Icon.tsx (insensible à la casse) */
    icon: string;
    postId: string;
};

export type ProjectFunction = {
    id: string;
    title: string;
    description: string;
    postId: string;
};

export type ProjectImage = {
    id: string;
    /** Chemin relatif depuis /public — ex: "assets/images/mon-projet.jpg" */
    url: string;
    postId: string;
};

export type Project = {
    id: string;
    title: string;
    objectif: string;
    preview: string;
    bilan: string;
    description: string;
    published: boolean;
    technologies: Technology[];
    functions: ProjectFunction[];
    images: ProjectImage[];
};

// ─── Données ──────────────────────────────────────────────────────────────────

const projects: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio",
        objectif:
            "Présenter mes projets et compétences de façon professionnelle et moderne, avec une interface fluide et des visuels impactants.",
        preview:
            "Portfolio personnel full-stack construit avec Next.js 15 App Router, globe 3D interactif, design glassmorphism et navigation One-Page fluide.",
        bilan:
            "Projet qui démontre mes compétences en développement full-stack, design UI/UX et intégration 3D. Architecture moderne, code typé et expérience utilisateur soignée.",
        description:
            "Portfolio développé pour mettre en valeur mon parcours et mes réalisations. Basé sur Next.js 15 avec App Router, Tailwind CSS v4, visuels 3D via Three.js et react-globe.gl, stockage PostgreSQL via Prisma.",
        published: true,
        technologies: [
            { id: "t1", title: "Next.js",      icon: "next",       description: "Framework React full-stack avec App Router et SSR",  postId: "portfolio" },
            { id: "t2", title: "TypeScript",   icon: "typescript", description: "Typage statique strict sur tout le codebase",        postId: "portfolio" },
            { id: "t3", title: "Tailwind CSS", icon: "tailwind",   description: "Styles utility-first, glassmorphism, Tailwind v4",  postId: "portfolio" },
            { id: "t4", title: "React",        icon: "react",      description: "UI composants, hooks, React 19",                    postId: "portfolio" },
            { id: "t5", title: "PostgreSQL",   icon: "mysql",      description: "Base de données relationnelle via Prisma ORM",      postId: "portfolio" },
            { id: "t6", title: "Git",          icon: "git",        description: "Versionnement et gestion des branches",             postId: "portfolio" },
        ],
        functions: [
            { id: "f1", title: "Globe 3D interactif",   description: "Globe animé avec react-globe.gl, anneaux Three.js et effets lumineux.",           postId: "portfolio" },
            { id: "f2", title: "Navigation One-Page",   description: "Scroll ancré fluide avec scroll spy dans le header et smooth scroll CSS.",         postId: "portfolio" },
            { id: "f3", title: "Glassmorphism UI",      description: "Cartes semi-transparentes, backdrop-blur, gradients et effets de profondeur.",      postId: "portfolio" },
            { id: "f4", title: "Animations au scroll",  description: "Apparitions progressives (fade + slide) via IntersectionObserver sur chaque section.", postId: "portfolio" },
            { id: "f5", title: "Gestion de projets",    description: "Ajout de projets via formulaire admin avec upload d'images et stockage Prisma.",     postId: "portfolio" },
        ],
        images: [
            { id: "i1", url: "assets/images/pdp400x400.jpg", postId: "portfolio" },
        ],
    },

    // ─── Modèle à dupliquer pour vos projets ────────────────────────────────
    {
        id: "projet-2",
        title: "Nom du projet",
        objectif: "Décrivez l'objectif principal du projet.",
        preview:  "Courte description affichée dans la liste des projets (2-3 phrases).",
        bilan:    "Ce que vous avez appris, les difficultés surmontées et le résultat final.",
        description: "Description détaillée du projet, contexte, architecture et choix techniques.",
        published: false,
        technologies: [
            { id: "t1", title: "PHP",     icon: "php",        description: "Back-end MVC",              postId: "projet-2" },
            { id: "t2", title: "MySQL",   icon: "mysql",      description: "Base de données",           postId: "projet-2" },
            { id: "t3", title: "Laravel", icon: "laravel",    description: "Framework PHP",             postId: "projet-2" },
            { id: "t4", title: "Vue.js",  icon: "vue",        description: "Framework JavaScript SPA",  postId: "projet-2" },
        ],
        functions: [
            { id: "f1", title: "Fonctionnalité 1", description: "Description de la fonctionnalité.", postId: "projet-2" },
            { id: "f2", title: "Fonctionnalité 2", description: "Description de la fonctionnalité.", postId: "projet-2" },
        ],
        images: [
            { id: "i1", url: "assets/images/placeholder.jpg", postId: "projet-2" },
        ],
    },
];

export default projects;
