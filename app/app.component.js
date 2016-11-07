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
var router_1 = require('@angular/router');
var login_service_1 = require('./services/login.service');
var userProfile_service_1 = require("./services/userProfile.service");
//import './rxjs-operators';
var AppComponent = (function () {
    //userProfile = [];
    function AppComponent(loginService, router, userProfileService) {
        this.loginService = loginService;
        this.router = router;
        this.userProfileService = userProfileService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.getUserProfile()
    };
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    AppComponent.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    };
    AppComponent.prototype.isALibrarian = function () {
        if (localStorage.getItem('Librarian')) {
            return true;
        }
        return false;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, userProfile_service_1.UserProfileService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map