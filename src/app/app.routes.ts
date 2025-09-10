import { Routes } from '@angular/router';
import { MainComponent } from './sections/main/main.component';
import { LayoutComponent } from './sections/layout/layout.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

export const routes: Routes = [
    {
        path:'' , component:LayoutComponent,
        children: [
            {path:'' , component: MainComponent},
            {path:'about' , component: AboutComponent},
            {path:'skills' , component: SkillsComponent},
            {path:'education' , component: EducationComponent},
            {path:'experience' , component: ExperienceComponent},
            {path:'projects' , component: ProjectsComponent},
            {path:'contact' , component: ContactComponent},
            {path: '', redirectTo: '', pathMatch: 'full' },
        ]
    }

];
