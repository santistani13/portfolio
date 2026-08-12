import { Component } from '@angular/core';
import { CursorComponent }     from './components/cursor/cursor';
import { NavComponent }        from './components/nav/nav';
import { HeroComponent }       from './components/hero/hero';
import { MarqueeComponent }    from './components/marquee/marquee';
import { AboutComponent }      from './components/about/about';
import { SkillsComponent }     from './components/skills/skills';
import { ResponsiveComponent }  from './components/responsive/responsive';
import { ProjectsComponent }   from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent }    from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CursorComponent,
    NavComponent,
    HeroComponent,
    MarqueeComponent,
    AboutComponent,
    SkillsComponent,
    ResponsiveComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
