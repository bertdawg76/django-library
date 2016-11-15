import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder, FormGroupDirective, NgForm, FormControlDirective } from '@angular/forms';
import {BookDisplayService} from "../services/book-display.service";
import { Book, Shelf, File } from '../book-display/book-display';
import { Router } from '@angular/router';
import {ShelfService} from "../services/shelf.service";



@Component({
    moduleId: module.id,
    selector: 'book-submit',
    templateUrl: 'book-submit.component.html',
    styleUrls: ['book-submit.component.css']
})

export class BookSubmitComponent implements OnInit {

    isLibrarian: any;
    filesToUpload: Array<File>;
    shelfs: Shelf[];
    books: Book[];
    errorMessage: string;
    mode = 'Observable';
    bookForm: FormGroup;

    constructor(private bookDisplayService: BookDisplayService, private router:Router, fb: FormBuilder,
                private shelfService: ShelfService) {

        this.bookForm = fb.group({
            book_name: [
                '',
                [Validators.required]
            ],
            book_author: [
                '',
                [Validators.required]
            ],
            book_genre: [
                '',
                [Validators.required]
            ],
            book_image: [
                this.filesToUpload,
                //[Validators.required]
            ],
            book_isbn: [
                '',
                [Validators.required]
            ],
            book_shelf: [
                '',
                [Validators.required]
            ]
        });

        this.filesToUpload = [];

        this.isLibrarian = new String;
    }

    ngOnInit() { this.getShelf(); this.isALibrarian();}

    isALibrarian(){
        this.isLibrarian = localStorage.getItem('Librarian');
        console.log(this.isLibrarian);
        return this.isLibrarian;
    }

    addBook (data: any) {
        console.log(data);
        if (!data) { return; }
        this.bookDisplayService.addBook(data)
            .subscribe(
                () => this.router.navigate(['/bookdisplay']),
                error =>  this.errorMessage = <any>error);
        console.log('you submitted: ', data);
        //reset();

    }



    getShelf() {
        this.shelfService.getShelf().subscribe((response:any) => {
            console.log(response);
            response.forEach((item) => {

                this.shelfService.getBranch(item.branch).subscribe((branch:any) => {
                    item.branch = branch;
                    console.log(branch);
                });


            });
            this.shelfs = response;
            console.log(this.shelfs);
        });

    }




}