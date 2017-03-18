import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { volunteer } from '../VolunteerSignUp/volunteer';

@Injectable()

export class volunteerListService {

    private url = 'http://communitycommsapi.azurewebsites.net/api/volunteer/'

    headers = new Headers();

    constructor(private http: Http) { }

    getVolunteer(id: number): Promise<volunteer> {

        let volunteerID = "/" + id;

        return this.http.get(encodeURI(this.url + volunteerID)).toPromise()
            .then(response => response.json() as volunteer)
            .catch(this.handleError)
    }

    putVolunteerDetails() {

        this.headers.append('Content-Type', 'application/json');
        this.http.put(this.url, JSON.stringify(volunteer), {headers: this.headers})
        // .map(res => res.json());         
            
        }   

    private handleError(error: any): Promise<any> {
        console.error('Query failed', error);
        return Promise.reject(error.message || error);
    }

}