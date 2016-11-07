import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Register } from '../register/register';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class RegisterService {

    private registerUrl: string = 'http://127.0.0.1:8700/register/';


    constructor(private http: Http) {

    }

    register (info: any): Observable<Register> {

        let body = JSON.stringify(info);
        console.log(body);

        let headers = new Headers({
            'Content-Type': 'application/json'
            //'Authorization': Token
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.registerUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }




    private handleError (error: any) {
        let errMsg = `${error.status} : ${error.statusText}'
        : Username, Email or password already taken, or password must be eight characters long`;
        console.log(errMsg);
        return Observable.throw(errMsg);
    }





}