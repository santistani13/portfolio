import { Component, OnDestroy, PLATFORM_ID, Inject, signal, computed, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../core/language';
import { translations } from '../../core/translations';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnDestroy {
  typedText = signal('');

  readonly t = computed(() => translations[this.lang.lang()].hero);

  private pi = 0;
  private ci = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  readonly chips = [
    { label: 'Angular v20', color: 'var(--accent)',  style: 'top:22%;right:8%;--dur:7s'      },
    { label: 'NestJS',      color: 'var(--accent2)', style: 'top:62%;right:12%;--dur:5.5s'   },
    { label: 'TypeScript',  color: 'var(--accent3)', style: 'top:32%;left:3%;--dur:8s'       },
    { label: 'RxJS',        color: '#22d3ee',         style: 'bottom:22%;left:6%;--dur:6.5s' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private lang: LanguageService,
  ) {
    effect(() => {
      this.t();
      this.pi = 0;
      this.ci = 0;
      this.deleting = false;
      if (this.timer) clearTimeout(this.timer);
      if (isPlatformBrowser(this.platformId)) this.type();
    });
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private type(): void {
    const phrases = this.t().phrases;
    const ph = phrases[this.pi];
    if (!this.deleting) {
      this.typedText.set(ph.slice(0, ++this.ci));
      if (this.ci === ph.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 2200);
        return;
      }
      this.timer = setTimeout(() => this.type(), 65);
    } else {
      this.typedText.set(ph.slice(0, --this.ci));
      if (this.ci === 0) {
        this.deleting = false;
        this.pi = (this.pi + 1) % phrases.length;
      }
      this.timer = setTimeout(() => this.type(), this.deleting ? 30 : 500);
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
