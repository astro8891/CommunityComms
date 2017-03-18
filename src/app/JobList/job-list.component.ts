import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { job } from '../JobSignUp/job' 
import { jobListService } from './job-list.service'


@Component({
  moduleId: module.id,
  selector: 'JobList',
  templateUrl: 'job-list.component.html',
  styleUrls: ['job-list.component.css']
})


export class JobListComponent {

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
