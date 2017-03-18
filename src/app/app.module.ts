import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobSignupComponent } from './JobSignup/job-signup.component'
import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component'
import { VolunteerQueryComponent } from './Volunteer-query/volunteer-query.component'
import { VolunteerListComponent } from './VolunteerList/volunteer-list.component'
import { JobListComponent } from './JobList/job-list.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule],

  declarations: [
    AppComponent,
    VolunteerSignupComponent, 
    JobSignupComponent,
    OrganisationSignupComponent, 
    VolunteerQueryComponent, 
    VolunteerListComponent, 
    JobListComponent],

  bootstrap: [
    AppComponent]
})
export class AppModule { }
