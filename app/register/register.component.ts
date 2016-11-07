import { Component } from '@angular/core';
import { Register } from './register';
import { RegisterService } from '../services/register.service';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder, FormGroupDirective, NgForm, FormControlDirective } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']

})

export class RegisterComponent {

    registerForm: FormGroup;

    errorMessage: string;
    model = 'Observable';

    constructor(private registerService: RegisterService, fb: FormBuilder, private router:Router) {

        this.registerForm = fb.group({
            email: [
                '',
                [Validators.required]
            ],
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

    register(info) {


        this.registerService.register(info)
            .subscribe(
                () => this.router.navigate(['/login']),
                error => this.errorMessage = <any>alert(error));
        console.log('you submitted: ', info);

    }
    reset(){
        this.registerForm.reset();
    }


}