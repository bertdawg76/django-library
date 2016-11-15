import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//import { Shelf } from '../book-display/book-display';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class BranchSwitchService {

    private shelfUrl = 'http://127.0.0.1:8700/shelf/';

    constructor (private http: Http) {}


}