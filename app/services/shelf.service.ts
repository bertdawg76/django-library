import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Shelf } from '../book-display/book-display';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ShelfService {

    private shelfUrl = 'http://127.0.0.1:8700/shelf/';

    constructor (private http: Http) {}

    getShelf(): Observable<Shelf[]> {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.get(this.shelfUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    public getBranch(id: string | number){
        return this.http.get(`http://localhost:8700/branch/${id}/`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}

