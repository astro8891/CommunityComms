import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { volunteer } from './volunteer';

@Injectable()

export class volunteerService {

    private url = 'http://communitycommsapi.azurewebsites.net/api/volunteer/'

    headers = new Headers();

    constructor(private http: Http) { }

    getVolunteer(id: number): Promise<volunteer> {

        let volunteerID = "/" + id;

        return this.http.get(encodeURI(this.url + volunteerID)).toPromise()
            .then(response => response.json() as volunteer)
            .catch(this.handleError)
    }

    putVolunteerDetails(volunteer: volunteer) {

console.log(volunteer);
volunteer.location = 1
volunteer.joinedDate = new Date()
volunteer.skills = 1

        this.headers.append('Content-Type', 'application/json');
        this.http.post(this.url, JSON.stringify(volunteer), {headers: this.headers})
        // .map(res => res.json());         
            
        }   

    private handleError(error: any): Promise<any> {
        console.error('Query failed', error);
        return Promise.reject(error.message || error);
    }

}