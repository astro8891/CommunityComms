import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { job } from '../JobSignUp/job';

@Injectable()

export class jobListService {

    private url = 'http://communitycommsapi.azurewebsites.net/api/job/'

    headers = new Headers();

    constructor(private http: Http) { }

    getVolunteer(id: number): Promise<job> {

        let volunteerID = "/" + id;

        return this.http.get(encodeURI(this.url + jobID)).toPromise()
            .then(response => response.json() as job)
            .catch(this.handleError)
    }

    putVolunteerDetails() {

        this.headers.append('Content-Type', 'application/json');
        this.http.put(this.url, JSON.stringify(job), {headers: this.headers})
        // .map(res => res.json());         
            
        }   

    private handleError(error: any): Promise<any> {
        console.error('Query failed', error);
        return Promise.reject(error.message || error);
    }

}