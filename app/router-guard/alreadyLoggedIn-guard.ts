import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AlreadyLoggedIn implements CanActivate {

    constructor(private router:Router) {}

    canActivate() {
        if (localStorage.getItem('token') === null)  {

            return true;
        }


        this.router.navigate(['/home']);
        return false;
    }
}