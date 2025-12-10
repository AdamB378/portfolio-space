import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, X, ExternalLink, Github, Linkedin, ArrowRight } from 'lucide-react';

const SolarPortfolio = () => {
    const [activePlanet, setActivePlanet] = useState(null);
    const [stars, setStars] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    // Initialisation des étoiles
    useEffect(() => {
        const newStars = [];
        for (let i = 0; i < 150; i++) { // Moins d'étoiles, mais plus variées
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1, // Plus subtil
                duration: Math.random() * 10 + 10, // Scintillement plus lent
            });
        }
        setStars(newStars);
    }, []);

    // Données visuelles repensées pour un look "Cinematic/Natural"
    const planets = [{
            id: 'accueil',
            name: 'Le Noyau',
            icon: Home,
            // Dégradé Or chaud/Blanc, plus "Interstellar" que jaune cartoon
            color: 'bg-gradient-to-br from-amber-100 via-amber-400 to-orange-600',
            shadow: 'shadow-[0_0_50px_rgba(251,191,36,0.4)]',
            size: 'w-24 h-24 md:w-32 md:h-32',
            orbitRadius: 0,
            description: 'Centre'
        },
        {
            id: 'apropos',
            name: 'Origine',
            icon: User,
            // Gris pierre / Lunaire
            color: 'bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600',
            shadow: 'shadow-[0_0_20px_rgba(148,163,184,0.3)]',
            size: 'w-10 h-10 md:w-14 md:h-14',
            orbitRadius: 140,
            orbitDuration: 25,
            description: 'Parcours'
        },
        {
            id: 'competences',
            name: 'Technique',
            icon: Code,
            // Cuivre / Vénus atmosphérique
            color: 'bg-gradient-to-br from-orange-100 via-orange-300 to-red-400',
            shadow: 'shadow-[0_0_25px_rgba(251,146,60,0.3)]',
            size: 'w-12 h-12 md:w-16 md:h-16',
            orbitRadius: 210,
            orbitDuration: 35,
            description: 'Stack'
        },
        {
            id: 'projets',
            name: 'Création',
            icon: Briefcase,
            // Océan profond / Terre nuit (pas de vert/bleu vif)
            color: 'bg-gradient-to-br from-cyan-100 via-blue-500 to-indigo-900',
            shadow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
            size: 'w-14 h-14 md:w-20 md:h-20',
            orbitRadius: 300,
            orbitDuration: 45,
            description: 'Projets'
        },
        {
            id: 'contact',
            name: 'Signal',
            icon: Mail,
            // Rouille / Mars réaliste
            color: 'bg-gradient-to-br from-red-200 via-red-500 to-red-900',
            shadow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]',
            size: 'w-10 h-10 md:w-12 md:h-12',
            orbitRadius: 390,
            orbitDuration: 60,
            description: 'Contact'
        }
    ];

    const content = {
        accueil: {
            title: 'Adam Belhadji',
            subtitle: 'Développeur Full Stack',
            description: 'Bienvenue dans mon écosystème numérique. Je conçois des architectures robustes et des interfaces immersives.',
            tags: ['Architecture', 'Full Stack', 'Game Dev'],
            details: 'Passionné par la convergence entre l\'intelligence artificielle, la cybersécurité et l\'expérience utilisateur. Je transforme des concepts abstraits en réalités fonctionnelles.',
            cta: 'Explorer le système'
        },
        apropos: {
            title: 'Mon Parcours',
            subtitle: 'De la théorie à la pratique',
            description: 'Une formation rigoureuse en CPGE alliée à la pédagogie par projet d\'Epitech.',
            tags: ['Rigueur', 'Adaptabilité', 'Bilingue'],
            details: 'Mon background scientifique (Maths/Physique) me donne une approche analytique du code, tandis que mes projets actuels développent ma créativité technique.',
            highlights: [
                'Développeur autonome',
                'Background scientifique (CPGE)',
                'Bilingue Anglais (Natif/C2)',
                'Expertise IA & Système'
            ]
        },
        competences: {
            title: 'Arsenal Technique',
            subtitle: 'Technologies maîtrisées',
            description: 'Une stack moderne orientée performance et scalabilité.',
            tags: ['Système', 'Web', '3D'],
            details: 'Je navigue entre le bas niveau (C/C++) pour la performance et le haut niveau (JS/Python) pour l\'agilité et l\'IA.',
            highlights: [
                'Core: C, C++, Python, TypeScript',
                'Engine: Unity, Unreal, WebGL',
                'Ops: Docker, Git, Linux CI/CD',
                'AI: Computer Vision, NLP basics'
            ]
        },
        projets: {
            title: 'Réalisations',
            subtitle: 'Projets sélectionnés',
            description: 'Un aperçu de mes travaux en développement web, applicatif et jeu vidéo.',
            tags: ['Innovation', 'R&D', 'Production'],
            details: 'Chaque projet est une réponse concrète à une problématique complexe. Du moteur de jeu à l\'application web distribuée.',
            highlights: [
                'Moteurs de jeux & Expériences 3D',
                'Plateformes Web Interactives',
                'Modules de Reconnaissance Vocale (IA)',
                'Algorithmes de Vision par Ordinateur'
            ]
        },
        contact: {
            title: 'Transmission',
            subtitle: 'Canaux de communication',
            description: 'Ouvert aux opportunités de collaboration et d\'alternance.',
            tags: ['Disponibilité Immédiate', 'Alsace/Remote'],
            details: 'Prêt à intégrer votre équipe pour apporter une valeur ajoutée technique immédiate.',
            highlights: [
                'adam.belhadji@epitech.eu',
                'linkedin.com/in/adam-belhadji',
                'github.com/AdamB378',
                '+33 7 83 13 83 47'
            ]
        }
    };

    return ( <
        div className = "min-h-screen bg-[#0a0a0c] text-slate-200 overflow-hidden relative font-sans selection:bg-amber-500/30" > { /* NOISE OVERLAY - C'est ce qui enlève le côté "plastique" de l'IA */ } <
        div className = "fixed inset-0 opacity-[0.03] pointer-events-none z-[1]"
        style = {
            { backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` } } >
        <
        /div>

        <
        style dangerouslySetInnerHTML = {
            {
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes orbit {
                    from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
                }
                .orbit-anim {
                    animation: orbit var(--duration) linear infinite;
                }
                .paused { animation-play-state: paused; }
                
                /* Typographie élégante */
                .font-display { font-family: system-ui, -apple-system, sans-serif; letter-spacing: 0.1em; }
                
                /* Responsive Orbits */
                @media (max-width: 768px) {
                    .orbit-container { transform: scale(0.6); }
                }
            `
            }
        }
        />

        { /* FOND: Etoiles statiques et subtiles */ } <
        div className = "fixed inset-0 z-0 pointer-events-none" > { /* Un léger dégradé de fond pour donner de la profondeur (vignette) */ } <
        div className = "absolute inset-0 bg-radial-at-c from-transparent via-[#050505] to-black opacity-80" > < /div>

        {
            stars.map(star => ( <
                div key = { star.id }
                className = "absolute bg-white rounded-full mix-blend-screen"
                style = {
                    {
                        left: star.x + '%',
                        top: star.y + '%',
                        width: star.size + 'px',
                        height: star.size + 'px',
                        opacity: star.opacity,
                    }
                }
                />
            ))
        } <
        /div>

        { /* HEADER MINIMALISTE */ } <
        header className = "relative z-20 p-6 md:p-8 flex justify-between items-center mix-blend-difference" >
        <
        div className = "text-xs md:text-sm font-display uppercase tracking-[0.3em] text-slate-500" >
        Portfolio v2 .0 <
        /div> <
        div className = "flex gap-6" >
        <
        a href = "https://github.com/AdamB378"
        target = "_blank"
        rel = "noreferrer"
        className = "text-slate-400 hover:text-white transition-colors duration-300" >
        <
        Github strokeWidth = { 1.5 }
        size = { 20 }
        /> <
        /a> <
        a href = "https://linkedin.com/in/adam-belhadji-261478385"
        target = "_blank"
        rel = "noreferrer"
        className = "text-slate-400 hover:text-white transition-colors duration-300" >
        <
        Linkedin strokeWidth = { 1.5 }
        size = { 20 }
        /> <
        /a> <
        /div> <
        /header>

        { /* MAIN SCENE */ } <
        div className = "relative z-10 h-[80vh] flex items-center justify-center orbit-container" >

        { /* ORBIT RINGS (Fines et élégantes) */ } {
            planets.slice(1).map((planet) => ( <
                div key = { `ring-${planet.id}` }
                className = "absolute rounded-full border border-white/[0.03]"
                style = {
                    {
                        width: planet.orbitRadius * 2 + 'px',
                        height: planet.orbitRadius * 2 + 'px'
                    }
                }
                />
            ))
        }

        { /* PLANETS */ } {
            planets.map((planet, index) => {
                const isSun = index === 0;

                return ( <
                    div key = { planet.id }
                    className = { `absolute flex items-center justify-center ${!isSun ? 'orbit-anim' : ''} group` }
                    style = {
                        {
                            '--radius': planet.orbitRadius + 'px',
                            '--duration': planet.orbitDuration + 's',
                            zIndex: hoveredPlanet === planet.id ? 50 : 20
                        }
                        as React.CSSProperties
                    } >
                    <
                    button onClick = {
                        () => setActivePlanet(planet.id) }
                    onMouseEnter = {
                        () => setHoveredPlanet(planet.id) }
                    onMouseLeave = {
                        () => setHoveredPlanet(null) }
                    className = { `relative ${planet.size} rounded-full transition-all duration-700 ease-out cursor-pointer
                                    ${planet.color} ${planet.shadow}
                                    ${hoveredPlanet === planet.id ? 'scale-110 brightness-110' : 'scale-100'}
                                    ${isSun ? 'animate-pulse-slow' : ''}
                                ` } >
                    { /* Surface Texture Overlay (CSS Radial) */ } <
                    div className = "absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-60" > < /div> <
                    div className = "absolute inset-0 rounded-full shadow-[inset_0_2px_15px_rgba(255,255,255,0.2)]" > < /div>

                    { /* Icone minimaliste (opacité réduite pour laisser vivre la planète) */ } <
                    div className = "absolute inset-0 flex items-center justify-center text-white/90 drop-shadow-md" >
                    <
                    planet.icon strokeWidth = { 1.5 }
                    size = { isSun ? 32 : 18 }
                    className = { isSun ? "text-amber-900" : "" }
                    /> <
                    /div> <
                    /button>

                    { /* Label Flottant (Au survol) */ } <
                    div className = { `absolute pointer-events-none transition-all duration-300 transform 
                                ${hoveredPlanet === planet.id ? 'opacity-100 translate-y-12 md:translate-y-16 scale-100' : 'opacity-0 translate-y-8 scale-90'}
                            ` } >
                    <
                    div className = "flex flex-col items-center" >
                    <
                    div className = "h-4 w-[1px] bg-slate-500/50 mb-2" > < /div> <
                    span className = "text-xs uppercase tracking-[0.2em] text-slate-300 bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full" > { planet.name } <
                    /span> <
                    /div> <
                    /div> <
                    /div>
                );
            })
        } <
        /div>

        { /* MODALE (Style "Glass Card" sophistiqué) */ } {
            activePlanet && ( <
                div className = "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                onClick = {
                    () => setActivePlanet(null) } >
                <
                div className = "absolute inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity duration-500" > < /div>

                <
                div className = "relative w-full max-w-3xl bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
                onClick = {
                    (e) => e.stopPropagation() } >
                { /* Noise Texture sur la carte aussi */ } <
                div className = "absolute inset-0 opacity-[0.05] pointer-events-none z-[0]"
                style = {
                    { backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` } } >
                <
                /div>

                { /* Contenu */ } <
                div className = "relative z-10 flex flex-col md:flex-row h-full max-h-[80vh]" >

                { /* Colonne Gauche (Visuel + Titre) */ } <
                div className = "w-full md:w-1/3 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 p-8 flex flex-col justify-between" >
                <
                div >
                <
                div className = "text-xs font-display uppercase tracking-widest text-slate-500 mb-2" > { planets.find(p => p.id === activePlanet).name } <
                /div> <
                h2 className = "text-3xl font-light text-white mb-4" > { content[activePlanet].title } <
                /h2> <
                div className = "w-12 h-[1px] bg-amber-500/50 mb-6" > < /div> <
                p className = "text-sm text-slate-400 leading-relaxed font-light" > { content[activePlanet].description } <
                /p> <
                /div> <
                div className = "mt-8 flex flex-wrap gap-2" > {
                    content[activePlanet].tags.map((tag, i) => ( <
                        span key = { i }
                        className = "px-2 py-1 text-[10px] uppercase tracking-wider text-slate-300 border border-slate-700 rounded-sm" > { tag } <
                        /span>
                    ))
                } <
                /div> <
                /div>

                { /* Colonne Droite (Détails) */ } <
                div className = "w-full md:w-2/3 p-8 overflow-y-auto" >
                <
                button onClick = {
                    () => setActivePlanet(null) }
                className = "absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors rounded-full hover:bg-white/5" >
                <
                X strokeWidth = { 1 }
                size = { 24 }
                /> <
                /button>

                <
                div className = "space-y-8 mt-4 md:mt-0" >
                <
                div >
                <
                h3 className = "text-sm font-display uppercase tracking-widest text-slate-500 mb-4" > Détails < /h3> <
                p className = "text-slate-300 font-light leading-relaxed" > { content[activePlanet].details } <
                /p> <
                /div>

                {
                    content[activePlanet].highlights && ( <
                        div >
                        <
                        h3 className = "text-sm font-display uppercase tracking-widest text-slate-500 mb-4" > Points Clés < /h3> <
                        ul className = "grid grid-cols-1 gap-3" > {
                            content[activePlanet].highlights.map((highlight, i) => ( <
                                li key = { i }
                                className = "flex items-center gap-3 text-slate-300 font-light" >
                                <
                                span className = "w-1.5 h-1.5 bg-amber-500 rounded-full" > < /span> { highlight } <
                                /li>
                            ))
                        } <
                        /ul> <
                        /div>
                    )
                }

                {
                    activePlanet === 'contact' && ( <
                        div className = "pt-4" >
                        <
                        a href = "mailto:adam.belhadji@epitech.eu"
                        className = "inline-flex items-center gap-3 px-6 py-3 bg-slate-100 text-black hover:bg-white transition-colors rounded-sm text-sm uppercase tracking-wider font-medium" >
                        <
                        span > Me contacter < /span> <
                        ArrowRight size = { 16 }
                        /> <
                        /a> <
                        /div>
                    )
                } <
                /div> <
                /div> <
                /div> <
                /div> <
                /div>
            )
        }

        <
        div className = "fixed bottom-6 w-full text-center pointer-events-none z-20" >
        <
        p className = "text-[10px] uppercase tracking-[0.3em] text-slate-600" >
        Système de Navigation v2 <
        /p> <
        /div> <
        /div>
    );
};

export default SolarPortfolio;