import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BookDisplayService} from "../services/book-display.service";
import { Router } from '@angular/router';
import {myCheckout, Book} from './book-display';
import {ShelfService} from "../services/shelf.service";
import {CheckoutService} from "../services/checkout.service";

@Component({
    moduleId: module.id,
    selector: 'book-display',
    templateUrl: 'book-display.component.html',
    styleUrls: ['book-display.component.css']

})

export class BookDisplay implements OnInit {
    public myCheckout: myCheckout;
    books = [];
    searchResults = [];
    nextBooks = [];
    //@Output() dataStream: EventEmitter<any> = new EventEmitter();
    errorMessage: string;
    mode = 'Observable';

    constructor(private bookDisplayService: BookDisplayService, private checkoutService: CheckoutService,
                private router: Router){}

    ngOnInit() { this.getBooks(); }





    getBooks(): void {
        this.bookDisplayService.getBooks()
            .subscribe((res) => {
                this.books = res;
                console.log(this.books);
        })
    }

    checkout(data: myCheckout){
        console.log(data);
        this.checkoutService.checkOut({
            'book': data.id,

        })
            .subscribe(
                () => this.router.navigate(['/mybooks']),
                error => this.errorMessage = <any>error
            );
    }

    performSearch(searchTerm: HTMLInputElement): void {
        console.log(`you entered ${searchTerm.value}`);
        this.bookDisplayService.getSearch(searchTerm.value)
            .subscribe((data) => {
                this.searchResults = data;
                console.log(this.searchResults);
            })
    }

    nextPage(data): void {
        console.log(`this is the next url: ${data}`);
        this.bookDisplayService.getNextPage(data)
            .subscribe((res) => {
                this.books = res;
                console.log(this.books);
            })
    }

    previousPage(data): void {
        console.log(`this is the next url: ${data}`);
        this.bookDisplayService.getPreviousPage(data)
            .subscribe((res) => {
                this.books = res;
                console.log(this.books);
            })
    }
}