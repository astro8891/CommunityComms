import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { volunteer } from '../VolunteerSignUp/volunteer' 
import { volunteerListService } from './volunteer-list.service'


@Component({
  moduleId: module.id,
  selector: 'VolunteerList',
  templateUrl: 'volunteer-list.component.html',
  styleUrls: ['volunteer-list.component.css']
})


export class VolunteerListComponent {

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
  id: number = null;

  doesBindingWork(){
    console.log(this.name)
  }

 

}
