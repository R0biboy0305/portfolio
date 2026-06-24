export type Technology = {
    id: string;
    title: string;
    description: string;
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

const projects: Project[] = [
    {
        id: "usernightmare",
        title: "UserNightmare",
        objectif:
            "UserNightmare a ainsi pour but de faire comprendre a l’utilisateur les objectifs ainsi que l’importance d’une bonne interface utilisateurs ainsi que les enjeux que represente une experience utilisateur.  D’un point de vue personnel, ce projet avait pour but de me permettre de m’introduire a React, un frmaework moderne et me créer de solides bases.",
        preview:
            "UserNightmare est une application web ludique illustrant les contrastes de l'expérience utilisateur. L'objectif pour l'utilisateur : réaliser des tâches simples sur deux interfaces opposées Mode « Good UX » : Mise en pratique des standards d'ergonomie et d'accessibilité. Mode « Nightmare » : Détournement des règles de l'UX pour créer le pire parcours utilisateur possible.",
        bilan:
            "Cette application web releve ainsi un challenge technique d’un point de vue personnelle mais aussi une réussite en therme d’apprentissage. En effet je suis parvenu a créer une application ludique trnasmettant les compléxité d’une conception d’interface a des utilisateurs. Cette derniere retranscrit les enjeux et enseignement que je souhaitais faire découvirir.",
        description:
            "Portfolio développé pour mettre en valeur mon parcours et mes réalisations. Basé sur Next.js 15 avec App Router, Tailwind CSS v4, visuels 3D via Three.js et react-globe.gl.",
        published: true,
        technologies: [
            {
                id: "t1",
                title: "React.js",
                icon: "react",
                description: "React m’a ainsi permis de gérer des états globaux permettant de valider les taches de l’utilisateur. La force de React étant le re-render des composants sans rechargement permet ce switch instantané entre les 2 rendus",
                postId: "usernightmare"
            },
            {
                id: "t2",
                title: "Tailwind CSS",
                icon: "tailwind",
                description: "Choisi pour sa flexibilité et son système de design natif. Il a permis d'assurer un Responsive Design parfait sur tous les écrans tout en garantissant des performances d'affichage optimales grâce à la purge des classes CSS inutilisées en production.",
                postId: "usernightmare"
            },
        ],
        functions: [
            {
                id: "f1",
                title: "Switch instantané ",
                description: "Un bouton de switch permet de naviguer entre les 2 rendus de manieres instantané.",
                postId: "usernightmare"
            },
            {
                id: "f2",
                title: "Sauvegarde de données en LocalStorage",
                description: "N’ayant pas concu de back-end et ne sauveguardant pas de données sensibles je sauvegarde en LocalStorage le taches accomplies ainsi que le pseudo et mot de passe de l’uitlisateur de sorte a conditionner et modifier l’affichage en fonciton.",
                postId: "usernightmare"
            },
        ],
        images: [
            {id: "i1", url: "assets/images/p1/p1-1.png", postId: "usernightmare"},
            {id: "i2", url: "assets/images/p1/p1-2.png", postId: "usernightmare"},
            {id: "i3", url: "assets/images/p1/p1-3.png", postId: "usernightmare"},
            {id: "i4", url: "assets/images/p1/p1-4.png", postId: "usernightmare"},
        ],
    },

    {
        id: "portfolio",
        title: "Portfolio",
        objectif:
            "Concevoir un portfolio de développeur moderne, immersif et performant, mettant l'accent sur l'expérience utilisateur à travers des micro-interactions soignées, un design glassmorphism cohérent et une navigation fluide. L'objectif était de créer un site qui reflète mes compétences techniques tout en offrant une expérience visuelle mémorable.",
        preview:
            "Portfolio Next.js 15 avec design glassmorphism, globe 3D interactif et animations au scroll. Chaque section est pensée pour guider le visiteur à travers mon parcours avec fluidité : hero immersif, grille de projets filtrable, timeline interactive et détails de projet avec slider d'images. Le responsive est optimisé pour chaque breakpoint, de 320px aux écrans ultra-larges.",
        bilan:
            "Ce projet m'a permis de pousser l'UX au-delà du simple affichage d'informations. Le travail sur les animations d'entrée décalées, le scroll spy du header, le glassmorphism unifié et le globe 3D en arrière-plan a été particulièrement formateur. L'intégration de Three.js via react-three/fiber et react-globe.gl dans un contexte SSR Next.js a été le défi technique le plus stimulant, résolu grâce au chargement dynamique sans SSR.",
        description:
            "Portfolio personnel développé avec Next.js 15 (App Router), React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui, Three.js et react-globe.gl. Architecture full Server Components avec hydratation sélective.",
        published: true,
        technologies: [
            {
                id: "t1",
                title: "Next.js",
                icon: "next",
                description: "App Router avec Server Components pour un rendu hybride performant. Le routage dynamique gère les pages de détails de projets en SSR, tandis que le layout racine encapsule Header, Footer et police Poppins.",
                postId: "portfolio"
            },
            {
                id: "t2",
                title: "React",
                icon: "react",
                description: "React 19 pour les composants interactifs : scroll spy du header, IntersectionObserver pour les animations au scroll, gestion d'état locale pour le slider d'images et les onglets de compétences.",
                postId: "portfolio"
            },
            {
                id: "t3",
                title: "TypeScript",
                icon: "typescript",
                description: "Typage strict de bout en bout : interfaces Project, Technology, Function et Image, garantissant la cohérence des données et l'autocomplétion dans tout le codebase.",
                postId: "portfolio"
            },
            {
                id: "t4",
                title: "Tailwind CSS",
                icon: "tailwind",
                description: "Tailwind CSS v4 pour un design system glassmorphism cohérent. Classes utilitaires personnalisées, responsive optimisé pour mobile (320px–428px) et purge automatique en production.",
                postId: "portfolio"
            },
        ],
        functions: [
            {
                id: "f1",
                title: "Globe 3D interactif",
                description: "Globe terrestre rendu avec react-globe.gl en arrière-plan du hero, chargé dynamiquement sans SSR pour éviter les erreurs d'hydratation. Rotation automatique et interaction au survol.",
                postId: "portfolio"
            },
            {
                id: "f2",
                title: "Animations au scroll",
                description: "Chaque section apparaît avec une animation fade-in + translate pilotée par IntersectionObserver via le composant AnimatedSection. Les éléments de liste sont décalés avec un délai progressif.",
                postId: "portfolio"
            },
            {
                id: "f3",
                title: "Scroll spy et navigation fluide",
                description: "Le header détecte automatiquement la section visible et met en surbrillance le lien correspondant. Le clic sur un lien déclenche un scroll smooth vers la section cible.",
                postId: "portfolio"
            },
            {
                id: "f4",
                title: "Slider d'images glassmorphism",
                description: "Carrousel d'images avec navigation par flèches, indicateurs de position et design glassmorphism unifié. Transitions fluides entre les slides.",
                postId: "portfolio"
            },
            {
                id: "f5",
                title: "Responsive design pixel-perfect",
                description: "Adaptation fine pour chaque palier d'écran, de 320px à l'ultra-large. Breakpoints Tailwind personnalisés, grille de projets passant de 1 à 3 colonnes, typographie fluide, conteneurs à overflow contraint et header adaptatif. Chaque composant a été testé sur mobile, tablette et desktop pour garantir une expérience sans scroll horizontal ni débordement.",
                postId: "portfolio"
            },
        ],
        images: [
            {id: "i1", url: "assets/images/p2/p2-1.png", postId: "portfolio"},
            {id: "i2", url: "assets/images/p2/p2-3.png", postId: "portfolio"},
            {id: "i3", url: "assets/images/p2/p2-2.png", postId: "portfolio"},
            {id: "i4", url: "assets/images/p2/p2-4.png", postId: "portfolio"},
        ],
    },

    {
        id: "ia-generative",
        title: "IA Générative & Claude Code",
        objectif:
            "Démontrer ma maîtrise de l'IA générative comme outil de productivité avancé dans le développement logiciel. Au-delà de la simple utilisation de prompts, il s'agit de montrer comment j'orchestre des agents IA, configure des environnements de travail structurés et intègre l'IA dans un workflow professionnel reproductible.",
        preview:
            "Exploration approfondie de l'écosystème Claude Code : création de fichiers CLAUDE.md pour piloter le comportement de l'IA, configuration de Skills et d'agents spécialisés, orchestration de Teams multi-agents pour des tâches complexes, et utilisation de MCP servers pour étendre les capacités de l'IA. Ce projet illustre une approche méthodique de l'IA-assisted development.",
        bilan:
            "L'IA générative ne remplace pas le développeur, elle amplifie ses capacités. En structurant l'interaction via des CLAUDE.md détaillés, des Skills ciblés et des agents spécialisés, j'ai considérablement accéléré mon workflow tout en maintenant un contrôle total sur la qualité du code produit. La clé réside dans la capacité à donner un contexte riche et structuré à l'IA — ce qui exige une compréhension fine de l'architecture, du design system et des conventions du projet.",
        description:
            "Maîtrise de l'IA générative appliquée au développement logiciel, avec Claude Code comme outil principal d'orchestration et de productivité.",
        published: true,
        technologies: [
            {
                id: "t1",
                title: "Claude",
                icon: "claude",
                description: "Claude Code comme assistant de développement principal : génération de code, refactoring, debugging, revue de code et exploration de codebase. Utilisation avancée des modèles Sonnet, Opus et Haiku selon la complexité des tâches.",
                postId: "ia-generative"
            },
            {
                id: "t2",
                title: "TypeScript",
                icon: "typescript",
                description: "TypeScript strict comme langage principal des projets pilotés par IA, permettant à Claude de bénéficier du typage pour produire du code plus fiable et cohérent avec l'existant.",
                postId: "ia-generative"
            },
            {
                id: "t3",
                title: "Next.js",
                icon: "next",
                description: "Framework principal des projets développés avec l'assistance IA. La documentation Next.js est systématiquement consultée via Context7 MCP avant chaque implémentation.",
                postId: "ia-generative"
            },
        ],
        functions: [
            {
                id: "f1",
                title: "CLAUDE.md — Pilotage contextuel",
                description: "Rédaction de fichiers CLAUDE.md détaillés définissant le rôle de l'IA, le design system, les conventions de code, les règles architecturales et les scripts disponibles. Ce contexte structuré garantit des réponses cohérentes et alignées avec le projet.",
                postId: "ia-generative"
            },
            {
                id: "f2",
                title: "Skills & Agents spécialisés",
                description: "Configuration de Skills invocables (/code-review, /simplify, /verify) et d'agents spécialisés (Explore, Plan, websearch) pour déléguer des sous-tâches ciblées : exploration de codebase, planification d'architecture, recherche documentaire.",
                postId: "ia-generative"
            },
            {
                id: "f3",
                title: "MCP Servers — Extension des capacités",
                description: "Intégration de MCP servers (Context7 pour la documentation, Claude-in-Chrome pour l'automatisation navigateur) permettant à l'IA d'accéder à des ressources externes et d'interagir avec des outils au-delà du terminal.",
                postId: "ia-generative"
            },
            {
                id: "f4",
                title: "Workflow IA structuré",
                description: "Méthodologie reproductible : consultation Context7 avant chaque composant UI, typecheck systématique après modification, utilisation de shadcn/ui via CLI, et revue de code automatisée. L'IA s'intègre dans un processus qualité, pas en remplacement.",
                postId: "ia-generative"
            },
        ],
        images: [
            {id: "i1", url: "assets/images/p3/p3-4.jpg", postId: "ia-generative"},
            {id: "i2", url: "assets/images/p3/p3-1.png", postId: "ia-generative"},
            {id: "i3", url: "assets/images/p3/p3-2.png", postId: "ia-generative"},
            {id: "i4", url: "assets/images/p3/p3-3.png", postId: "ia-generative"},
        ],
    },

    {
        id: "cms-interne",
        title: "CMS Interne Multi-Tenant",
        objectif:
            "Concevoir un CMS interne permettant de gérer le contenu de plusieurs sites internet depuis une interface unique. L'enjeu principal était de bâtir une architecture multi-tenant où une seule API Laravel alimente à la fois le CMS et les différents front-ends clients, tout en isolant les données de chaque tenant de manière transparente.",
        preview:
            "CMS interne développé en alternance avec Vue.js/Nuxt en front-end et une API Laravel multi-tenant. Grâce au package Tenancy, une seule API centralise la gestion de contenu pour plusieurs sites. Des middlewares personnalisés détectent automatiquement le tenant à chaque requête, permettant la création et la synchronisation instantanée de contenus entre tenants.",
        bilan:
            "Ce projet a été un vrai accélérateur de compétences. La prise en main de Vue.js, Nuxt et Laravel en contexte professionnel, combinée au travail collaboratif avec les autres développeurs de l'équipe, m'a poussé à monter rapidement en autonomie. Le défi le plus marquant a été la conception de l'architecture API unifiée : rassembler nos sites internet et le CMS derrière une seule API tout en garantissant l'isolation des données par tenant. La mise en place des middlewares de détection automatique du tenant a été la clé pour automatiser la distribution de contenu entre les différentes instances.",
        description:
            "CMS interne multi-tenant développé en alternance. Front-end Vue.js/Nuxt, API Laravel avec Tenancy for Laravel. Architecture centralisée permettant de piloter plusieurs sites depuis une seule interface et une seule API.",
        published: true,
        technologies: [
            {
                id: "t1",
                title: "Vue.js",
                icon: "vue",
                description: "Framework front-end utilisé pour construire l'interface du CMS. Sa réactivité et son système de composants ont permis de créer une expérience d'édition de contenu fluide et intuitive pour les utilisateurs internes.",
                postId: "cms-interne"
            },
            {
                id: "t2",
                title: "Nuxt",
                icon: "nuxt",
                description: "Surcouche SSR de Vue.js utilisée pour structurer le front-end du CMS avec un routage automatique, un rendu côté serveur et une architecture modulaire facilitant la maintenance à long terme.",
                postId: "cms-interne"
            },
            {
                id: "t3",
                title: "Laravel",
                icon: "laravel",
                description: "Framework PHP servant de socle à l'API REST centralisée. Laravel fournit l'ORM Eloquent, le système de middleware, les migrations et la gestion d'authentification qui structurent l'ensemble du back-end.",
                postId: "cms-interne"
            },
            {
                id: "t4",
                title: "PHP",
                icon: "php",
                description: "Langage serveur de l'API. Utilisé à travers Laravel pour implémenter la logique métier, les middlewares de détection de tenant et les contrôleurs REST.",
                postId: "cms-interne"
            },
            {
                id: "t5",
                title: "MySQL",
                icon: "mysql",
                description: "Base de données relationnelle stockant les contenus, utilisateurs et configurations de chaque tenant. Conteneurisée dans Docker, elle garantit un environnement identique entre les postes de développement et la production.",
                postId: "cms-interne"
            },
            {
                id: "t6",
                title: "Docker",
                icon: "docker",
                description: "L'ensemble de l'environnement de développement est conteneurisé avec Docker : API Laravel, base MySQL et services annexes. Cela permet à chaque développeur de l'équipe de travailler sur une stack identique, reproductible et isolée.",
                postId: "cms-interne"
            },
        ],
        functions: [
            {
                id: "f1",
                title: "Architecture multi-tenant",
                description: "Grâce au package Tenancy for Laravel, une seule API gère plusieurs tenants (sites clients). Chaque tenant dispose de ses propres données isolées, tout en partageant le même code applicatif et la même infrastructure.",
                postId: "cms-interne"
            },
            {
                id: "f2",
                title: "Middleware de détection automatique du tenant",
                description: "Des middlewares personnalisés interceptent chaque requête entrante pour identifier le tenant concerné. Cette détection automatique permet de router les opérations vers le bon contexte de données sans intervention manuelle, rendant la création et la gestion de contenus multi-tenant instantanée.",
                postId: "cms-interne"
            },
            {
                id: "f3",
                title: "API centralisée sites + CMS",
                description: "L'architecture repose sur une API unique qui alimente à la fois les sites internet publics et l'interface CMS interne. Cette centralisation simplifie la maintenance, garantit la cohérence des données et évite la duplication de logique métier.",
                postId: "cms-interne"
            },
            {
                id: "f4",
                title: "Gestion de contenu multi-sites",
                description: "L'interface CMS permet de créer, modifier et publier du contenu qui se propage instantanément sur les sites associés au tenant sélectionné. Un même contenu peut être dupliqué ou synchronisé entre plusieurs tenants en un clic.",
                postId: "cms-interne"
            },
        ],
        images: [],
    },

    {
        id: "projet-template",
        title: "Nom du projet",
        objectif: "Décrivez l'objectif principal du projet.",
        preview: "Courte description affichée dans la liste des projets (2-3 phrases).",
        bilan: "Ce que vous avez appris, les difficultés surmontées et le résultat final.",
        description: "Description détaillée du projet, contexte, architecture et choix techniques.",
        published: false,
        technologies: [
            {id: "t1", title: "PHP", icon: "php", description: "Back-end MVC", postId: "projet-template"},
            {id: "t2", title: "MySQL", icon: "mysql", description: "Base de données", postId: "projet-template"},
            {id: "t3", title: "Laravel", icon: "laravel", description: "Framework PHP", postId: "projet-template"},
            {id: "t4", title: "Vue.js", icon: "vue", description: "Framework JavaScript SPA", postId: "projet-template"},
        ],
        functions: [
            {id: "f1", title: "Fonctionnalité 1", description: "Description de la fonctionnalité.", postId: "projet-template"},
            {id: "f2", title: "Fonctionnalité 2", description: "Description de la fonctionnalité.", postId: "projet-template"},
        ],
        images: [
            {id: "i1", url: "assets/images/placeholder.jpg", postId: "projet-template"},
        ],
    },
];

export default projects;
