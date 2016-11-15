import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BookDisplayService} from "../services/book-display.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder, FormGroupDirective, NgForm, FormControlDirective } from '@angular/forms';
import {myCheckout, Book} from './book-display';
import {ShelfService} from "../services/shelf.service";
import {CheckoutService} from "../services/checkout.service";
import { Subject } from 'rxjs/Subject';

import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
    moduleId: module.id,
    selector: 'book-display',
    templateUrl: 'book-display.component.html',
    styleUrls: ['book-display.component.css']

})

export class BookDisplay implements OnInit {
    lastSearched: any;
    searchForm: FormGroup;
    public myCheckout: myCheckout;
    books = [];
    //public books = Book;
    searchResults = [];
    nextBooks = [];

    errorMessage: string;
    mode = 'Observable';

    constructor(private bookDisplayService: BookDisplayService, private checkoutService: CheckoutService,
                private router: Router, private fb: FormBuilder) {

        this.searchForm = fb.group({
            searchterm: [
                ''
            ]
        });
        //this.searchControl = new FormControl()

    }

    ngOnInit() { this.getBooks(); }





    //getBooks(): void {
    //    this.bookDisplayService.getBooks()
    //        .subscribe((res) => {
    //            this.books = res;
    //            console.log(this.books);
    //    })
    //}

    public resolveShelf(id: number) {
        return new Promise((resolve, reject) => {
            this.bookDisplayService.getShelf(id).subscribe((r: any) => {
                resolve(r);
            });
        });
    }

    getBooks() {
        this.bookDisplayService.getBooks().subscribe((response:any) => {
            console.log(response);
            response.results.forEach((item) => {

                this.resolveShelf(item.book_shelf).then((shelf: any) => {
                    this.bookDisplayService.getBranch(shelf.branch).subscribe((branch:any) => {
                        item.location = branch.location;
                        console.log(branch);
                    });
                });
            });
            this.books = response;
            console.log(this.books);
     });
    }

    nextPage(data): void {
        console.log(`this is the next url: ${data}`);
        this.bookDisplayService.getNextPage(data)
            .subscribe((response:any) => {
                response.results.forEach((item) => {

                    this.resolveShelf(item.book_shelf).then((shelf: any) => {
                        this.bookDisplayService.getBranch(shelf.branch).subscribe((branch:any) => {
                            item.location = branch.location;
                            console.log(branch);
                        });
                    });
                });
                this.books = response;
                console.log(this.books);
            })
    }

    previousPage(data): void {
        console.log(`this is the next url: ${data}`);
        this.bookDisplayService.getPreviousPage(data)
            .subscribe((response:any) => {
                response.results.forEach((item) => {

                    this.resolveShelf(item.book_shelf).then((shelf: any) => {
                        this.bookDisplayService.getBranch(shelf.branch).subscribe((branch:any) => {
                            item.location = branch.location;
                            console.log(branch);
                        });
                    });
                });
                this.books = response;
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
    //
    //performSearch(searchTerm: HTMLInputElement): void {
    //    console.log(`you entered ${searchTerm.value}`);
    //    this.bookDisplayService.getSearch(searchTerm.value)
    //        //.debounceTime(1000)
    //        .subscribe((data) => {
    //            this.searchResults = data;
    //            console.log(this.searchResults);
    //        })
    //}

    performSearch(event): void {
        console.log(`you entered ${event}`);
        this.bookDisplayService.getSearch(event)
            .subscribe((data) => {
                this.searchResults = data;
                console.log(this.searchResults);
            })
    }

    public search(event: any) {
        let d = new Date();
        this.lastSearched = d.getMilliseconds();
        this.checkDebounce(this.lastSearched, event);
        console.log(event);
        console.log(this.lastSearched);

    }
    public checkDebounce(time: any, event: any) {
        setTimeout(() => {
            if (time === this.lastSearched) {
              this.performSearch(event)
            }
        }, 1000);
    }


    //performSearch(info): void {
    //    console.log(info);
    //    this.bookDisplayService.getSearch(info)
    //        .debounceTime(1000)
    //        .subscribe((data) => {
    //            this.searchResults = data;
    //            console.log(this.searchResults);
    //        })
    //}

    //nextPage(data): void {
    //    console.log(`this is the next url: ${data}`);
    //    this.bookDisplayService.getNextPage(data)
    //        .subscribe((res) => {
    //            this.books = res;
    //            console.log(this.books);
    //        })
    //}

    nextSearchPage(data): void {
        console.log(`this is the next url: ${data}`);
        this.bookDisplayService.getNextPage(data)
            .subscribe((response:any) => {
                response.results.forEach((item) => {

                    this.resolveShelf(item.book_shelf).then((shelf: any) => {
                        this.bookDisplayService.getBranch(shelf.branch).subscribe((branch:any) => {
                            item.location = branch.location;
                            console.log(branch);
                        });
                    });
                });
                this.searchResults = response;
                console.log(this.searchResults);
            })
    }

    //previousPage(data): void {
    //    console.log(`this is the next url: ${data}`);
    //    this.bookDisplayService.getPreviousPage(data)
    //        .subscribe((res) => {
    //            this.books = res;
    //            console.log(this.books);
    //        })
    //}

    previousSearchPage(data): void {
        console.log(`this is the next url: ${data}`);
        this.bookDisplayService.getPreviousPage(data)
            .subscribe((response:any) => {
                response.results.forEach((item) => {

                    this.resolveShelf(item.book_shelf).then((shelf: any) => {
                        this.bookDisplayService.getBranch(shelf.branch).subscribe((branch:any) => {
                            item.location = branch.location;
                            console.log(branch);
                        });
                    });
                });
                this.searchResults = response;
                console.log(this.searchResults);
            })
    }
}