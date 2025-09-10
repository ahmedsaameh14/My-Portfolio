import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-main',
  imports: [HomeComponent, AboutComponent, SkillsComponent, EducationComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
