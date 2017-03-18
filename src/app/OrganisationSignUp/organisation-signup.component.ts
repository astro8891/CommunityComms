import { Component } from '@angular/core';

import { organisation } from './organisation'
import { organisationService } from './organisation-signup.service'

@Component({
  moduleId: module.id,
  selector: 'OrganisationSignup',
  templateUrl: 'organisation-signup.component.html',
  styleUrls: ['']
})


export class OrganisationSignupComponent {

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