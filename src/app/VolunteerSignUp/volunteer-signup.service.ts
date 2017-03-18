import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { volunteer } from './volunteer';

@Injectable()

export class volunteerService {

    private url = 'http://communitycommsapi.azurewebsites.net/api/volunteer/'

    constructor(private http: Http) { }

    getVolunteer(id: number): Promise<volunteer> {

        let volunteerID = "/" + id;

        return this.http.get(encodeURI(this.url + volunteerID)).toPromise()
        .then(response => response.json() as volunteer)
        .catch(this.handleError)   
    }

    private handleError(error: any): Promise<any>{
        console.error('Query failed', error);
        return Promise.reject(error.message || error);
    }

}