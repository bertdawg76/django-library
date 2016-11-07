import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import {LoginService} from "../services/login.service";

//import { User } from '../book-display/book-display';


@Injectable()
export class BookSubmitGuard implements CanActivate {
    //private isALibrarian = false;
    constructor(private router: Router) {
        //this.isALibrarian = localStorage.getItem('Librarian');
    }

    canActivate(){
        if (localStorage.getItem('Librarian')) {

            return true;
        }
        this.router.navigate(['/home']);
        return false;
    }



}