import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { myBooks, myReturn } from '../book-display/book-display';
import {BookReturnService} from "../services/book-return.service";
import {UserProfileService} from "../services/userProfile.service";


@Component({
    moduleId: module.id,
    selector: 'book-return',
    templateUrl: 'book-return.component.html',
    styleUrls: ['book-return.component.css']
})

export class BookReturnComponent implements OnInit {

    public myBooks: myBooks;
    errorMessage: string;
    mode = 'Observable';

    constructor(private bookReturnService: BookReturnService, private router: Router){}

    ngOnInit() { this.getCheckouts(); }

    getCheckouts() {
        this.bookReturnService.getCheckouts().subscribe((response:any) => {
            console.log(response);
            response.forEach((order) => {

                this.bookReturnService.getMyBook(order.book).subscribe((book:any) => {
                    order.book = book;
                    console.log(book);
                });

                this.bookReturnService.getUser(order.user).subscribe((user:any) => {
                    order.user = user;
                    console.log(user);
                });

            });
            this.myBooks = response;
            console.log(this.myBooks);
        });

    }

    returnBook(data: myReturn ){
        console.log(data);
        this.bookReturnService.returnBook({
                'checkouts': data.id,
                'book': data.book.id


            })
            .subscribe(
                () => this.router.navigate(['/bookdisplay']),
                error => this.errorMessage = <any>error
            );
    }

}