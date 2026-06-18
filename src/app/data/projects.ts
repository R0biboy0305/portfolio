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
        id: "budgettracker",
        title: "BudgetTracker",
        objectif: "Concevoir une application mobile cross-platform permettant aux utilisateurs de suivre leurs dépenses quotidiennes, de définir des budgets mensuels par catégorie et de visualiser leurs habitudes financières via des graphiques interactifs.",
        preview: "Application Flutter de suivi budgétaire personnel. L'utilisateur renseigne ses dépenses, les catégorise et visualise en temps réel l'évolution de son budget via des graphiques dynamiques. Les données sont synchronisées via Firebase Firestore.",
        bilan: "Ce projet m'a permis d'approfondir Flutter et la gestion d'état avec Riverpod. L'intégration Firebase Firestore en temps réel a été un challenge intéressant, notamment pour la gestion des conflits de synchronisation offline/online.",
        description: "Application mobile Flutter avec Firebase pour la gestion budgétaire personnelle.",
        published: true,
        technologies: [
            {id: "t1", title: "Flutter", icon: "flutter", description: "Framework cross-platform pour iOS et Android avec une seule base de code Dart.", postId: "budgettracker"},
            {id: "t2", title: "Firebase", icon: "firebase", description: "Backend as a Service : Firestore pour la BDD temps réel, Auth pour l'authentification.", postId: "budgettracker"},
            {id: "t3", title: "Dart", icon: "dart", description: "Langage typé orienté objet, compilé nativement pour des performances mobiles optimales.", postId: "budgettracker"},
        ],
        functions: [
            {id: "f1", title: "Tableau de bord budgétaire", description: "Vue synthétique du mois en cours : dépenses par catégorie, budget restant, progression vers les objectifs.", postId: "budgettracker"},
            {id: "f2", title: "Ajout de dépenses rapide", description: "Interface simplifiée pour saisir une dépense en moins de 3 taps, avec catégorisation automatique par IA.", postId: "budgettracker"},
        ],
        images: [
            {id: "i1", url: "assets/images/p1/p1-1.png", postId: "budgettracker"},
            {id: "i2", url: "assets/images/p1/p1-2.png", postId: "budgettracker"},
        ],
    },

    {
        id: "ecoshop",
        title: "EcoShop",
        objectif: "Développer une marketplace e-commerce spécialisée dans les produits éco-responsables, avec un système de notation environnementale pour chaque produit, un panier multi-vendeurs et un back-office complet pour les marchands.",
        preview: "Marketplace Laravel/Vue.js dédiée aux produits éco-responsables. Chaque article affiche un score environnemental calculé sur la chaîne de production. Le back-office vendor permet la gestion des stocks, commandes et statistiques de vente en temps réel.",
        bilan: "Projet ambitieux qui m'a confronté aux défis des architectures multi-tenant. La conception du système de scoring environnemental a nécessité une modélisation de données complexe. Laravel Sanctum pour l'auth API a simplifié l'intégration avec Vue.js.",
        description: "Marketplace e-commerce éco-responsable construite avec Laravel et Vue.js.",
        published: true,
        technologies: [
            {id: "t1", title: "Laravel", icon: "laravel", description: "Framework PHP MVC pour l'API REST, l'authentification Sanctum et la gestion des queues.", postId: "ecoshop"},
            {id: "t2", title: "Vue.js", icon: "vue", description: "SPA frontend avec Pinia pour la gestion d'état et Vue Router pour la navigation.", postId: "ecoshop"},
            {id: "t3", title: "MySQL", icon: "mysql", description: "Base de données relationnelle pour la gestion des produits, commandes et vendeurs.", postId: "ecoshop"},
            {id: "t4", title: "PHP", icon: "php", description: "Back-end solide avec PHP 8.2, typage strict et architecture hexagonale.", postId: "ecoshop"},
        ],
        functions: [
            {id: "f1", title: "Score environnemental", description: "Algorithme de calcul du score éco basé sur l'origine, le transport, l'emballage et la durée de vie du produit.", postId: "ecoshop"},
            {id: "f2", title: "Back-office vendeur", description: "Dashboard complet : gestion des stocks, suivi des commandes, statistiques de vente et exports CSV.", postId: "ecoshop"},
        ],
        images: [
            {id: "i1", url: "assets/images/p1/p1-2.png", postId: "ecoshop"},
            {id: "i2", url: "assets/images/p1/p1-3.png", postId: "ecoshop"},
        ],
    },

    {
        id: "taskflow",
        title: "TaskFlow",
        objectif: "Créer un SaaS de gestion de projets en mode Kanban inspiré de Trello, avec des fonctionnalités de collaboration temps réel, de gestion des rôles par workspace et d'automatisation des workflows via des règles configurables.",
        preview: "SaaS Kanban Next.js avec collaboration temps réel via WebSockets. Les équipes créent des boards, assignent des tâches et suivent la progression des sprints. L'automatisation des workflows permet de déclencher des actions automatiques sur des événements métier.",
        bilan: "La partie temps réel avec les WebSockets a été la plus complexe à implémenter, notamment la gestion des conflits lors d'éditions simultanées. Next.js App Router avec Server Actions a considérablement simplifié la couche API.",
        description: "SaaS de gestion de projets Kanban avec Next.js et collaboration temps réel.",
        published: true,
        technologies: [
            {id: "t1", title: "Next.js", icon: "next", description: "App Router, Server Actions et Server Components pour une architecture hybride performante.", postId: "taskflow"},
            {id: "t2", title: "TypeScript", icon: "typescript", description: "Typage strict end-to-end avec partage des types entre front et back via des modules communs.", postId: "taskflow"},
            {id: "t3", title: "Tailwind CSS", icon: "tailwind", description: "Design system cohérent avec Tailwind, animations CSS pour le drag & drop des cartes.", postId: "taskflow"},
        ],
        functions: [
            {id: "f1", title: "Boards Kanban drag & drop", description: "Glisser-déposer des cartes entre colonnes avec mise à jour optimiste et synchronisation temps réel.", postId: "taskflow"},
            {id: "f2", title: "Automatisations de workflow", description: "Moteur de règles : déplacer une carte si X, notifier si Y, assigner automatiquement selon des critères.", postId: "taskflow"},
        ],
        images: [
            {id: "i1", url: "assets/images/p1/p1-3.png", postId: "taskflow"},
            {id: "i2", url: "assets/images/p1/p1-4.png", postId: "taskflow"},
        ],
    },

    {
        id: "devblog",
        title: "DevBlog",
        objectif: "Construire un blog technique personnel entièrement statique avec Nuxt Content, permettant de rédiger des articles en Markdown avec coloration syntaxique, table des matières automatique et recherche full-text côté client.",
        preview: "Blog technique Nuxt.js/Nuxt Content avec rédaction en Markdown. Génération statique pour des performances maximales et un SEO optimal. Inclut une recherche full-text, une table des matières dynamique et une estimation du temps de lecture.",
        bilan: "Nuxt Content a énormément simplifié la gestion du contenu Markdown. Le plus challengeant a été l'implémentation de la recherche full-text sans backend, résolue avec un index pré-généré au build et MiniSearch côté client.",
        description: "Blog technique statique Nuxt.js avec Nuxt Content et génération de pages à partir de fichiers Markdown.",
        published: true,
        technologies: [
            {id: "t1", title: "Nuxt.js", icon: "nuxt", description: "Framework Vue.js avec génération statique (SSG) pour des performances et un SEO optimaux.", postId: "devblog"},
            {id: "t2", title: "Vue.js", icon: "vue", description: "Composants interactifs : table des matières dynamique, fil d'Ariane, lecteur de progression.", postId: "devblog"},
            {id: "t3", title: "TypeScript", icon: "typescript", description: "Typage des modèles de contenu Markdown pour éviter les erreurs de configuration.", postId: "devblog"},
        ],
        functions: [
            {id: "f1", title: "Rédaction Markdown avancée", description: "Support MDX avec composants Vue intégrés, coloration syntaxique Shiki et diagrammes Mermaid.", postId: "devblog"},
            {id: "f2", title: "Recherche full-text client", description: "Index pré-généré au build, recherche instantanée avec MiniSearch sans requête serveur.", postId: "devblog"},
        ],
        images: [
            {id: "i1", url: "assets/images/p1/p1-4.png", postId: "devblog"},
            {id: "i2", url: "assets/images/p1/p1-1.png", postId: "devblog"},
        ],
    },

    {
        id: "sportapp",
        title: "SportApp",
        objectif: "Développer une application mobile Flutter de suivi sportif permettant de logger des séances d'entraînement, de suivre l'évolution des performances dans le temps et de générer des programmes d'entraînement personnalisés via une IA.",
        preview: "Application Flutter de coaching sportif personnel. L'utilisateur enregistre ses séances, suit ses PR (personal records) et reçoit des recommandations d'entraînement adaptées à sa progression. Intégration avec les capteurs du téléphone pour la détection automatique d'exercices.",
        bilan: "Le plus complexe a été l'intégration des capteurs IMU du téléphone pour la détection automatique des répétitions. L'algorithme de recommandation basé sur la surcharge progressive a nécessité une modélisation fine du domaine sportif.",
        description: "Application mobile Flutter de tracking sportif avec IA pour la personnalisation des programmes.",
        published: true,
        technologies: [
            {id: "t1", title: "Flutter", icon: "flutter", description: "UI riche et performante avec des animations fluides pour les graphiques de progression.", postId: "sportapp"},
            {id: "t2", title: "Dart", icon: "dart", description: "Algorithmes de progression sportive et logique métier d'entraînement en Dart natif.", postId: "sportapp"},
            {id: "t3", title: "Firebase", icon: "firebase", description: "Firestore pour la synchronisation des séances, Auth pour la gestion des comptes.", postId: "sportapp"},
        ],
        functions: [
            {id: "f1", title: "Logger de séances", description: "Interface rapide pour enregistrer exercices, séries, répétitions et charges avec timer intégré.", postId: "sportapp"},
            {id: "f2", title: "Graphiques de progression", description: "Visualisation des PR, volumes hebdomadaires et tendances sur 30/90 jours par groupe musculaire.", postId: "sportapp"},
        ],
        images: [
            {id: "i1", url: "assets/images/p1/p1-1.png", postId: "sportapp"},
            {id: "i2", url: "assets/images/p1/p1-3.png", postId: "sportapp"},
        ],
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
