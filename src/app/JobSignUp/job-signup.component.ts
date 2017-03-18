import { Component } from '@angular/core';

import { job } from './job'
import { jobService } from './job-signup.service'

@Component({
  moduleId: module.id,
  selector: 'JobSignup',
  templateUrl: 'job-signup.component.html',
  styleUrls: ['']
})


export class JobSignupComponent {

    jobId: Number;
    description: Number;
    notes: String;
    organisationId: Number;
    email: String;
    phone: String;
    matchmaker: String;
    estimatedHours: Number;
    startDate: Date;
    endDate: Date;

}