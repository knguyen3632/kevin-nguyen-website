import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherProjectComponent } from './projects/weather-project/weather-project.component';
import { JobTrackerProjectComponent } from './projects/job-tracker-project/job-tracker-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'weather-app', component: WeatherProjectComponent },
  { path: 'job-tracker-app', component: JobTrackerProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
