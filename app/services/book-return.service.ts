import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { myBooks } from '../book-display/book-display';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class BookReturnService {

    private returnUrl: string = 'http://127.0.0.1:8700/return/';
    private checkoutUrl: string = 'http://127.0.0.1:8700/checkout/';
    constructor(private http: Http) {}

    //checkOut(data) {
    //    console.log(data);
    //    let authToken = localStorage.getItem('token');
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    headers.append('Authorization', `Token ${authToken}`);
    //    let options = new RequestOptions({ headers: headers });
    //    console.log(headers);
    //    return this.http.post(this.checkoutUrl, data, options)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}

    getCheckouts(): Observable<myBooks[]> {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers});
        return this.http.get(this.checkoutUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    returnBook(data) {
        console.log(data);
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.returnUrl, data, options)
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