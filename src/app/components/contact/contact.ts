import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Creá una cuenta en https://www.emailjs.com (gratis)
// 2. Add New Service → Gmail → copiás el Service ID
// 3. Email Templates → Create New Template → copiás el Template ID
// 4. Account → API Keys → copiás el Public Key
// Reemplazá las 3 constantes de abajo con tus valores:
const EMAILJS_SERVICE_ID  = 'service_fxoeucl';
const EMAILJS_TEMPLATE_ID = 'template_tvgfs16';
const EMAILJS_PUBLIC_KEY  = 'rMBVH808ZtsCQmBvg';
// ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements AfterViewInit {
  // Form model
  form = { name: '', email: '', subject: '', message: '' };

  // UI state
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  readonly links = [
    { icon: '✉️', label: 'santiagostanicio13@gmail.com', href: 'mailto:santiagostanicio13@gmail.com' },
    { icon: '📱', label: '+54 11 6427 7986',              href: 'tel:+541164277986'                   },
    { icon: '🐙', label: 'GitHub',                        href: 'https://github.com'                  },
    { icon: '💼', label: 'LinkedIn',                      href: 'https://linkedin.com'                },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Cargar EmailJS SDK dinámicamente
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      (window as any).emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    };
    document.head.appendChild(script);

    // Reveal observer
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: .1 }
    );
    document.querySelectorAll('#contact .rv, #contact .rv-l').forEach(el => obs.observe(el));
  }

  async onSubmit(): Promise<void> {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    this.status = 'sending';

    try {
      const emailjs = (window as any).emailjs;
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:    this.form.name,
        from_email:   this.form.email,
        subject:      this.form.subject || 'Contacto desde el portfolio',
        message:      this.form.message,
        reply_to:     this.form.email,
      });

      this.status = 'success';
      this.form   = { name: '', email: '', subject: '', message: '' };
    } catch (err) {
      console.error('EmailJS error:', err);
      this.status = 'error';
    }

    setTimeout(() => (this.status = 'idle'), 4000);
  }

  get btnLabel(): string {
    return {
      idle:    'Enviar mensaje →',
      sending: 'Enviando...',
      success: '✓ Mensaje enviado',
      error:   '✗ Error, intentá de nuevo',
    }[this.status];
  }

  get btnClass(): string {
    return {
      idle:    '',
      sending: 'sending',
      success: 'success',
      error:   'error-state',
    }[this.status];
  }
}
