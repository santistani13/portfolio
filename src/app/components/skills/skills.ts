import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Skill  { name: string; pct: number; }
interface TechChip { label: string; color: string; }

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements AfterViewInit {
  readonly skills: Skill[] = [
    { name: 'Angular (Frontend)',        pct: 95 },
    { name: 'TypeScript / JavaScript',   pct: 92 },
    { name: 'HTML5 / SCSS',              pct: 90 },
    { name: 'RxJS / Reactive Patterns',  pct: 85 },
    { name: 'Node.js / NestJS',          pct: 80 },
    { name: 'REST APIs / Integraciones', pct: 88 },
    { name: 'AI Integration',            pct: 70 },
  ];

  readonly chips: TechChip[] = [
    { label: 'Angular 20',   color: 'var(--accent)'  },
    { label: 'TypeScript',   color: 'var(--accent2)' },
    { label: 'JavaScript',   color: '#f0db4f'         },
    { label: 'RxJS',         color: 'var(--accent3)' },
    { label: 'NestJS',       color: '#e0234e'         },
    { label: 'Node.js',      color: '#8cc84b'         },
    { label: 'SCSS',         color: '#cc6699'         },
    { label: 'HTML5',        color: '#e44d26'         },
    { label: 'REST APIs',    color: 'var(--accent)'  },
    { label: 'AI Agents',    color: '#22d3ee'         },
    { label: 'Git',          color: '#f05032'         },
    { label: 'Arquitectura', color: 'var(--accent)'  },
    { label: 'UX/UI Collab', color: '#a3e635'         },
    { label: 'Performance',  color: 'var(--accent3)' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          e.target.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset['w'] + '%';
          });
        }
      });
    }, { threshold: .1 });

    document.querySelectorAll('#skills .rv, #skills .rv-l').forEach(el => obs.observe(el));
  }
}
