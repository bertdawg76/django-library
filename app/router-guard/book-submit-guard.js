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
//import {LoginService} from "../services/login.service";
//import { User } from '../book-display/book-display';
var BookSubmitGuard = (function () {
    //private isALibrarian = false;
    function BookSubmitGuard(router) {
        this.router = router;
        //this.isALibrarian = localStorage.getItem('Librarian');
    }
    BookSubmitGuard.prototype.canActivate = function () {
        if (localStorage.getItem('Librarian')) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    BookSubmitGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BookSubmitGuard);
    return BookSubmitGuard;
}());
exports.BookSubmitGuard = BookSubmitGuard;
//# sourceMappingURL=book-submit-guard.js.map