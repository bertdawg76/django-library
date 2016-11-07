import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Book } from '../book-display/book-display';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class BookDisplayService {

    private booksUrl = 'http://127.0.0.1:8700/book/';

    constructor (private http: Http) {}

    getBooks(): Observable<Book[]>{
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.get(this.booksUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    addBook(data) {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.booksUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSearch(data) {
        console.log(data);
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        //return this.http.post(`this.booksUrl, data, options`)
        return this.http.get(`http://localhost:8700/book/?search=${data}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getNextPage(data){
        return this.http.get(data)
            .map(this.extractData)
            .catch(this.handleError)
    }

    getPreviousPage(data){
        return this.http.get(data)
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