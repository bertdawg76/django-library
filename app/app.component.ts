import { Component, OnInit, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import {UserProfileService} from "./services/userProfile.service";
//import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
    //userProfile = [];

    constructor( private loginService: LoginService, private router: Router, private userProfileService: UserProfileService) {
    }

    public ngOnInit() {
       // this.getUserProfile()
    }

    logout(){
        this.loginService.logout();
    }

    isLoggedIn() {
        if (localStorage.getItem('token')) {

            return true;
        }

        return false;
    }

    isALibrarian(){
        if (localStorage.getItem('Librarian')) {
            return true;
        }

        return false;
    }


}
