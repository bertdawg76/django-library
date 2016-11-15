import { NgModule }     from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { RegisterComponent }  from './register/register.component';
import { LoginComponent } from './login/login.component';
import {BookDisplay} from "./book-display/book-display.component";
import {BookSubmitComponent} from "./book-submit/book-submit.component";
import {BookSubmitGuard} from "./router-guard/book-submit-guard";
import {BookCheckoutComponent} from "./book-checkout/book-checkout.component";
import {BookHomeComponent} from "./book-home/book-home.component";
import {MyBooksComponent} from "./my-books/my-books.component";
import {BookReturnComponent} from "./book-return/book-return.component";
import {LoginGuard} from "./router-guard/login-guard";
import {AlreadyLoggedIn} from "./router-guard/alreadyLoggedIn-guard";
import {BookReshelfComponent} from "./book-reshelf/book-reshelf.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {librarianComponent} from "./librarian/librarian.component";



@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: 'home', component: BookHomeComponent},
            { path: 'bookdisplay', component: BookDisplay, canActivate: [LoginGuard]},
            { path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedIn]},
            { path: 'register', component: RegisterComponent, canActivate: [AlreadyLoggedIn]},
            { path: 'addbook', component: BookSubmitComponent, canActivate: [BookSubmitGuard]},
            { path: 'mybooks', component: MyBooksComponent, canActivate: [LoginGuard]},
            { path: 'returns', component: BookReturnComponent, canActivate: [LoginGuard]},
            { path: 'reshelf', component: BookReshelfComponent, canActivate: [BookSubmitGuard]},
            { path: 'librarian', component: librarianComponent, canActivate: [BookSubmitGuard]}
            //{ path: 'addanotherbook', component: AddBookComponent}

        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}