import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { organisation } from './organisation';

@Injectable()

export class organisationService {

    private url = 'http://communitycommsapi.azurewebsites.net/api/job/'

    constructor(private http: Http) { }

    getJob(id: number): Promise<organisation> {

        let organisationId = "/" + id;

        return this.http.get(encodeURI(this.url + organisationId)).toPromise()
        .then(response => response.json() as organisation)
        .catch(this.handleError)   
    }

    private handleError(error: any): Promise<any>{
        console.error('Query failed', error);
        return Promise.reject(error.message || error);
    }

}