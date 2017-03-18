import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobsSignupComponent } from './JobsSignup/jobs-signup.component'

@NgModule({
  imports: [BrowserModule],

  declarations: [AppComponent,
    VolunteerSignupComponent, JobsSignupComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
