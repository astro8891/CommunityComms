import { Component, NgModule } from '@angular/core';

import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobsSignupComponent } from
'./JobsSignup/jobs-signup.component';

@Component({
  selector: 'my-app',
  // templateUrl: './app/app.component.html',
  
  template:'<JobsSignup></JobsSignup>'

})
export class AppComponent {}

