import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface TechChip { label: string; color: string; }

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements AfterViewInit {

  readonly techList: TechChip[] = [
    { label: 'TypeScript',     color: '#3178C6' },
    { label: 'JavaScript',     color: '#f0db4f' },
    { label: 'SCSS / CSS',     color: '#cc6699' },
    { label: 'HTML5',          color: '#e44d26' },
    { label: 'RxJS',           color: '#B7178C' },
    { label: 'NestJS',         color: '#e0234e' },
    { label: 'Node.js',        color: '#8cc84b' },
    { label: 'REST APIs',      color: 'var(--accent2)' },
    { label: 'Prisma ORM',     color: '#2D3748' },
    { label: 'PostgreSQL',     color: '#336791' },
    { label: 'Git / GitHub',   color: '#f05032' },
    { label: 'AI Integration', color: '#22d3ee' },
    { label: 'Nx Monorepo',    color: '#143055' },
    { label: 'Capacitor',      color: '#119EFF' },
    { label: 'Docker',         color: '#2496ED' },
    { label: 'Vercel',         color: 'var(--muted)' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: .1 }
    );
    document.querySelectorAll('#skills .rv, #skills .rv-l').forEach(el => obs.observe(el));
  }
}
