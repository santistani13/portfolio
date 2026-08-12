import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Job {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements AfterViewInit {
  activeTab = 0;

  readonly jobs: Job[] = [
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
      tech: ['Angular', 'TypeScript', 'RxJS', 'NestJS', 'Node.js', 'SCSS', 'REST APIs', 'AI Integration'],
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
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: .1 });
    document.querySelectorAll('#experience .rv, #experience .rv-l').forEach(el => obs.observe(el));
  }

  setTab(i: number): void { this.activeTab = i; }
}
