import {
  Component, AfterViewInit, OnDestroy,
  PLATFORM_ID, Inject, ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-responsive',
  standalone: true,
  imports: [NgClass],
  templateUrl: './responsive.html',
  styleUrl: './responsive.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveComponent implements AfterViewInit, OnDestroy {
  progress   = 0;   // 0-1 through the whole section
  phase      = 0;   // 0=mobile 1=tablet 2=desktop
  phoneAngle = 20;  // rotateX degrees (starts tilted)
  showTablet = false;
  showDesktop = false;

  private scrollFn!: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrollFn = () => this.onScroll();
    window.addEventListener('scroll', this.scrollFn, { passive: true });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollFn);
    }
  }

  private onScroll(): void {
    const section = document.getElementById('responsive-section');
    if (!section) return;

    const rect       = section.getBoundingClientRect();
    const totalScroll = section.offsetHeight - window.innerHeight;
    const scrolled   = Math.max(0, -rect.top);
    const p          = Math.min(1, scrolled / totalScroll);

    this.progress    = p;
    this.phoneAngle  = 22 - p * 22;          // 22 → 0 deg
    this.phase       = p < .35 ? 0 : p < .68 ? 1 : 2;
    this.showTablet  = p >= .33;
    this.showDesktop = p >= .65;
    this.cdr.markForCheck();
  }

  get phoneStyle(): string {
    const tilt = this.phoneAngle;
    const lift = Math.max(0, (1 - this.progress / .35)) * 40;
    return `transform: perspective(900px) rotateX(${tilt}deg) translateY(${lift}px)`;
  }
}
