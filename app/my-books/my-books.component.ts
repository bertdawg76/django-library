import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Book, myCheckout, myBooks} from '../book-display/book-display';
import {CheckoutService} from "../services/checkout.service";

@Component({
    moduleId: module.id,
    selector: 'my-books',
    templateUrl: 'my-books.component.html',
    styleUrls: ['my-books.component.css']
})

export class MyBooksComponent implements OnInit {

    public myBooks: myBooks;
    errorMessage: string;
    mode = 'Observable';

    constructor(private checkoutService: CheckoutService){}

    ngOnInit() { this.getMyBooks(); }


    getMyBooks() {
        this.checkoutService.getMyBooks().subscribe((response:any) => {
            console.log(response);
            response.forEach((order) => {

                this.checkoutService.getMyBook(order.book).subscribe((book:any) => {
                    order.book = book;
                    console.log(book);
                });

                this.checkoutService.getUser(order.user).subscribe((user:any) => {
                    order.user = user;
                    console.log(user);
                });

            });
            this.myBooks = response;
            console.log(this.myBooks);
        });

    }


}
