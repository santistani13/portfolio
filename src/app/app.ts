import { Component, computed } from '@angular/core';
import { CursorComponent }     from './components/cursor/cursor';
import { NavComponent }        from './components/nav/nav';
import { HeroComponent }       from './components/hero/hero';
import { MarqueeComponent }    from './components/marquee/marquee';
import { AboutComponent }      from './components/about/about';
import { SkillsComponent }     from './components/skills/skills';
import { TechStackComponent }  from './components/tech-stack/tech-stack';
import { ResponsiveComponent }  from './components/responsive/responsive';
import { ProjectsComponent }   from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent }    from './components/contact/contact';
import { LanguageService }     from './core/language';
import { translations }        from './core/translations';

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
    TechStackComponent,
    ResponsiveComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly t = computed(() => translations[this.lang.lang()].footer);

  constructor(private lang: LanguageService) {}
}
