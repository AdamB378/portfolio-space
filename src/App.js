import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, X, ExternalLink, Github, Linkedin } from 'lucide-react';

const SolarPortfolio = () => {
    const [activePlanet, setActivePlanet] = useState(null);
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    useEffect(() => {
        const newStars = [];
        for (let i = 0; i < 300; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2.5 + 0.5,
                duration: Math.random() * 4 + 2,
                delay: Math.random() * 5
            });
        }
        setStars(newStars);

        const meteorInterval = setInterval(() => {
            const newMeteor = {
                id: Date.now(),
                x: Math.random() * 100,
                y: -10,
                size: Math.random() * 80 + 40
            };
            setMeteors(prev => [...prev.slice(-5), newMeteor]);
        }, 2500);

        return () => clearInterval(meteorInterval);
    }, []);

    const planets = [{
            id: 'accueil',
            name: 'Soleil',
            icon: Home,
            color: 'from-yellow-300 via-orange-400 to-orange-500',
            size: 'w-28 h-28',
            description: 'Centre de mon univers'
        },
        {
            id: 'apropos',
            name: 'Mercure',
            icon: User,
            color: 'from-gray-300 via-gray-400 to-gray-500',
            size: 'w-14 h-14',
            description: 'Mon parcours'
        },
        {
            id: 'competences',
            name: 'Vénus',
            icon: Code,
            color: 'from-orange-200 via-orange-300 to-orange-400',
            size: 'w-16 h-16',
            description: 'Mes technologies'
        },
        {
            id: 'projets',
            name: 'Terre',
            icon: Briefcase,
            color: 'from-blue-400 via-blue-500 to-green-500',
            size: 'w-16 h-16',
            description: 'Mes réalisations'
        },
        {
            id: 'contact',
            name: 'Mars',
            icon: Mail,
            color: 'from-red-400 via-red-500 to-red-600',
            size: 'w-14 h-14',
            description: 'Me contacter'
        }
    ];

    const content = {
        accueil: {
            title: 'Bienvenue dans mon Univers',
            subtitle: 'Étudiant en MSC Informatique à EPITECH Strasbourg',
            description: 'Explorez mon système solaire personnel où chaque planète révèle une facette de mon parcours professionnel et académique.',
            tags: ['C/C++', 'Python', 'JavaScript', 'Unity', 'Unreal Engine'],
            details: 'Étudiant passionné par l\'IA, la cybersécurité et le développement de jeux vidéo. Je transforme des idées innovantes en solutions concrètes alliant technologie et créativité.',
            cta: 'Commencer l\'exploration'
        },
        apropos: {
            title: 'À Propos de Moi',
            subtitle: 'Étudiant & Développeur Passionné',
            description: 'Un développeur créatif avec une passion pour l\'innovation technologique et l\'intelligence artificielle',
            tags: ['EPITECH MSC 2025-2028', 'CPGE PC Fabert', 'Bilingue Anglais', 'Alternance'],
            details: 'Actuellement en Master of Science à EPITECH Strasbourg (2025-2028), je recherche une alternance pour l\'année 2025-2026 (rythme : 4 semaines en entreprise / 2 en école). Issu d\'une classe préparatoire PCSI-PC au lycée Fabert, j\'allie rigueur scientifique et créativité technique.',
            highlights: [
                '🎓 Formation MSC à EPITECH Strasbourg (2025-2028)',
                '📚 CPGE PCSI-PC au lycée Fabert (2023-2025)',
                '🌍 Bilingue anglais (Bac Américain)',
                '🔍 En recherche d\'alternance pour janvier 2026',
                '💡 Passionné par l\'IA, cybersécurité et développement de jeux'
            ]
        },
        competences: {
            title: 'Mes Compétences',
            subtitle: 'Technologies & Savoir-Faire',
            description: 'Des compétences variées en développement logiciel, IA et méthodologies agiles',
            tags: ['Développement', 'IA', 'Jeux Vidéo', 'Web'],
            details: 'Compétences solides en programmation système, développement web et mobile, avec une spécialisation en intelligence artificielle et création de jeux vidéo.',
            highlights: [
                '💻 Langages: C, C++, Python, JavaScript, HTML/CSS, SQL',
                '🎮 Game Dev: Unity, Unreal Engine, Roblox',
                '🛠️ Outils: Git/GitHub, Docker, Linux, VS Code',
                '🔄 Méthodologies: Agile/Scrum, Pair Programming, CI/CD',
                '🤖 Spécialités: IA reconnaissance vocale, APIs REST',
                '🌐 Web: Sites interactifs, interfaces responsive'
            ]
        },
        projets: {
            title: 'Mes Projets',
            subtitle: 'Réalisations & Expérimentations',
            description: 'Des projets diversifiés mêlant créativité et expertise technique',
            tags: ['Cloud', 'IA', 'Web', 'Innovation'],
            details: 'Portfolio varié couvrant le développement de jeux vidéo, l\'intelligence artificielle et le web. Chaque projet est une opportunité d\'apprendre et de repousser mes limites.',
            highlights: [
                '🎮 Mini-jeux 2D/3D - Unity, Unreal Engine et Roblox (équipe & solo)',
                '🌐 Sites web interactifs - Plateformes dynamiques avec gestion de contenu',
                '🎤 IA reconnaissance vocale - Interprétation de commandes vocales',
                '🚀 Projets innovants - Machine learning et vision par ordinateur',

            ]
        },
        contact: {
            title: 'Contactez-Moi',
            subtitle: 'En recherche d\'alternance',
            description: 'Disponible pour une alternance selon vos besoins',
            tags: ['Alternance', 'Stage', 'Projets', 'Collaboration'],
            details: 'Recherche activement une alternance pour janvier 2026 (rythme 4 semaines entreprise / 2 semaines école). Ouvert aux opportunités en développement logiciel, intelligence artificielle, cybersécurité ou game development.',
            highlights: [
                '✉️ Email: adam.belhadji@epitech.eu',
                '💼 LinkedIn: linkedin.com/in/adam-belhadji-261478385',
                '🐙 GitHub: github.com/AdamB378',
                '📱 Tél: 07 83 13 83 47',
                '📍 Mittelhausbergen, Alsace',
                '⏰ Disponible dès janvier 2026'
            ]
        }
    };

    return ( <
        div className = "min-h-screen bg-black text-white overflow-hidden relative" >
        <
        style dangerouslySetInnerHTML = {
            {
                __html: `
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes orbit1 {
            from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
          }
          @keyframes orbit2 {
            from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
          }
          @keyframes orbit3 {
            from { transform: rotate(0deg) translateX(290px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(290px) rotate(-360deg); }
          }
          @keyframes orbit4 {
            from { transform: rotate(0deg) translateX(360px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(360px) rotate(-360deg); }
          }
          @keyframes meteorFall {
            from { 
              transform: translateY(0) translateX(0) rotate(45deg);
              opacity: 1;
            }
            to { 
              transform: translateY(150vh) translateX(150vh) rotate(45deg);
              opacity: 0;
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(40px) scale(0.95); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 80px rgba(251, 146, 60, 0.6), 0 0 120px rgba(250, 204, 21, 0.4); }
            50% { box-shadow: 0 0 100px rgba(251, 146, 60, 0.8), 0 0 150px rgba(250, 204, 21, 0.6); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .orbit-1 { animation: orbit1 25s linear infinite; }
          .orbit-2 { animation: orbit2 35s linear infinite; }
          .orbit-3 { animation: orbit3 45s linear infinite; }
          .orbit-4 { animation: orbit4 55s linear infinite; }
          .modal-backdrop { animation: fadeIn 0.3s ease-out; }
          .modal-content { animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
          .pulse-glow { animation: pulse 3s ease-in-out infinite; }
          .float-animation { animation: float 3s ease-in-out infinite; }
        `
            }
        }
        />

        <
        div className = "fixed inset-0 overflow-hidden pointer-events-none z-0" > {
            stars.map(star => ( <
                div key = { star.id }
                className = "absolute bg-white rounded-full"
                style = {
                    {
                        left: star.x + '%',
                        top: star.y + '%',
                        width: star.size + 'px',
                        height: star.size + 'px',
                        animation: 'twinkle ' + star.duration + 's ease-in-out ' + star.delay + 's infinite'
                    }
                }
                />
            ))
        }

        {
            meteors.map(meteor => ( <
                div key = { meteor.id }
                className = "absolute"
                style = {
                    {
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        width: meteor.size + 'px',
                        height: '3px',
                        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 40%, rgba(59,130,246,0.8) 70%, rgba(147,51,234,0.5) 100%)',
                        boxShadow: '0 0 15px rgba(59,130,246,1), 0 0 30px rgba(147,51,234,0.5)',
                        transform: 'rotate(45deg)',
                        animation: 'meteorFall 4s linear forwards',
                        zIndex: 1
                    }
                }
                />
            ))
        } <
        /div>

        <
        header className = "relative z-20 py-6 px-4" >
        <
        div className = "container mx-auto flex justify-between items-center" >
        <
        h1 className = "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" >
        <
        /h1> <
        nav className = "flex gap-4" >
        <
        a href = "https://github.com/AdamB378"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "text-gray-400 hover:text-white transition-colors" >
        <
        Github size = { 24 }
        /> < /
        a > <
        a href = "https://linkedin.com/in/adam-belhadji-261478385"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "text-gray-400 hover:text-white transition-colors" >
        <
        Linkedin size = { 24 }
        /> < /
        a > <
        /nav> < /
        div > <
        /header>

        <
        div className = "relative z-10 min-h-screen flex items-center justify-center py-8" >
        <
        div className = "relative w-full max-w-6xl h-[750px] flex items-center justify-center px-4" >
        <
        button onClick = {
            () => setActivePlanet('accueil')
        }
        onMouseEnter = {
            () => setHoveredPlanet('accueil')
        }
        onMouseLeave = {
            () => setHoveredPlanet(null)
        }
        className = { 'relative ' + planets[0].size + ' bg-gradient-to-br ' + planets[0].color + ' rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 pulse-glow cursor-pointer z-30' } >
        <
        Home className = "text-white drop-shadow-lg"
        size = { 44 }
        /> < /
        button >

        {
            hoveredPlanet === 'accueil' && ( <
                div className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-slate-900 bg-opacity-90 px-4 py-2 rounded-lg text-sm float-animation pointer-events-none z-40" > { planets[0].description } <
                /div>
            )
        }

        {
            planets.slice(1).map((planet, index) => {
                const PlanetIcon = planet.icon;
                const orbitClass = 'orbit-' + (index + 1);

                return ( <
                    React.Fragment key = { planet.id } >
                    <
                    button onClick = {
                        () => setActivePlanet(planet.id)
                    }
                    onMouseEnter = {
                        () => setHoveredPlanet(planet.id)
                    }
                    onMouseLeave = {
                        () => setHoveredPlanet(null)
                    }
                    className = { 'absolute ' + planet.size + ' bg-gradient-to-br ' + planet.color + ' rounded-full flex items-center justify-center shadow-2xl hover:scale-125 transition-all duration-500 cursor-pointer z-30 ' + orbitClass }
                    style = {
                        {
                            boxShadow: '0 0 20px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.4)'
                        }
                    } >
                    <
                    PlanetIcon className = "text-white drop-shadow-md"
                    size = { 22 }
                    /> < /
                    button >

                    {
                        hoveredPlanet === planet.id && ( <
                            div className = { 'absolute ' + orbitClass + ' pointer-events-none z-40' }
                            style = {
                                { marginTop: '60px' }
                            } >
                            <
                            div className = "bg-slate-900 bg-opacity-90 px-4 py-2 rounded-lg text-sm whitespace-nowrap" > { planet.description } <
                            /div> < /
                            div >
                        )
                    } <
                    /React.Fragment>
                );
            })
        }

        {
            [300, 440, 580, 720].map((size, i) => ( <
                div key = { i }
                className = "absolute rounded-full border border-blue-500 opacity-10"
                style = {
                    { width: size + 'px', height: size + 'px' }
                }
                />
            ))
        } <
        /div> < /
        div >

        {
            activePlanet && ( <
                div className = "fixed inset-0 bg-black bg-opacity-85 backdrop-blur-md flex items-center justify-center z-50 modal-backdrop px-4"
                onClick = {
                    () => setActivePlanet(null)
                } >
                <
                div className = "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl border border-slate-700 relative modal-content overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick = {
                    (e) => e.stopPropagation()
                } >
                <
                div className = "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" > < /div>

                <
                button onClick = {
                    () => setActivePlanet(null)
                }
                className = "absolute top-6 right-6 text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300 z-10" >
                <
                X size = { 32 }
                /> < /
                button >

                <
                div className = "flex items-center gap-5 mb-8" > {
                    planets.find(p => p.id === activePlanet) && ( <
                        >
                        {
                            (() => {
                                const planet = planets.find(p => p.id === activePlanet);
                                const Icon = planet.icon;
                                return ( <
                                    div className = { 'w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ' + planet.color + ' shadow-2xl' } >
                                    <
                                    Icon className = "text-white"
                                    size = { 42 }
                                    /> < /
                                    div >
                                );
                            })()
                        } <
                        div >
                        <
                        h2 className = "text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" > { planets.find(p => p.id === activePlanet).name } <
                        /h2> <
                        p className = "text-gray-400 text-base mt-2" > { content[activePlanet].subtitle } < /p> < /
                        div > <
                        />
                    )
                } <
                /div>

                <
                h1 className = "text-3xl md:text-4xl font-bold mb-4 text-white" > { content[activePlanet].title } <
                /h1>

                <
                p className = "text-lg md:text-xl mb-6 text-gray-300 font-medium leading-relaxed" > { content[activePlanet].description } <
                /p>

                <
                div className = "flex flex-wrap gap-2 mb-8" > {
                    content[activePlanet].tags.map((tag, i) => ( <
                        span key = { i }
                        className = "px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-500 border-opacity-30" > { tag } <
                        /span>
                    ))
                } <
                /div>

                <
                div className = "bg-slate-800 bg-opacity-60 rounded-2xl p-6 md:p-8 mb-6 border border-slate-700" >
                <
                p className = "text-base md:text-lg text-gray-300 leading-relaxed mb-6" > { content[activePlanet].details } <
                /p>

                {
                    content[activePlanet].highlights && ( <
                        div className = "space-y-3" > {
                            content[activePlanet].highlights.map((highlight, i) => ( <
                                div key = { i }
                                className = "flex items-start gap-3 text-sm md:text-base text-gray-300" >
                                <
                                div className = "w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" > < /div> <
                                span > { highlight } < /span> < /
                                div >
                            ))
                        } <
                        /div>
                    )
                } <
                /div>

                {
                    activePlanet === 'contact' && ( <
                        div className = "flex flex-wrap gap-4" >
                        <
                        button className = "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition-transform" >
                        <
                        Mail size = { 20 }
                        /> <
                        span > Envoyer un email < /span> < /
                        button > <
                        button className = "flex items-center gap-2 px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors" >
                        <
                        ExternalLink size = { 20 }
                        /> <
                        span > Voir mon CV < /span> < /
                        button > <
                        /div>
                    )
                } <
                /div> < /
                div >
            )
        }

        <
        div className = "fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20 pointer-events-none" >
        <
        p className = "text-gray-500 text-sm md:text-base" > Survolez et cliquez sur les planètes pour explorer mon univers < /p> < /
        div > <
        /div>
    );
};

export default SolarPortfolio;