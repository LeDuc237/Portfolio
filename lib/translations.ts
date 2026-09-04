export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for opportunities",
      title1: "Building digital",
      title2: "products with purpose.",
      intro:
        "I'm Duchel Decarte, a Junior Software Engineer focused on creating reliable, thoughtful experiences for the web.",
      cta1: "View my projects",
      cta2: "Let's work together",
      stat1n: "3+",
      stat1l: "Years of experience",
      stat2n: "23",
      stat2l: "Projects delivered",
      stat3n: "Yaoundé",
      stat3l: "Based in Cameroon",
      cardStatus: "Currently building",
      cardNum: "01 / 04",
      cardDev: "Developer",
      cardDesign: "Designer",
      cardSolver: "Solver",
      tagReact: "React",
      tagOffline: "Offline-first",
    },
    about: {
      num: "01",
      eyebrow: "A little about me",
      title1: "Curious by nature.",
      title2: "Precise by choice.",
      lead: "I believe good software should feel simple, even when the problems behind it are complex.",
      body: "From e-commerce platforms to offline-first business tools, I enjoy turning real-world needs into clear, useful products. I'm building my career with intention: learning constantly, collaborating openly, and shipping work I'm proud of.",
      link: "Get to know me",
      notes: [
        { index: "01", title: "Human-centered", text: "Technology that makes everyday work easier." },
        { index: "02", title: "Built to last", text: "Clean foundations, thoughtful details, steady growth." },
        { index: "03", title: "Always learning", text: "Curious about better tools and better ways to build." },
      ],
    },
    skills: {
      num: "02",
      eyebrow: "My toolkit",
      title1: "Tools for turning",
      title2: "ideas into reality.",
      summary:
        "My everyday stack is focused on building modern, fast and maintainable products from front to back.",
      groups: [
        { label: "Frontend", number: "01" },
        { label: "Backend & data", number: "02" },
        { label: "Infrastructure", number: "03" },
        { label: "AI & workflow", number: "04" },
      ],
    },
    experience: {
      num: "03",
      eyebrow: "The journey so far",
      title1: "Growing through",
      title2: "real-world work.",
      items: [
        {
          date: "2021",
          title: "Started coding",
          description:
            "Discovered web development and built strong foundations in HTML, CSS and JavaScript.",
        },
        {
          date: "2022 — 2023",
          title: "Found my stack",
          description:
            "Moved into React and TypeScript, building more complex interfaces and learning how to structure products for growth.",
        },
        {
          date: "2024 — 2026",
          title: "Shipping for real people",
          description:
            "Delivered e-commerce, medical, chemical and internal business products for clients in Cameroon and France.",
        },
      ],
    },
    projects: {
      num: "04",
      eyebrow: "Selected work",
      title1: "Things I've helped",
      title2: "bring to life.",
      sub: "Real products, real constraints, and a lot of care in the details.",
      visit: "Visit site",
      private: "Private",
      live: "Live",
      github: "GitHub",
      more: "More work across web, business tools and digital products",
      viewGithub: "View GitHub",
      items: [
        {
          name: "MARKET",
          type: "Full-stack PWA · 2026-2027",
          description: "A complete Progressive Web App marketplace with real app-like experience, featuring offline support, real-time updates, and full e-commerce capabilities.",
          problem: "Built a full-featured marketplace platform that works like a native app, with advanced search, user authentication, real-time inventory, and payment processing.",
          features: ["PWA with offline support", "Real-time inventory", "User authentication", "Payment integration", "Advanced search", "Order tracking"],
        },
        {
          name: "FOROMAMED",
          type: "E-commerce · 2024",
          description:
            "Smart shopping for orthopedic equipment in Yaoundé, with FCFA pricing and intelligent product search.",
          problem: "Helped a local medical equipment business reach customers online with a fast, searchable catalog.",
          features: ["FCFA pricing", "Smart product search", "Supabase backend", "Order management"],
        },
        {
          name: "YourChemLab",
          type: "Web platform · 2024",
          description:
            "A clear digital home for a chemical products lab and supplier — catalog, services, and client contact.",
          problem: "Gave a chemical supplier a professional online presence to showcase services and attract clients.",
          features: ["Service catalog", "Contact forms", "Responsive design", "Vite-powered"],
        },
        {
          name: "GeoCasa",
          type: "PWA · Ongoing",
          description:
            "Offline-first cadastral and real-estate management — files, phases, payments, all accessible without stable internet.",
          problem: "Solved unreliable connectivity for field agents by building a PWA that works fully offline.",
          features: ["Offline-first PWA", "IndexedDB sync", "Cadastral management", "Payment tracking"],
        },
        {
          name: "ORTHOMEDICAL",
          type: "E-commerce · 2025",
          description:
            "Product catalog and order management for a medical equipment business in Yaoundé.",
          problem: "Expanded a medical equipment business's reach with a modern e-commerce platform.",
          features: ["Next.js SSR", "PostgreSQL catalog", "Order management", "FCFA pricing"],
        },
        {
          name: "Blend Hair",
          type: "E-commerce · 2025",
          description:
            "E-commerce platform for afro kinky hair — 100% human hair, with Stripe payment integration.",
          problem: "Built a complete online store with secure card payments for a hair products brand.",
          features: ["Stripe checkout", "Product catalog", "TypeScript", "Supabase"],
        },
        {
          name: "Ingénuim Elect",
          type: "Showcase · 2024",
          description:
            "Showcase site for an electrical engineering company in France — services and past work.",
          problem: "Created a professional showcase for a French electrical engineering firm to present their services.",
          features: ["Service showcase", "Project gallery", "Tailwind CSS", "Responsive"],
        },
      ],
    },
    services: {
      num: "05",
      eyebrow: "What I can do for you",
      title1: "Services built",
      title2: "around your needs.",
      sub: "From a simple landing page to a full web application, I can help you build the right product.",
      items: [
        {
          title: "Website Development",
          desc: "Custom websites that are fast, responsive and built to convert visitors into customers.",
          icon: "globe",
        },
        {
          title: "Web Application Development",
          desc: "Interactive web apps with React, TypeScript and modern backend technologies.",
          icon: "app",
        },
        {
          title: "Responsive Design",
          desc: "Every product I build works flawlessly on mobile, tablet and desktop.",
          icon: "mobile",
        },
        {
          title: "Frontend Development",
          desc: "Pixel-perfect, accessible interfaces with React, Next.js and Tailwind CSS.",
          icon: "code",
        },
        {
          title: "Backend Development",
          desc: "Reliable APIs and databases with Supabase, PostgreSQL and PHP.",
          icon: "server",
        },
        {
          title: "Website Maintenance",
          desc: "Ongoing support, updates and improvements to keep your product running smoothly.",
          icon: "wrench",
        },
      ],
    },
    contact: {
      num: "06",
      eyebrow: "Have a project in mind?",
      title1: "Let's make something",
      title2: "useful together.",
      body: "Whether you have a clear brief or just an early idea, I'd be happy to hear about it.",
      cta: "Start a conversation",
      details: [
        { label: "WhatsApp", value: "+237 651 203 488", href: "https://wa.me/237651203488" },
        { label: "Email", value: "ducheldecarte@gmail.com", href: "mailto:ducheldecarte@gmail.com" },
        { label: "GitHub", value: "github.com/leduc237", href: "https://github.com/leduc237" },
        { label: "LinkedIn", value: "linkedin.com/in/duchel-decarte", href: "https://www.linkedin.com/in/duchel-decarte" },
        { label: "Location", value: "Yaoundé, Cameroon", href: null },
      ],
    },
    footer: {
      copyright: "© 2026 Duchel Decarte. Built with curiosity and care.",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Phone",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Parcours",
      projects: "Projets",
      services: "Services",
      contact: "Contact",
      cta: "Me contacter",
    },
    hero: {
      badge: "Disponible pour de nouvelles opportunités",
      title1: "Construire des produits",
      title2: "numériques avec sens.",
      intro:
        "Je suis Duchel Decarte, développeur logiciel junior, spécialisé dans la création d'explications web fiables et réfléchies.",
      cta1: "Voir mes projets",
      cta2: "Travaillons ensemble",
      stat1n: "3+",
      stat1l: "Ans d'expérience",
      stat2n: "23",
      stat2l: "Projets livrés",
      stat3n: "Yaoundé",
      stat3l: "Basé au Cameroun",
      cardStatus: "En cours de développement",
      cardNum: "01 / 04",
      cardDev: "Développeur",
      cardDesign: "Designer",
      cardSolver: "Résolveur",
      tagReact: "React",
      tagOffline: "Offline-first",
    },
    about: {
      num: "01",
      eyebrow: "À propos de moi",
      title1: "Curieux par nature.",
      title2: "Précis par choix.",
      lead: "Je crois qu'un bon logiciel doit paraître simple, même quand les problèmes qu'il résout sont complexes.",
      body: "Des plateformes e-commerce aux outils métier offline-first, j'aime transformer des besoins réels en produits clairs et utiles. Je construis ma carrière avec intention : apprendre constamment, collaborer ouvertement et livrer un travail dont je suis fier.",
      link: "Faire connaissance",
      notes: [
        { index: "01", title: "Centré sur l'humain", text: "Une technologie qui simplifie le travail quotidien." },
        { index: "02", title: "Conçu pour durer", text: "Des fondations propres, des détails soignés, une croissance régulière." },
        { index: "03", title: "Toujours apprendre", text: "Curieux de meilleurs outils et de meilleures méthodes." },
      ],
    },
    skills: {
      num: "02",
      eyebrow: "Ma boîte à outils",
      title1: "Les outils pour transformer",
      title2: "les idées en réalité.",
      summary:
        "Ma stack quotidienne est centrée sur la création de produits modernes, rapides et maintenables, du front-end au back-end.",
      groups: [
        { label: "Frontend", number: "01" },
        { label: "Backend & données", number: "02" },
        { label: "Infrastructure", number: "03" },
        { label: "IA & productivité", number: "04" },
      ],
    },
    experience: {
      num: "03",
      eyebrow: "Le parcours jusqu'ici",
      title1: "Grandir à travers",
      title2: "le travail concret.",
      items: [
        {
          date: "2021",
          title: "Premiers pas en code",
          description:
            "Découverte du développement web et solides fondations en HTML, CSS et JavaScript.",
        },
        {
          date: "2022 — 2023",
          title: "Ma stack trouvée",
          description:
            "Passage à React et TypeScript, construction d'interfaces plus complexes et apprentissage de la structuration de produits pour la croissance.",
        },
        {
          date: "2024 — 2026",
          title: "Livrer pour de vraies personnes",
          description:
            "Livraison de produits e-commerce, médicaux, chimiques et d'outils internes pour des clients au Cameroun et en France.",
        },
      ],
    },
    projects: {
      num: "04",
      eyebrow: "Travaux sélectionnés",
      title1: "Ce que j'ai aidé à",
      title2: "faire naître.",
      sub: "Des produits réels, des contraintes réelles et beaucoup de soin dans les détails.",
      visit: "Voir le site",
      private: "Privé",
      live: "En ligne",
      github: "GitHub",
      more: "Plus de projets sur le web, les outils métier et les produits numériques",
      viewGithub: "Voir mon GitHub",
      items: [
        {
          name: "MARKET",
          type: "PWA Full-stack · 2026-2027",
          description: "Une Progressive Web App complète avec une expérience similaire à une application native, offrant un support hors ligne, des mises à jour en temps réel et des fonctionnalités e-commerce complètes.",
          problem: "Construit une plateforme de marché complète qui fonctionne comme une application native, avec recherche avancée, authentification utilisateur, inventaire en temps réel et traitement des paiements.",
          features: ["PWA avec support hors ligne", "Inventaire en temps réel", "Authentification utilisateur", "Intégration de paiement", "Recherche avancée", "Suivi des commandes"],
        },
        {
          name: "FOROMAMED",
          type: "E-commerce · 2024",
          description:
            "Achat intelligent de matériel orthopédique à Yaoundé, avec tarification en FCFA et recherche produit intelligente.",
          problem: "Aidé une entreprise locale de matériel médical à atteindre ses clients en ligne avec un catalogue rapide et recherchable.",
          features: ["Prix en FCFA", "Recherche produit intelligente", "Backend Supabase", "Gestion des commandes"],
        },
        {
          name: "YourChemLab",
          type: "Plateforme web · 2024",
          description:
            "Une vitrine numérique claire pour un laboratoire et fournisseur de produits chimiques — catalogue, services et contact client.",
          problem: "Donné à un fournisseur chimique une présence en ligne professionnelle pour présenter ses services et attirer des clients.",
          features: ["Catalogue de services", "Formulaires de contact", "Design responsive", "Propulsé par Vite"],
        },
        {
          name: "GeoCasa",
          type: "PWA · En cours",
          description:
            "Gestion cadastrale et immobilière offline-first — dossiers, phases, paiements, accessibles sans connexion stable.",
          problem: "Résolu la connectivité instable pour les agents de terrain avec une PWA qui fonctionne entièrement hors ligne.",
          features: ["PWA offline-first", "Synchronisation IndexedDB", "Gestion cadastrale", "Suivi des paiements"],
        },
        {
          name: "ORTHOMEDICAL",
          type: "E-commerce · 2025",
          description:
            "Catalogue produit et gestion des commandes pour une entreprise de matériel médical à Yaoundé.",
          problem: "Élargi la portée d'une entreprise de matériel médical avec une plateforme e-commerce moderne.",
          features: ["Next.js SSR", "Catalogue PostgreSQL", "Gestion des commandes", "Prix en FCFA"],
        },
        {
          name: "Blend Hair",
          type: "E-commerce · 2025",
          description:
            "Plateforme e-commerce de cheveux afro kinky — 100% cheveux humains, avec intégration de paiement Stripe.",
          problem: "Construit une boutique en ligne complète avec paiements par carte sécurisés pour une marque de produits capillaires.",
          features: ["Checkout Stripe", "Catalogue produit", "TypeScript", "Supabase"],
        },
        {
          name: "Ingénuim Elect",
          type: "Vitrine · 2024",
          description:
            "Site vitrine pour une entreprise d'ingénierie électrique en France — services et réalisations.",
          problem: "Créé une vitrine professionnelle pour une entreprise française d'ingénierie électrique.",
          features: ["Vitrine de services", "Galerie de projets", "Tailwind CSS", "Responsive"],
        },
      ],
    },
    services: {
      num: "05",
      eyebrow: "Ce que je peux faire pour vous",
      title1: "Des services construits",
      title2: "autour de vos besoins.",
      sub: "D'une simple page de présentation à une application web complète, je peux vous aider à construire le bon produit.",
      items: [
        {
          title: "Développement de sites web",
          desc: "Des sites sur mesure, rapides, responsive et conçus pour convertir vos visiteurs en clients.",
          icon: "globe",
        },
        {
          title: "Développement d'applications web",
          desc: "Des applications web interactives avec React, TypeScript et des technologies backend modernes.",
          icon: "app",
        },
        {
          title: "Design responsive",
          desc: "Chaque produit que je construis fonctionne parfaitement sur mobile, tablette et ordinateur.",
          icon: "mobile",
        },
        {
          title: "Développement frontend",
          desc: "Des interfaces pixel-perfect et accessibles avec React, Next.js et Tailwind CSS.",
          icon: "code",
        },
        {
          title: "Développement backend",
          desc: "Des API et bases de données fiables avec Supabase, PostgreSQL et PHP.",
          icon: "server",
        },
        {
          title: "Maintenance de sites",
          desc: "Support continu, mises à jour et améliorations pour garder votre produit en parfait état.",
          icon: "wrench",
        },
      ],
    },
    contact: {
      num: "06",
      eyebrow: "Un projet en tête ?",
      title1: "Créons quelque chose",
      title2: "d'utile ensemble.",
      body: "Que vous ayez un cahier des charges précis ou juste une idée naissante, je serais ravi d'en discuter.",
      cta: "Démarrer une conversation",
      details: [
        { label: "WhatsApp", value: "+237 651 203 488", href: "https://wa.me/237651203488" },
        { label: "Email", value: "ducheldecarte@gmail.com", href: "mailto:ducheldecarte@gmail.com" },
        { label: "GitHub", value: "github.com/leduc237", href: "https://github.com/leduc237" },
        { label: "LinkedIn", value: "linkedin.com/in/duchel-decarte", href: "https://www.linkedin.com/in/duchel-decarte" },
        { label: "Localisation", value: "Yaoundé, Cameroun", href: null },
      ],
    },
    footer: {
      copyright: "© 2026 Duchel Decarte. Conçu avec curiosité et soin.",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Téléphone",
    },
  },
} as const;
