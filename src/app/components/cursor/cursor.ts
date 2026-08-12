import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss'
})
export class CursorComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const cur  = document.getElementById('cur')!;
    const curR = document.getElementById('curR')!;
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx - 5 + 'px';
      cur.style.top  = my - 5 + 'px';
    });

    const anim = () => {
      rx += (mx - rx) * .1;
      ry += (my - ry) * .1;
      curR.style.left = rx - 18 + 'px';
      curR.style.top  = ry - 18 + 'px';
      requestAnimationFrame(anim);
    };
    anim();
  }
}
