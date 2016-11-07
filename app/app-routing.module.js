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
var register_component_1 = require('./register/register.component');
var login_component_1 = require('./login/login.component');
var book_display_component_1 = require("./book-display/book-display.component");
var book_submit_component_1 = require("./book-submit/book-submit.component");
var book_submit_guard_1 = require("./router-guard/book-submit-guard");
var book_home_component_1 = require("./book-home/book-home.component");
var my_books_component_1 = require("./my-books/my-books.component");
var book_return_component_1 = require("./book-return/book-return.component");
var login_guard_1 = require("./router-guard/login-guard");
var alreadyLoggedIn_guard_1 = require("./router-guard/alreadyLoggedIn-guard");
var book_reshelf_component_1 = require("./book-reshelf/book-reshelf.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: book_home_component_1.BookHomeComponent },
                    { path: 'bookdisplay', component: book_display_component_1.BookDisplay, canActivate: [login_guard_1.LoginGuard] },
                    { path: 'login', component: login_component_1.LoginComponent, canActivate: [alreadyLoggedIn_guard_1.AlreadyLoggedIn] },
                    { path: 'register', component: register_component_1.RegisterComponent, canActivate: [alreadyLoggedIn_guard_1.AlreadyLoggedIn] },
                    { path: 'addbook', component: book_submit_component_1.BookSubmitComponent, canActivate: [book_submit_guard_1.BookSubmitGuard] },
                    { path: 'mybooks', component: my_books_component_1.MyBooksComponent, canActivate: [login_guard_1.LoginGuard] },
                    { path: 'returns', component: book_return_component_1.BookReturnComponent, canActivate: [login_guard_1.LoginGuard] },
                    { path: 'reshelf', component: book_reshelf_component_1.BookReshelfComponent, canActivate: [book_submit_guard_1.BookSubmitGuard] },
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map