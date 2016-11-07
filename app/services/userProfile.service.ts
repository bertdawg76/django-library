import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../book-display/book-display';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class UserProfileService {

    private profile = Object();
    private userUrl = 'http://127.0.0.1:8700/userprofile/';


    constructor (private http: Http) {

    }

    getUserProfile(): Observable<User[]> {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.get(this.userUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {
        let body = res.json();

        this.profile = body;
        console.log(this.profile.isLibrarian);
        localStorage.setItem('profile', JSON.stringify(this.profile));
        return this.profile || {};
    }



    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}