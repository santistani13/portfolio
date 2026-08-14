import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  readonly links = [
    { n: '01.', label: 'sobre mí',    href: 'about'      },
    { n: '02.', label: 'skills',      href: 'skills'     },
    { n: '03.', label: 'proyectos',   href: 'projects'   },
    { n: '04.', label: 'experiencia', href: 'experience' },
    { n: '05.', label: 'contacto',    href: 'contact'    },
  ];

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
}
