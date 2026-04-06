import { Figma } from "lucide-react";

export const translations = {
    pt: {
        nav: {
            about: "Sobre",
            skills: "Skills",
            portfolio: "Portfólio",
            contact: "Contato",
        },
        hero: {
            title: "Design Estratégico. Arquitetura Escalável.",
            subtitle:
                "UX/UI Designer & Desenvolvedora Full Stack — Unindo design estratégico e engenharia robusta para entregar produtos de alto impacto que impulsionam resultados de negócio.",
            cta: "Ver Projetos",
        },
        about: {
            title: "Minha Trajetória",
            intro:
                "Uma jornada de constante evolução, transformando problemas complexos em soluções digitais intuitivas e escaláveis ao longo de mais de 4 anos de experiência.",
            timeline: [
                {
                    year: "2017 - 2021",
                    title: "Técnico em Informática",
                    institution: "IFRN",
                    description:
                        "A base do pensamento estruturado. Primeiros passos em desenvolvimento, lógica de programação e algoritmos.",
                    type: "education",
                },
                {
                    year: "2022 - 2025",
                    title: "Tecnologia da Informação",
                    institution: "UFRN",
                    description:
                        "Aprofundamento em engenharia de software, arquitetura de sistemas e desenvolvimento com fundamentos sólidos e boas práticas.",
                    type: "education",
                },
                {
                    year: "2022 - 2026",
                    title: "UX/UI Designer & Desenvolvedora",
                    institution: "Datavence",
                    description:
                        "Idealizo e construo tecnologias estratégicas para o setor político, fortalecendo a governança e a transparência através da tecnologia.",
                    type: "work",
                    highlights: [
                        "Arquitetura e design de sistemas escaláveis para gestão de entidades e captação eficiente de recursos.",
                        "Desenvolvimento de dashboards analíticos complexos para tomada de decisão baseada em dados.",
                    ],
                    impact: "Modernização da Estrutura Partidária Nacional",
                },
                {
                    year: "2025 - 2026",
                    title: "UX/UI Designer",
                    institution: "1Gov",
                    description:
                        "Projeto soluções tecnológicas de alto impacto para a saúde pública, com foco total na acessibilidade e na eficiência da jornada do paciente.",
                    type: "work",
                    highlights: [
                        "Design de sistemas hospitalares otimizados para reduzir o tempo de triagem e acelerar o atendimento crítico.",
                        "Criação de interfaces inclusivas e cognitivamente amigáveis para profissionais de saúde em ambientes de alta pressão.",
                    ],
                    impact: "Eficiência e Humanização na Saúde Pública",
                },
                {
                    year: "2026 - Atual",
                    title: "Engenharia de Software",
                    institution: "UFRN - 2º Ciclo",
                    description:
                        "Especialização em arquiteturas complexas e padrões de projeto, consolidando a visão de ponta a ponta do ciclo de vida do software.",
                    type: "education",
                },
            ],
        },
        bento: {
            active: {
                title: "Além do Código",
                description:
                    "Acredito que profissionais criativos e analíticos precisam de repertório diverso. Sou movida pelo esporte (corrida, academia e bike) e busco o equilíbrio mental na natureza e no contato com os animais. Exercito minha criatividade de forma analógica com artesanato, macramê e crochê. Eventos de tecnologia, viagens e fotografia expandem minha visão de mundo, refletindo diretamente na forma empática como construo produtos digitais.",
            },
            tech: {
                title: "Hard Skills",
                skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Java",
                    "Spring Cloud",
                    "NestJS",
                    "Node.js",
                    "API REST",
                    "Scrum",
                    "C++",
                    "Python",
                    "Figma",
                    "PostgreSQL",
                    "Git",
                ],
            },
            ai: {
                title: "IA Estratégica",
                description:
                    "Utilizo a Inteligência Artificial como aceleradora de produtividade técnica, liberando meu tempo para focar no que é insubstituível: estratégia de negócio, empatia no UX e inovação.",
            },
            soft: {
                title: "Design de Impacto",
                description:
                    "Crio interfaces que respeitam a carga cognitiva do usuário. Para mim, o bom design é aquele que resolve problemas silenciosamente, transformando complexidade em fluidez.",
            },
        },
        portfolio: {
            title: "Projetos em Destaque",
            subtitle:
                "Cases que demonstram a intersecção entre arquitetura de software eficiente e design centrado no usuário.",
            viewProject: "Detalhes do Projeto",
            demo: "Ver Demo",
            code: "Repositório",
            figma: "Design",
            livesite: "Acessar Site",
            close: "Fechar",
            overview: "Visão Geral",
            role: "Meu Papel",
            results: "Resultados",
            techStack: "Stack Técnica",
            links: "Links do Projeto",
            projects: [
                {
                    title: "CASI - Saúde Geriátrica Integrada",
                    description:
                        "Sistema de gestão clínica e agendamento focado no público da terceira idade, priorizando acessibilidade e clareza visual.",
                    tags: ["UX/UI", "Arquitetura de Informação"],
                    img: "assets/img/casi.png",
                    hasDemo: false,
                    hasCode: false,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1",
                },
                {
                    title: "TourAi",
                    description:
                        "Plataforma inteligente que utiliza IA generativa para arquitetar roteiros de viagem hiper-personalizados e automatizados.",
                    tags: ["React", "Next", "Spring Boot", "PostgreSQL"],
                    img: "assets/img/tourai.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: false,
                    code: "https://github.com/Ana678/tourai-frontend",
                },
                {
                    title: "SAPSSense - Apoio Clínico em UTI",
                    description:
                        "Sistema de apoio à decisão médica que integra Inteligência Artificial ao modelo SAPS III para predição precisa de mortalidade em UTIs.",
                    tags: ["Flask", "CSS", "IA / Machine Learning"],
                    img: "assets/img/saps.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1",
                },
                {
                    title: "CookUP",
                    description:
                        "Aplicação interativa de culinária que combina o compartilhamento de receitas com mecânicas de rede social e gamificação.",
                    tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
                    img: "assets/img/cookup.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/8Bzu2fRaY875TwtBhIjfC6/COOKUP?node-id=0-1&t=Z15QQ84Dt9sx0wd6-1",
                },
                {
                    title: "RestoWeb",
                    description:
                        "Plataforma Full Stack para gestão de restaurantes, otimizando o fluxo de informações em tempo real entre o salão de atendimento e a cozinha.",
                    tags: ["React", "Tailwind", "Node.js", "MySQL"],
                    img: "assets/img/restoweb.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/m2KAdIx6IHbCBP7Echxezy/RestoWeb?node-id=203-2&t=Tf2MeM77rgzqXluk-1",
                },
            ],
        },
        contact: {
            title: "Vamos construir o próximo passo?",
            subtitle: "Estou disponível para novos desafios. Escolha seu canal preferido e vamos conversar sobre como posso agregar ao seu time.",
            email: "E-mail",
            whatsapp: "WhatsApp",
            getInTouch: "Iniciar Conversa",
        },
    },
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact",
        },
        hero: {
            title: "Strategic Design. Scalable Architecture.",
            subtitle:
                "UX/UI Designer & Full Stack Developer — Turning complex business rules into high-performance systems and fluid user experiences.",
            cta: "View Projects"
        },
        about: {
            title: "My Journey",
            intro:
                "A journey of continuous growth, transforming complex problems into intuitive and scalable digital solutions over 4+ years of experience.",
            timeline: [
                {
                    year: "2017 - 2021",
                    title: "IT Technician",
                    institution: "IFRN",
                    description:
                        "The foundation of structured thinking. First steps into software development, programming logic, and algorithms.",
                    type: "education",
                },
                {
                    year: "2022 - 2025",
                    title: "Information Technology",
                    institution: "UFRN",
                    description:
                        "Deep dive into software engineering, systems architecture, and solid fundamental development practices.",
                    type: "education",
                },
                {
                    year: "2022 - 2026",
                    title: "UX/UI Designer & Developer",
                    institution: "Datavence",
                    description:
                        "Architecting and building strategic technologies for the political sector, strengthening governance and transparency through tech.",
                    type: "work",
                    highlights: [
                        "Designed and implemented scalable systems for entity management and efficient fundraising strategies.",
                        "Developed complex analytical dashboards for data-driven decision making.",
                    ],
                    impact: "Modernization of National Political Infrastructure",
                },
                {
                    year: "2025 - 2026",
                    title: "UX/UI Designer",
                    institution: "1Gov",
                    description:
                        "Designing high-impact technological solutions for public health, with a strong focus on accessibility and patient journey efficiency.",
                    type: "work",
                    highlights: [
                        "UX design for hospital management systems optimized to reduce triage times and accelerate critical care.",
                        "Created inclusive and cognitively friendly interfaces for healthcare professionals in high-pressure environments.",
                    ],
                    impact: "Efficiency and Humanization in Public Health",
                },
                {
                    year: "2026 - Present",
                    title: "Software Engineering",
                    institution: "UFRN - 2nd Cycle",
                    description:
                        "Specialization in complex architectures and design patterns, solidifying an end-to-end view of the software lifecycle.",
                    type: "education",
                },
            ],
        },
        bento: {
            active: {
                title: "Beyond the Screen",
                description:
                    "I believe analytical and creative professionals need a diverse background. I stay active with running, the gym, and cycling, while finding mental balance in nature and animals. I exercise my creativity offline through crafts like macramé and crochet. Tech events, traveling, and photography expand my worldview, directly reflecting on the empathetic way I build digital products.",
            },
            tech: {
                title: "Hard Skills",
                skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Java",
                    "Spring Cloud",
                    "NestJS",
                    "Node.js",
                    "REST API",
                    "Scrum",
                    "C++",
                    "Python",
                    "Figma",
                    "PostgreSQL",
                    "Git",
                ],
            },
            ai: {
                title: "Strategic AI",
                description:
                    "I use Artificial Intelligence as a technical productivity accelerator, freeing up my time to focus on what is irreplaceable: business strategy, empathetic UX, and innovation.",
            },
            soft: {
                title: "Impactful Design",
                description:
                    "I design interfaces that respect the user's cognitive load. To me, great design solves problems silently, turning complexity into fluid experiences.",
            },
        },
        portfolio: {
            title: "Featured Projects",
            subtitle:
                "Cases demonstrating the intersection between efficient software architecture and user-centered design.",
            viewProject: "Project Details",
            demo: "Live Demo",
            code: "Repository",
            figma: "Design",
            livesite: "Live Site",
            close: "Close",
            overview: "Overview",
            role: "My Role",
            results: "Results",
            techStack: "Tech Stack",
            links: "Project Links",
            projects: [
                {
                    title: "CASI - Integrated Geriatric Health",
                    description:
                        "Clinical management and scheduling system focused on elderly patients, prioritizing accessibility and visual clarity.",
                    tags: ["UX/UI", "Information Architecture"],
                    img: "assets/img/casi.png",
                    hasDemo: false,
                    hasCode: false,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1",
                },
                {
                    title: "TourAi",
                    description:
                        "Smart platform utilizing generative AI to architect hyper-personalized and automated travel itineraries.",
                    tags: ["React", "Next", "Spring Boot", "PostgreSQL"],
                    img: "assets/img/tourai.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: false,
                    code: "https://github.com/Ana678/tourai-frontend",
                },
                {
                    title: "SAPSSense - ICU Clinical Support",
                    description:
                        "Medical decision-support system integrating Artificial Intelligence with the SAPS III model for accurate ICU mortality prediction.",
                    tags: ["Flask", "CSS", "AI / Machine Learning"],
                    img: "assets/img/saps.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1",
                },
                {
                    title: "CookUP",
                    description:
                        "Interactive culinary application combining recipe sharing with social networking mechanics and gamification.",
                    tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
                    img: "assets/img/cookup.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/8Bzu2fRaY875TwtBhIjfC6/COOKUP?node-id=0-1&t=Z15QQ84Dt9sx0wd6-1",
                },
                {
                    title: "RestoWeb",
                    description:
                        "Full Stack platform for restaurant management, optimizing real-time information flow between the dining room and kitchen.",
                    tags: ["React", "Tailwind", "Node.js", "MySQL"],
                    img: "assets/img/restoweb.png",
                    hasDemo: false,
                    hasCode: true,
                    hasFigma: true,
                    figma:
                        "https://www.figma.com/design/m2KAdIx6IHbCBP7Echxezy/RestoWeb?node-id=203-2&t=Tf2MeM77rgzqXluk-1",
                },
            ],
        },
        contact: {
            title: "Ready to build what's next?",
            subtitle: "I am open to new opportunities. Choose your preferred channel and let's talk about how I can add value to your team.",
            email: "Email",
            whatsapp: "WhatsApp",
            getInTouch: "Start a Conversation",
        },
    },
};

export type Language = "pt" | "en";
export type Translations = typeof translations.pt;
