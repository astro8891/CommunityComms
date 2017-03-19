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
  locationId: Number = null;
  locationDescription = "";
  suburb = "";
  selectedSkills = new Array<Number>();
  skillsDescription = "";
  interestedIn = "";
  yearsOfExperience: "";
  levelOfExperience = "";
  frequencyAvailable = "";
  timeOfDayAvailable = "";
  typesOfOrganisationsInterestedIn = "";
  typesOfOrganisationsNotInterestedIn = "";
  notes = "";
  volunteerId: Number = 0;
  available = "";

  doesBindingWork(){

      this._volunteer.name = this.name;
      this._volunteer.phone = this.phone;
      this._volunteer.email = this.email;
      this._volunteer.joinedDate = this.joinedDate;
      this._volunteer.locationId = this.locationId;
      this._volunteer.locationDescription = this.locationDescription;
      this._volunteer.suburb = this.suburb;
      this._volunteer.selectedSkills = this.selectedSkills;
      this._volunteer.skillsDescription = this.skillsDescription;
      this._volunteer.interestedIn = this.interestedIn;
      this._volunteer.yearsOfExperience = this.yearsOfExperience;
      this._volunteer.levelOfExperience = this.levelOfExperience;
      this._volunteer.frequencyAvailable = this.frequencyAvailable
      this._volunteer.timeOfDayAvailable = this.timeOfDayAvailable;
      this._volunteer.typesOfOrganisationsInterestedIn = this.typesOfOrganisationsInterestedIn;
      this._volunteer.typesOfOrganisationsNotInterestedIn = this.typesOfOrganisationsNotInterestedIn;
      this._volunteer.notes = this.notes;
      this._volunteer.volunteerId = this.volunteerId;

        this._volunteerService.putVolunteerDetails(this._volunteer) 
  }

}
