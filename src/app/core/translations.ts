import type { Lang } from './language';

export const translations = {
  en: {
    nav: {
      links: [
        { n: '01.', label: 'about',      href: 'about'      },
        { n: '02.', label: 'skills',     href: 'skills'     },
        { n: '03.', label: 'projects',   href: 'projects'   },
        { n: '04.', label: 'experience', href: 'experience' },
        { n: '05.', label: 'contact',    href: 'contact'    },
      ],
      ariaOpenMenu: 'Open menu',
    },
    hero: {
      badge: 'currently at BALANZ Capital',
      phrases: [
        'Full Stack Developer',
        'Angular Specialist',
        'Clean code enthusiast',
        'Frontend that cares about details',
      ],
      descParts: [
        'Over ', '5 years', ' building complex interfaces and robust systems. Specialized in ',
        'Angular', ', ', 'TypeScript', ' and reactive ecosystems. I obsess over the details most people miss.',
      ],
      scroll: 'scroll',
    },
    about: {
      label: '01 — about',
      titlePrefix: 'A little about ',
      titleHl: 'me',
      photoBadge: 'Available for projects',
      paragraphs: [
        'I’m a <strong>Full Stack Developer</strong> based in Buenos Aires, Argentina. Since 2021 I’ve worked at <strong>BALANZ Capital</strong> — one of the largest investment fintechs in the country — building high-demand interfaces and backend systems that handle real-time financial data.',
        'I specialize in the Angular ecosystem (up to v20) and have a trained eye for visual detail. I enjoy designing a pixel-perfect component as much as thinking through an API’s architecture. And yes, I also integrate AI when it makes sense.',
        'Graduated as a <strong>Systems Analyst</strong> from ISTEA. Intermediate English. Always learning something new.',
      ],
      pills: ['Buenos Aires 🇦🇷', 'Open to opportunities', 'Systems Analyst', 'Intermediate English'],
      cards: [
        { icon: '🏢', label: 'Current company', value: 'BALANZ Capital'                        },
        { icon: '📅', label: 'Experience',      value: '+5 years (Mar 2021 — present)'          },
        { icon: '🎓', label: 'Education',       value: 'Systems Analyst · ISTEA (2022–2024)'    },
        { icon: '⚡', label: 'Main focus',      value: 'Angular · TypeScript · NestJS'          },
        { icon: '📍', label: 'Location',        value: 'Santos Lugares, Buenos Aires'           },
      ],
    },
    skills: {
      label: '02 — skills',
      titlePrefix: 'Technologies I ',
      titleHl: 'master',
      angularLegacy: {
        heading: 'Angular ≤17',
        desc: 'NgModules, decorators, lifecycle hooks, ChangeDetection OnPush, RxJS integration, lazy loading, guards, resolvers',
      },
      angularSignals: {
        heading: 'Angular +17 · Signals',
        desc: 'Signals, computed, effect, toSignal/toObservable, @defer, @for, @if — granular reactivity without Zone.js',
      },
      otherTech: 'Other technologies',
    },
    techStack: {
      label: '03 — tech stack',
      titlePrefix: 'My ',
      titleHl: 'full stack',
      categories: ['Frontend', 'Backend', 'AI', 'DevOps & Services'],
    },
    responsive: {
      hint: 'scroll to explore →',
      phases: [
        { label: 'Mobile first',      desc: 'Designed from the smallest device upward.' },
        { label: 'Tablet ready',      desc: 'Fluid layouts that make the most of the in-between space.' },
        { label: 'Desktop polished',  desc: 'Full experience on large screens, without sacrificing anything.' },
      ],
    },
    projects: {
      label: '04 — projects',
      titlePrefix: 'Featured ',
      titleHl: 'work',
      viewProject: 'View project',
      devRoomDesc: 'Interactive virtual office built with Three.js and Angular. Walk around the room, click objects to explore the tech stack and projects, with dark mode and rain on the windows.',
    },
    experience: {
      label: '05 — experience',
      titlePrefix: 'My ',
      titleHl: 'journey',
      sidebarTitle: 'Where I’ve worked',
      jobs: [
        {
          role: 'Full-Stack Developer',
          company: 'BALANZ Capital · Investments · Buenos Aires',
          period: 'Mar 2021 — Present',
          bullets: [
            'Development of modern web applications with Angular up to v20, applying architecture, modularization, and scalability best practices.',
            'Implementation of responsive, mobile-first interfaces with HTML5 and SCSS, ensuring optimal user experiences.',
            'Integration with REST APIs and backend services, managing asynchronous flows with RxJS.',
            'Backend development with Node.js and NestJS: creating and consuming robust APIs.',
            'Implementation of integrations with AI agents and external services for process automation.',
            'Collaboration with Product, UX/UI, and Backend teams in defining and designing new features.',
            'Participation in technical decisions and architecture for key product initiatives.',
          ],
        },
        {
          role: 'Systems Analyst',
          company: 'ISTEA · Academic education',
          period: '2022 — 2024',
          bullets: [
            'Systems Analyst degree focused on software development, databases, and systems analysis and design.',
            'Coursework complementing on-the-job experience, reinforcing theoretical foundations of computer science and software architecture.',
          ],
          tech: ['Systems analysis', 'Databases', 'SW architecture'],
        },
      ],
    },
    contact: {
      label: '06 — contact',
      title: 'Get in touch',
      desc: 'I’m open to new opportunities, freelance projects, or just talking about tech. Write to me and I’ll get back to you.',
      linkLabels: { github: 'GitHub', linkedin: 'LinkedIn' },
      form: {
        name: 'Name', namePh: 'Your name',
        email: 'Email', emailPh: 'you@email.com',
        subject: 'Subject', subjectPh: 'What’s this about?',
        message: 'Message', messagePh: 'Tell me about your project or proposal...',
      },
      btn: {
        idle: 'Send message →', sending: 'Sending...',
        success: '✓ Message sent', error: '✗ Try again',
      },
      loadingAlert: 'The email service is still loading, try again in a second.',
      defaultSubject: 'Contact from portfolio',
    },
    footer: {
      credit: 'Designed & built by',
      links: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    },
  },

  es: {
    nav: {
      links: [
        { n: '01.', label: 'sobre mí',    href: 'about'      },
        { n: '02.', label: 'skills',      href: 'skills'     },
        { n: '03.', label: 'proyectos',   href: 'projects'   },
        { n: '04.', label: 'experiencia', href: 'experience' },
        { n: '05.', label: 'contacto',    href: 'contact'    },
      ],
      ariaOpenMenu: 'Abrir menú',
    },
    hero: {
      badge: 'actualmente en BALANZ Capital',
      phrases: [
        'Full Stack Developer',
        'Especialista en Angular',
        'Amante del código limpio',
        'Frontend que cuida los detalles',
      ],
      descParts: [
        'Más de ', '5 años', ' construyendo interfaces complejas y sistemas robustos. Especializado en ',
        'Angular', ', ', 'TypeScript', ' y ecosistemas reactivos. Me obsesionan los detalles que la mayoría no nota.',
      ],
      scroll: 'scroll',
    },
    about: {
      label: '01 — sobre mí',
      titlePrefix: 'Un poco sobre ',
      titleHl: 'mí',
      photoBadge: 'Disponible para proyectos',
      paragraphs: [
        'Soy <strong>Full Stack Developer</strong> con base en Buenos Aires, Argentina. Desde 2021 trabajo en <strong>BALANZ Capital</strong> — una de las fintech de inversiones más grandes del país — donde construyo interfaces de alta exigencia y sistemas backend que manejan datos financieros en tiempo real.',
        'Me especializo en el ecosistema Angular (hasta v20) y tengo un ojo entrenado para el detalle visual. Disfruto tanto de diseñar un componente pixel-perfect como de pensar la arquitectura de una API. Y sí, también integro IA cuando tiene sentido.',
        'Egresado como <strong>Analista de Sistemas</strong> en ISTEA. Inglés intermedio. Siempre aprendiendo algo nuevo.',
      ],
      pills: ['Buenos Aires 🇦🇷', 'Open to opportunities', 'Analista de Sistemas', 'Inglés intermedio'],
      cards: [
        { icon: '🏢', label: 'Empresa actual',  value: 'BALANZ Capital'                          },
        { icon: '📅', label: 'Experiencia',      value: '+5 años (Mar 2021 — presente)'           },
        { icon: '🎓', label: 'Educación',         value: 'Analista de Sistemas · ISTEA (2022–2024)' },
        { icon: '⚡', label: 'Foco principal',   value: 'Angular · TypeScript · NestJS'           },
        { icon: '📍', label: 'Ubicación',         value: 'Santos Lugares, Buenos Aires'            },
      ],
    },
    skills: {
      label: '02 — skills',
      titlePrefix: 'Tecnologías que ',
      titleHl: 'domino',
      angularLegacy: {
        heading: 'Angular ≤17',
        desc: 'NgModules, decorators, lifecycle hooks, ChangeDetection OnPush, integración con RxJS, lazy loading, guards, resolvers',
      },
      angularSignals: {
        heading: 'Angular +17 · Signals',
        desc: 'Signals, computed, effect, toSignal/toObservable, @defer, @for, @if — reactividad granular sin Zone.js',
      },
      otherTech: 'Otras tecnologías',
    },
    techStack: {
      label: '03 — tecnologías',
      titlePrefix: 'Mi ',
      titleHl: 'stack completo',
      categories: ['Frontend', 'Backend', 'AI', 'DevOps & Servicios'],
    },
    responsive: {
      hint: 'scrolleá para explorar →',
      phases: [
        { label: 'Mobile first',      desc: 'Diseñado desde el dispositivo más pequeño hacia arriba.' },
        { label: 'Tablet ready',      desc: 'Layouts fluidos que aprovechan el espacio intermedio.' },
        { label: 'Desktop polished',  desc: 'Experiencia completa en pantallas grandes, sin sacrificar nada.' },
      ],
    },
    projects: {
      label: '04 — proyectos',
      titlePrefix: 'Trabajos ',
      titleHl: 'destacados',
      viewProject: 'Ver proyecto',
      devRoomDesc: 'Oficina virtual interactiva construida con Three.js y Angular. Caminás por el cuarto, clickeás objetos para explorar el stack técnico y proyectos, con modo oscuro y lluvia en las ventanas.',
    },
    experience: {
      label: '05 — experiencia',
      titlePrefix: 'Mi ',
      titleHl: 'trayectoria',
      sidebarTitle: 'Dónde trabajé',
      jobs: [
        {
          role: 'Desarrollador Full-Stack',
          company: 'BALANZ Capital · Inversiones · Buenos Aires',
          period: 'Mar 2021 — Presente',
          bullets: [
            'Desarrollo de aplicaciones web modernas con Angular hasta v20, aplicando buenas prácticas de arquitectura, modularización y escalabilidad.',
            'Implementación de interfaces responsive y mobile-first con HTML5 y SCSS, asegurando experiencias de usuario óptimas.',
            'Integración con APIs REST y servicios backend, gestionando flujos asíncronos con RxJS.',
            'Desarrollo backend con Node.js y NestJS: creación y consumo de APIs robustas.',
            'Implementación de integraciones con agentes de IA y servicios externos para automatización de procesos.',
            'Colaboración con equipos de Producto, UX/UI y Backend en definición y diseño de nuevas funcionalidades.',
            'Participación en decisiones técnicas y arquitectura en proyectos clave del producto.',
          ],
        },
        {
          role: 'Analista de Sistemas',
          company: 'ISTEA · Formación académica',
          period: '2022 — 2024',
          bullets: [
            'Carrera de Analista de Sistemas con foco en desarrollo de software, bases de datos, análisis y diseño de sistemas.',
            'Formación complementaria a la experiencia laboral, consolidando fundamentos teóricos de informática y arquitectura de software.',
          ],
          tech: ['Análisis de sistemas', 'Bases de datos', 'Arquitectura SW'],
        },
      ],
    },
    contact: {
      label: '06 — contacto',
      title: 'Contactame',
      desc: 'Estoy abierto a nuevas oportunidades, proyectos freelance o simplemente charlar sobre tecnología. Escribime y te respondo.',
      linkLabels: { github: 'GitHub', linkedin: 'LinkedIn' },
      form: {
        name: 'Nombre', namePh: 'Tu nombre',
        email: 'Email', emailPh: 'tu@email.com',
        subject: 'Asunto', subjectPh: '¿De qué se trata?',
        message: 'Mensaje', messagePh: 'Contame tu proyecto o propuesta...',
      },
      btn: {
        idle: 'Enviar mensaje →', sending: 'Enviando...',
        success: '✓ Mensaje enviado', error: '✗ Intentá de nuevo',
      },
      loadingAlert: 'El servicio de email todavía carga, intentá en un segundo.',
      defaultSubject: 'Contacto desde el portfolio',
    },
    footer: {
      credit: 'Diseñado & construido por',
      links: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    },
  },
} as const satisfies Record<Lang, unknown>;

export type Translations = typeof translations['en'];
