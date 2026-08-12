import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements AfterViewInit {
  readonly pills = [
    'Buenos Aires 🇦🇷',
    'Open to opportunities',
    'Analista de Sistemas',
    'Inglés intermedio',
  ];

  readonly cards = [
    { icon: '🏢', label: 'Empresa actual',  value: 'BALANZ Capital'                          },
    { icon: '📅', label: 'Experiencia',      value: '+5 años (Mar 2021 — presente)'           },
    { icon: '🎓', label: 'Educación',         value: 'Analista de Sistemas · ISTEA (2022–2024)' },
    { icon: '⚡', label: 'Foco principal',   value: 'Angular · TypeScript · NestJS'           },
    { icon: '📍', label: 'Ubicación',         value: 'Santos Lugares, Buenos Aires'            },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: .13 }
    );
    document.querySelectorAll('#about .rv, #about .rv-l').forEach(el => obs.observe(el));
  }
}
