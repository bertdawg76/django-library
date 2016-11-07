import { Component, OnInit } from '@angular/core';
import {ReShelfBookService} from "../services/reShelfBook.service";
import { Router } from '@angular/router';
import { myCheckout } from '../book-display/book-display';


@Component({
    moduleId: module.id,
    selector: 'book-reshelf',
    templateUrl: 'book-reshelf.component.html',
    styleUrls: ['book-reshelf.component.css']
})

export class BookReshelfComponent implements OnInit {

    returns = [];
    errorMessage: string;
    mode = 'Observable';

    constructor(private reshelfBookService: ReShelfBookService, private router: Router){}

    ngOnInit() { this.getReturns();}



    getReturns() {
        this.reshelfBookService.getReturnedBooks().subscribe((response:any) => {
            console.log(response);
            response.forEach((order) => {

                this.reshelfBookService.getMyBook(order.book).subscribe((book:any) => {
                    order.book = book;
                    console.log(book);
                });

                this.reshelfBookService.getUser(order.user).subscribe((user:any) => {
                    order.user = user;
                    console.log(user);
                });

            });
            this.returns = response;
            console.log(this.returns);
        });

    }

    reShelfBook(data){
        console.log('this is your book', data);
        this.reshelfBookService.reShelfBook(data)
            .subscribe(
                (data) => this.router.navigate(['/bookdisplay']),
                error => this.errorMessage = <any>error
            )
    }





}