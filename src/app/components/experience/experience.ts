import { Component, AfterViewInit, PLATFORM_ID, Inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../core/language';
import { translations } from '../../core/translations';

export interface Job {
  role: string;
  company: string;
  period: string;
  bullets: readonly string[];
  tech: readonly string[];
}

const TECH: string[][] = [
  ['Angular', 'TypeScript', 'RxJS', 'NestJS', 'Node.js', 'SCSS', 'REST APIs', 'AI Integration'],
];

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements AfterViewInit {
  activeTab = 0;

  readonly t = computed(() => translations[this.lang.lang()].experience);

  readonly jobs = computed<Job[]>(() =>
    this.t().jobs.map((job, i) => ({
      role: job.role,
      company: job.company,
      period: job.period,
      bullets: job.bullets,
      tech: (job as any).tech ?? TECH[i] ?? [],
    }))
  );

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private lang: LanguageService,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: .1 });
    document.querySelectorAll('#experience .rv, #experience .rv-l').forEach(el => obs.observe(el));
  }

  setTab(i: number): void { this.activeTab = i; }
}
