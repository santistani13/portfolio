import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
  readonly projects: Project[] = [
    {
      num: '01',
      name: 'NBA Stats App',
      desc: 'Plataforma de seguimiento de la NBA con stats en tiempo real, sistema de usuarios con autenticación JWT, seguimiento de equipos favoritos e integración con IA mediante Ollama.',
      tags: ['Angular', 'NestJS', 'JWT', 'AI'],
      demoUrl: '#',   // → reemplazar con URL de Vercel
      githubUrl: '#', // → reemplazar con URL de GitHub
    },
    {
      num: '02',
      name: 'App Shop',
      desc: 'E-commerce completo estilo supermercado: catálogo de productos, carrito de compras, gestión de órdenes y panel de administración. UX pensada para flujos de compra rápidos.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      num: '03',
      name: 'FitApp',
      desc: 'Aplicación de entrenamiento personal: rutinas, seguimiento de progreso y planes de ejercicio personalizados. Diseño mobile-first pensado para usar en el gym.',
      tags: ['Angular', 'NestJS', 'Mobile-first'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: .13 });
    document.querySelectorAll('#projects .rv').forEach(el => obs.observe(el));
  }
}
