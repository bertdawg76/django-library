import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Login } from '../login/login';
import { User } from '../book-display/book-display'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class LoginService {
    private loggedIn = false;
    private loginUrl: string = 'http://127.0.0.1:8700/api-token-auth/';
    private token = String();
    Librarian: boolean;
    private isALibrarian = false;

    constructor(private http: Http, private router: Router) {
        this.loggedIn = !!localStorage.getItem('token');
        //this.isALibrarian = !!localStorage.getItem('Librarian');
        //console.log(this.isALibrarian)
    }



    login (info: any): Observable<Login> {

        let body = JSON.stringify(info);
        console.log(body);

        let headers = new Headers({
            'Content-Type': 'application/json'
            //'Authorization': Token
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.loginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }


    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        this.token = body.token;
        this.Librarian = body.Librarian;
        if(this.Librarian == true){
            localStorage.setItem('Librarian', JSON.stringify(this.Librarian));
        }
        localStorage.setItem('token', this.token);
        //localStorage.setItem('Librarian', this.Librarian);
        return body || {};

    }



    private handleError (error: any) {
        let errMsg = `${error.status} : ${error.statusText}' : Wrong Username or Password`;
        console.log(errMsg);
        return Observable.throw(errMsg);
    }



    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('Librarian');
        this.loggedIn = false;
        this.isALibrarian = false;
        this.router.navigate(['/home'])

    }

    isLoggedIn(){
        return this.loggedIn;

    }

    isLibrarian(){
        return this.isALibrarian;
    }





}