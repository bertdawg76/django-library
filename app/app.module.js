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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var login_service_1 = require("./services/login.service");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var register_service_1 = require("./services/register.service");
var book_display_component_1 = require("./book-display/book-display.component");
var app_routing_module_1 = require("./app-routing.module");
var book_submit_component_1 = require("./book-submit/book-submit.component");
var book_display_service_1 = require("./services/book-display.service");
var shelf_service_1 = require("./services/shelf.service");
var userProfile_service_1 = require("./services/userProfile.service");
var book_submit_guard_1 = require("./router-guard/book-submit-guard");
var book_home_component_1 = require("./book-home/book-home.component");
var book_checkout_component_1 = require("./book-checkout/book-checkout.component");
var checkout_service_1 = require("./services/checkout.service");
var my_books_component_1 = require("./my-books/my-books.component");
var book_return_component_1 = require("./book-return/book-return.component");
var book_return_service_1 = require("./services/book-return.service");
var login_guard_1 = require("./router-guard/login-guard");
var alreadyLoggedIn_guard_1 = require("./router-guard/alreadyLoggedIn-guard");
var reShelfBook_service_1 = require("./services/reShelfBook.service");
var book_reshelf_component_1 = require("./book-reshelf/book-reshelf.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                book_display_component_1.BookDisplay,
                book_submit_component_1.BookSubmitComponent,
                book_home_component_1.BookHomeComponent,
                book_checkout_component_1.BookCheckoutComponent,
                my_books_component_1.MyBooksComponent,
                book_return_component_1.BookReturnComponent,
                book_reshelf_component_1.BookReshelfComponent
            ],
            providers: [
                login_service_1.LoginService,
                register_service_1.RegisterService,
                book_display_service_1.BookDisplayService,
                shelf_service_1.ShelfService,
                userProfile_service_1.UserProfileService,
                book_submit_guard_1.BookSubmitGuard,
                checkout_service_1.CheckoutService,
                book_return_service_1.BookReturnService,
                login_guard_1.LoginGuard,
                alreadyLoggedIn_guard_1.AlreadyLoggedIn,
                reShelfBook_service_1.ReShelfBookService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map