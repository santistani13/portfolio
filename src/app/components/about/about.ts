import { Component, AfterViewInit, PLATFORM_ID, Inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../core/language';
import { translations } from '../../core/translations';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements AfterViewInit {
  readonly t = computed(() => translations[this.lang.lang()].about);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private lang: LanguageService,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: .13 }
    );
    document.querySelectorAll('#about .rv, #about .rv-l').forEach(el => obs.observe(el));
  }
}
