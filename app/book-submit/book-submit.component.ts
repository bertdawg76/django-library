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
    }

    ngOnInit() { this.getShelf();}

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

    getShelf(){
        this.shelfService.getShelf()

            .subscribe(
                shelfs => this.shelfs = shelfs,
                error => this.errorMessage = <any>error


            )

    }
    upload() {
        this.makeFileRequest("http://127.0.0.1:8700/book/", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
            console.log(formData);
        });
    }


}