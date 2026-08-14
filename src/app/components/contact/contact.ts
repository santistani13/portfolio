import { Component, AfterViewInit, PLATFORM_ID, Inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/language';
import { translations } from '../../core/translations';

const EMAILJS_SERVICE_ID  = 'service_fxoeucl';
const EMAILJS_TEMPLATE_ID = 'template_tvgfs16';
const EMAILJS_PUBLIC_KEY  = 'rMBVH808ZtsCQmBvg';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements AfterViewInit {
  form   = { name: '', email: '', subject: '', message: '' };
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  private ejsReady = false;

  readonly t = computed(() => translations[this.lang.lang()].contact);

  readonly links = computed(() => [
    { icon: '✉️', label: 'santiagostanicio13@gmail.com', href: 'mailto:santiagostanicio13@gmail.com' },
    { icon: '📱', label: '+54 11 6427 7986',              href: 'tel:+541164277986'                   },
    { icon: '🐙', label: this.t().linkLabels.github,      href: 'https://github.com/santistani13'                                      },
    { icon: '💼', label: this.t().linkLabels.linkedin,    href: 'https://www.linkedin.com/in/santiago-stanicio-ba568516b/' },
  ]);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private lang: LanguageService,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const existing = document.querySelector('script[src*="emailjs"]');
    if (existing) {
      this.initEjs();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload  = () => this.initEjs();
    s.onerror = () => console.error('No se pudo cargar EmailJS');
    document.head.appendChild(s);

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: .1 }
    );
    document.querySelectorAll('#contact .rv, #contact .rv-l').forEach(el => obs.observe(el));
  }

  private initEjs(): void {
    try {
      (window as any).emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      this.ejsReady = true;
    } catch (e) {
      console.error('EmailJS init error', e);
    }
  }

  async onSubmit(): Promise<void> {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    if (!this.ejsReady) { alert(this.t().loadingAlert); return; }

    this.status = 'sending';
    try {
      await (window as any).emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  this.form.name,
          from_email: this.form.email,
          subject:    this.form.subject || this.t().defaultSubject,
          message:    this.form.message,
          reply_to:   this.form.email,
        }
      );
      this.status = 'success';
      this.form   = { name: '', email: '', subject: '', message: '' };
    } catch (err: any) {
      console.error('EmailJS send error:', err);
      this.status = 'error';
    } finally {
      setTimeout(() => (this.status = 'idle'), 4000);
    }
  }

  get btnLabel(): string {
    return this.t().btn[this.status];
  }
  get btnClass(): string {
    return ({ idle: '', sending: 'sending', success: 'success', error: 'error-state' } as any)[this.status];
  }
}
