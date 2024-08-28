import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WeatherProjectComponent } from './projects/weather-project/weather-project.component';
import { JobTrackerProjectComponent } from './projects/job-tracker-project/job-tracker-project.component';
import { JobAddComponent } from './projects/job-tracker-project/modals/job-add/job-add.component';
import { JobDeleteComponent } from './projects/job-tracker-project/modals/job-delete/job-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    ContactComponent,
    NavigationComponent,
    WeatherProjectComponent,
    JobTrackerProjectComponent,
    JobAddComponent,
    JobDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
