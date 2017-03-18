import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobsSignupComponent } from './JobsSignup/jobs-signup.component'

@NgModule({
  imports: [BrowserModule,
    FormsModule],

  declarations: [AppComponent,
    VolunteerSignupComponent, JobsSignupComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
