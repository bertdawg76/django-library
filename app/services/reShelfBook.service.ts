import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Return } from '../book-reshelf/book-reshelf';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ReShelfBookService {

    private reshelfUrl = 'http://127.0.0.1:8700/reshelf/';


    constructor (private http: Http) {}

    getReturnedBooks(): Observable<Return[]> {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.get(this.reshelfUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }



    public getMyBook(id: string | number){
        return this.http.get(`http://localhost:8700/book/${id}/`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getUser(id: string | number){
        return this.http.get(`http://localhost:8700/userprofile/${id}/`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public reShelfBook(id: number){
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        console.log(id);
        return this.http.post(`http://localhost:8700/book/${id}/reshelf/`, "", options)
            .map(this.extractData)
            .catch(this.handleError)
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
