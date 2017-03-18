import { Component, NgModule } from '@angular/core';

import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { JobSignupComponent } from
'./JobSignup/job-signup.component';

@Component({
  selector: 'my-app',
  // templateUrl: './app/app.component.html',
  template:'<VolunteerSignup></VolunteerSignup>'

  //template:'<JobSignup></JobSignup>'

})
export class AppComponent {}

