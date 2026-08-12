import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.html',
  styleUrl: './marquee.scss'
})
export class MarqueeComponent {
  readonly items = [
    'Angular', 'TypeScript', 'RxJS', 'NestJS', 'Node.js',
    'SCSS', 'HTML5', 'REST APIs', 'JavaScript', 'AI Integration', 'Git', 'Fintech'
  ];
  // duplicated for seamless loop
  readonly allItems = [...this.items, ...this.items];
}
