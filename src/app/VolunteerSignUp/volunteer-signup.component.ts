import { Component } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'VolunteerSignup',
  templateUrl: 'volunteer-signup.component.html',
  styleUrls: ['']
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
