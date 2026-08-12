import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements AfterViewInit {
  submitted = false;

  readonly links = [
    { icon: '✉️', label: 'santiagostanicio13@gmail.com', href: 'mailto:santiagostanicio13@gmail.com' },
    { icon: '📱', label: '+54 11 6427 7986',              href: 'tel:+541164277986'                   },
    { icon: '🐙', label: 'GitHub',                        href: 'https://github.com'                  },
    { icon: '💼', label: 'LinkedIn',                      href: 'https://linkedin.com'                },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: .1 });
    document.querySelectorAll('#contact .rv, #contact .rv-l').forEach(el => obs.observe(el));
  }

  onSubmit(): void {
    this.submitted = true;
    setTimeout(() => (this.submitted = false), 3000);
  }
}
