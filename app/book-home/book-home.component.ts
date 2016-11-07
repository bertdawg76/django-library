import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'book-home',
    templateUrl: './book-home.component.html',
    styleUrls: ['./book-home.component.css']
})

export class BookHomeComponent {

    checkout = {
        books: []
        //book_name: []

    };

    constructor(){}

    public pushBook(event: any){
        this.checkout.books.push(event.book_name);
        console.log(event.book_name);
        console.log(this.checkout.books);
        //this.checkout.book_name.push(event);
        //console.log(this.checkout.books);
    }

    public removeBook(event: any){
        let remove = this.checkout.books.indexOf(event);
        console.log(remove);
        this.checkout.books.splice(remove, 1);
        console.log(this.checkout.books);
    }
}