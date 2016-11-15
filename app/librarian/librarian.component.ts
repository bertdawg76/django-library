import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'librarian',
    templateUrl: 'librarian.component.html',
    styleUrls: ['librarian.component.css']

})

export class librarianComponent {

    switch = {
        book_name: '',
        id: '',
        book_author: ''
    };

    constructor() {}

    public pushBook(event: any) {
        this.switch.id = event.id;
        this.switch.book_name = event.book_name;
        this.switch.book_author = event.book_author;
        console.log(this.switch);
    }

}