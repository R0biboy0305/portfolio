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
        id: "projet-2",
        title: "Nom du projet",
        objectif: "Décrivez l'objectif principal du projet.",
        preview: "Courte description affichée dans la liste des projets (2-3 phrases).",
        bilan: "Ce que vous avez appris, les difficultés surmontées et le résultat final.",
        description: "Description détaillée du projet, contexte, architecture et choix techniques.",
        published: false,
        technologies: [
            {id: "t1", title: "PHP", icon: "php", description: "Back-end MVC", postId: "projet-2"},
            {id: "t2", title: "MySQL", icon: "mysql", description: "Base de données", postId: "projet-2"},
            {id: "t3", title: "Laravel", icon: "laravel", description: "Framework PHP", postId: "projet-2"},
            {id: "t4", title: "Vue.js", icon: "vue", description: "Framework JavaScript SPA", postId: "projet-2"},
        ],
        functions: [
            {id: "f1", title: "Fonctionnalité 1", description: "Description de la fonctionnalité.", postId: "projet-2"},
            {id: "f2", title: "Fonctionnalité 2", description: "Description de la fonctionnalité.", postId: "projet-2"},
        ],
        images: [
            {id: "i1", url: "assets/images/placeholder.jpg", postId: "projet-2"},
        ],
    },
];

export default projects;
