import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';





@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(){
        if (localStorage.getItem('token')) {

            return true;
        }
        this.router.navigate(['/home']);
        return false;
    }



}