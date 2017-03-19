import { Component, NgModule } from '@angular/core';

import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';

import { JobSignupComponent } from './JobSignup/job-signup.component';

import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component';

import { VolunteerQueryComponent } from './Volunteer-query/volunteer-query.component'

import { VolunteerListComponent } from './VolunteerList/volunteer-list.component'

import { JobListComponent } from './JobList/job-list.component'

@Component({
  selector: 'my-app',
  template:'<router-outlet></router-outlet>'
})

export class AppComponent {}
