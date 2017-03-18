import { Component, NgModule } from '@angular/core';

import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';

import { JobSignupComponent } from './JobSignup/job-signup.component';

import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component';

import { VolunteerQueryComponent } from './Volunteer-query/volunteer-query.component'

@Component({
  selector: 'my-app',
  // templateUrl: './app/app.component.html',
  // template:'<VolunteerQuery></VolunteerQuery>'
  //template:'<VolunteerSignup></VolunteerSignup>'
  //template:'<JobSignup></JobSignup>'
  template:'<VolunteerList></VolunteerList>'

})

export class AppComponent {}

