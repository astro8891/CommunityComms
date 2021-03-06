import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { job } from './job';

@Injectable()

export class jobService {

    private url = 'http://communitycommsapi.azurewebsites.net/api/job/'

    constructor(private http: Http) { }

    getJob(id: number): Promise<job> {

        let jobId = "/" + id;

        return this.http.get(encodeURI(this.url + jobId)).toPromise()
        .then(response => response.json() as job)
        .catch(this.handleError)   
    }

    private handleError(error: any): Promise<any>{
        console.error('Query failed', error);
        return Promise.reject(error.message || error);
    }

}