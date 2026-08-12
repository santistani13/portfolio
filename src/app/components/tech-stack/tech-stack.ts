import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface TechIcon     { name: string; slug: string; color: string; }
interface TechCategory { title: string; emoji: string; techs: TechIcon[]; }

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss'
})
export class TechStackComponent implements AfterViewInit {

  readonly categories: TechCategory[] = [
    {
      title: 'Frontend',
      emoji: '🎨',
      techs: [
        { name: 'Angular',     slug: 'angular',      color: 'DD0031' },
        { name: 'TypeScript',  slug: 'typescript',   color: '3178C6' },
        { name: 'JavaScript',  slug: 'javascript',   color: 'F7DF1E' },
        { name: 'SCSS',        slug: 'sass',          color: 'CC6699' },
        { name: 'HTML5',       slug: 'html5',         color: 'E34F26' },
        { name: 'RxJS',        slug: 'reactivex',     color: 'B7178C' },
        { name: 'TailwindCSS', slug: 'tailwindcss',   color: '06B6D4' },
        { name: 'Capacitor',   slug: 'capacitor',     color: '119EFF' },
      ]
    },
    {
      title: 'Backend',
      emoji: '⚙️',
      techs: [
        { name: 'NestJS',      slug: 'nestjs',        color: 'E0234E' },
        { name: 'Node.js',     slug: 'nodedotjs',     color: '339933' },
        { name: 'Prisma',      slug: 'prisma',        color: '2D3748' },
        { name: 'PostgreSQL',  slug: 'postgresql',    color: '336791' },
        { name: 'MongoDB',     slug: 'mongodb',       color: '47A248' },
        { name: 'Fastify',     slug: 'fastify',       color: '000000' },
      ]
    },
    {
      title: 'AI',
      emoji: '🤖',
      techs: [
        { name: 'OpenAI',      slug: 'openai',        color: '412991' },
        { name: 'Ollama',      slug: 'ollama',        color: '000000' },
        { name: 'LangChain',   slug: 'langchain',     color: '1C3C3C' },
        { name: 'Hugging Face',slug: 'huggingface',   color: 'FFD21E' },
        { name: 'TensorFlow',  slug: 'tensorflow',    color: 'FF6F00' },
        { name: 'Groq',        slug: 'groq',          color: 'F55036' },
      ]
    },
    {
      title: 'DevOps & Servicios',
      emoji: '🚀',
      techs: [
        { name: 'Docker',      slug: 'docker',        color: '2496ED' },
        { name: 'Git',         slug: 'git',           color: 'F05032' },
        { name: 'GitHub',      slug: 'github',        color: 'CCCCCC' },
        { name: 'Vercel',      slug: 'vercel',        color: 'CCCCCC' },
        { name: 'Railway',     slug: 'railway',       color: 'CCCCCC' },
        { name: 'Linux',       slug: 'linux',         color: 'FCC624' },
        { name: 'Nx',          slug: 'nx',            color: '143055' },
      ]
    }
  ];

  iconUrl(slug: string, color: string): string {
    return `https://cdn.simpleicons.org/${slug}/${color}`;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: .08 }
    );
    document.querySelectorAll('#tech-stack .rv, #tech-stack .rv-l').forEach(el => obs.observe(el));
  }
}
