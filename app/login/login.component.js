"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_service_1 = require('../services/login.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(loginService, fb, router) {
        this.loginService = loginService;
        this.router = router;
        this.users = [];
        this.model = 'Observable';
        this.loginForm = fb.group({
            username: [
                '',
                [forms_1.Validators.required]
            ],
            password: [
                '',
                [forms_1.Validators.required]
            ]
        });
    }
    LoginComponent.prototype.login = function (info) {
        var _this = this;
        this.loginService.login(info)
            .subscribe(function () {
            return _this.router.navigate(['/bookdisplay']);
        }, function (error) { return _this.errorMessage = alert(error); });
        console.log('you submitted: ', info);
        console.log(this.errorMessage);
    };
    LoginComponent.prototype.reset = function () {
        this.loginForm.reset();
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    LoginComponent.prototype.isLoggedIn = function () {
        this.loginService.isLoggedIn();
    };
    LoginComponent.prototype.isLibrarian = function () {
        this.loginService.isLibrarian();
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, forms_1.FormBuilder, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map