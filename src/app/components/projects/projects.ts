import { Component, AfterViewInit, PLATFORM_ID, Inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../core/language';
import { translations } from '../../core/translations';

export interface Project {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements AfterViewInit {
  readonly t = computed(() => translations[this.lang.lang()].projects);

  readonly projects = computed<Project[]>(() => [
    {
      num: '01',
      name: 'Dev Room 3D',
      desc: this.t().devRoomDesc,
      tags: ['Three.js', 'Angular', 'WebGL', '3D'],
      demoUrl: 'https://cuarto-3d-three-santiago-stanicio.vercel.app/',
      githubUrl: 'https://github.com/santistani13/cuarto-3d',
    },
    {
      num: '02',
      name: 'NBA Stats App',
      desc: 'Plataforma de seguimiento de la NBA con stats en tiempo real, autenticación JWT, seguimiento de equipos y jugadores favoritos, y un asistente de IA (Groq) que responde preguntas leyendo la base de datos real de la app.',
      tags: ['Angular', 'NestJS', 'JWT', 'AI'],
      demoUrl: 'https://nba-app-santiago-stanicio.vercel.app/auth/login',
      githubUrl: 'https://github.com/santistani13/nba',
    },
    // Pendiente de deploy — descomentar cuando esté publicado
    // {
    //   num: '03',
    //   name: 'App Shop',
    //   desc: 'E-commerce completo estilo supermercado: catálogo de productos, carrito de compras, gestión de órdenes y panel de administración. UX pensada para flujos de compra rápidos.',
    //   tags: ['Angular', 'TypeScript', 'SCSS'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   num: '04',
    //   name: 'FitApp',
    //   desc: 'Aplicación de entrenamiento personal: rutinas, seguimiento de progreso y planes de ejercicio personalizados. Diseño mobile-first pensado para usar en el gym.',
    //   tags: ['Angular', 'NestJS', 'Mobile-first'],
    //   demoUrl: '#',
    //   githubUrl: '#',
    // },
  ]);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private lang: LanguageService,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: .13 });
    document.querySelectorAll('#projects .rv').forEach(el => obs.observe(el));
  }
}
