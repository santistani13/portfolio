import { Component, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Lang } from '../../core/language';
import { translations } from '../../core/translations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class NavComponent {
  scrolled = false;
  activeSection = 'hero';
  menuOpen = false;

  readonly t = computed(() => translations[this.lang.lang()].nav);
  readonly links = computed(() => this.t().links);
  readonly currentLang = computed(() => this.lang.lang());

  constructor(private lang: LanguageService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;

    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop - 130;
      const bot = top + el.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bot) {
        this.activeSection = id;
        break;
      }
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  setLang(l: Lang): void {
    this.lang.set(l);
  }
}
