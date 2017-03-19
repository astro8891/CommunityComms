import { Component, NgModule } from '@angular/core';

import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';

import { JobSignupComponent } from './JobSignup/job-signup.component';

import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component';

import { VolunteerQueryComponent } from './Volunteer-query/volunteer-query.component'

import { VolunteerListComponent } from './VolunteerList/volunteer-list.component'

import { JobListComponent } from './JobList/job-list.component'


@Component({
  selector: 'my-app',
  // template:'<router-outlet></router-outlet>'
  // templateUrl: './app/app.component.html',
  // template:'<VolunteerQuery></VolunteerQuery>'
  //template:'<VolunteerSignup></VolunteerSignup>'
  //template:'<JobSignup></JobSignup>'
  // template:'<VolunteerList></VolunteerList>'
  template:'<JobList></JobList>'
})

export class AppComponent {}
