import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { volunteer } from './volunteer'
import { volunteerQueryService } from './volunteer-query.service'


@Component({
    moduleId: module.id,
    selector: 'VolunteerQuery',
    templateUrl: 'volunteer-query.component.html',
    styleUrls: ['volunteer-query.component.css'],
    providers: [volunteerQueryService]
})


export class VolunteerQueryComponent {

    constructor(public _volunteerQueryService: volunteerQueryService){}
    
    public _volunteer: volunteer;

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

    getVolunteer() {
        this._volunteerQueryService.getVolunteer(this.id).then(
        result => {this._volunteer = result, console.log(result)})        
    }
}
