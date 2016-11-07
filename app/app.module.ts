import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import {LoginService} from "./services/login.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterService} from "./services/register.service";
import {BookDisplay} from "./book-display/book-display.component";
import {AppRoutingModule} from "./app-routing.module";
import {BookSubmitComponent} from "./book-submit/book-submit.component";
import {BookDisplayService} from "./services/book-display.service";
import {ShelfService} from "./services/shelf.service";
import {UserProfileService} from "./services/userProfile.service";
import {BookSubmitGuard} from "./router-guard/book-submit-guard";
import {BookHomeComponent} from "./book-home/book-home.component";
import {BookCheckoutComponent} from "./book-checkout/book-checkout.component";
import {CheckoutService} from "./services/checkout.service";
import {MyBooksComponent} from "./my-books/my-books.component";
import {BookReturnComponent} from "./book-return/book-return.component";
import {BookReturnService} from "./services/book-return.service";
import {LoginGuard} from "./router-guard/login-guard";
import {AlreadyLoggedIn} from "./router-guard/alreadyLoggedIn-guard";
import {ReShelfBookService} from "./services/reShelfBook.service";
import {BookReshelfComponent} from "./book-reshelf/book-reshelf.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        BookDisplay,
        BookSubmitComponent,
        BookHomeComponent,
        BookCheckoutComponent,
        MyBooksComponent,
        BookReturnComponent,
        BookReshelfComponent

    ],
    providers: [
        LoginService,
        RegisterService,
        BookDisplayService,
        ShelfService,
        UserProfileService,
        BookSubmitGuard,
        CheckoutService,
        BookReturnService,
        LoginGuard,
        AlreadyLoggedIn,
        ReShelfBookService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

