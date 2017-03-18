import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobSignupComponent } from './JobSignup/job-signup.component'
import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component'
import { VolunteerQueryComponent } from './Volunteer-query/volunteer-query.component'

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule],

  declarations: [AppComponent,
    VolunteerSignupComponent, JobSignupComponent, OrganisationSignupComponent, VolunteerQueryComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
