import { Component } from '@angular/core';
import { Login } from './login';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder, FormGroupDirective, NgForm, FormControlDirective } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {UserProfileService} from "../services/userProfile.service";


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']

})

export class LoginComponent {

    loginForm: FormGroup;
    users = [];
    errorMessage: string;
    model = 'Observable';

    constructor(private loginService: LoginService, fb: FormBuilder, private router:Router) {

        this.loginForm = fb.group({
            username: [
                '',
                [Validators.required]
            ],
            password: [
                '',
                [Validators.required]
            ]
        });
    }




    login(info) {

        this.loginService.login(info)
            .subscribe(
                () =>
                this.router.navigate(['/bookdisplay']),
                error => this.errorMessage = <any>alert(error)

                );

        console.log('you submitted: ', info);
        console.log(this.errorMessage);


    }
    reset(){
        this.loginForm.reset();
    }

    logout(){
        this.loginService.logout();

    }


    isLoggedIn(){
        this.loginService.isLoggedIn();
    }

    isLibrarian(){
        this.loginService.isLibrarian();
    }
}