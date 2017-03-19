import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { volunteer } from './volunteer'
import { volunteerService } from './volunteer-signup.service'


@Component({
  moduleId: module.id,
  selector: 'VolunteerSignup',
  templateUrl: 'volunteer-signup.component.html',
  styleUrls: ['volunteer-signup.component.css'],
  providers: [volunteerService, volunteer]
})


export class VolunteerSignupComponent {

  constructor(public _volunteerService: volunteerService, public _volunteer: volunteer){}

  name = "";
  phone: Number = null;
  email = "";
  joinedDate: Date = null;
  location = "";
  suburb = "";
  skills = "";
  areasOfInterest = "0-5";
  yearsOfExperience: "";
  levelOfExperience = "";
  whenAvailable = "";
  timeOfDayAvailable = "";
  typesOfOrganisationsInterestedIn = "";
  typesOfOrganisationsNotInterestedIn = "";
  notes = "";
  id: number = null;

  doesBindingWork(){

      this._volunteer.name = this.name;
      this._volunteer.phone = this.phone;
      this._volunteer.email = this.email;
      this._volunteer.joinedDate = this.joinedDate;
      this._volunteer.location = this.location;
      this._volunteer.suburb = this.suburb;
      this._volunteer.skills = this.skills;
      this._volunteer.areasOfInterest = this.areasOfInterest;
      this._volunteer.yearsOfExperience = this.yearsOfExperience;
      this._volunteer.levelOfExperience = this.levelOfExperience;
      this._volunteer.whenAvailable = this.whenAvailable
      this._volunteer.timeOfDayAvailable = this.timeOfDayAvailable;
      this._volunteer.typesOfOrganisationsInterestedIn = this.typesOfOrganisationsInterestedIn;
      this._volunteer.typesOfOrganisationsNotInterestedIn = this.typesOfOrganisationsNotInterestedIn;
      this._volunteer.notes = this.notes;
      this._volunteer.id = this.id;

        this._volunteerService.putVolunteerDetails(this._volunteer) 
  }

}
