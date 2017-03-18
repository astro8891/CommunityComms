import { Component } from '@angular/core';

import { volunteer } from './volunteer'
import { volunteerService } from './volunteer-signup.service'


@Component({
  moduleId: module.id,
  selector: 'VolunteerSignup',
  templateUrl: 'volunteer-signup.component.html',
  styleUrls: ['volunteer-signup.component.css']
})


export class VolunteerSignupComponent {

  name = "";
  phone: Number = null;
  email = "";
  joinedDate: Date = null;
  location = "";
  suburb = "";
  skills = "";
  areasOfInterest = "";
  yearsOfExperience: Number = null;
  levelOfExperience = "";
  whenAvailable = "";
  timeOfDayAvailable = "";
  typesOfOrganisationsInterestedIn = "";
  typesOfOrganisationsNotInterestedIn = "";
  notes = "";

  

}
