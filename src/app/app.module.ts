import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobSignupComponent } from './JobSignup/job-signup.component'
import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component'

@NgModule({
  imports: [BrowserModule],

  declarations: [AppComponent,
    VolunteerSignupComponent, JobSignupComponent, OrganisationSignupComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
