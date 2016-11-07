import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Checkout } from './book-checkout';

@Component({
    moduleId: module.id,
    selector: 'book-checkout',
    templateUrl: './book-checkout.component.html',
    styleUrls: ['./book-checkout.component.css']
})

export class BookCheckoutComponent {

    @Input() bookCheckout: Checkout;
    @Output() dataStream: EventEmitter<any> = new EventEmitter();

    model = 'Observable';
    constructor() {}


    emit(book: any){
        console.log(book);
        this.dataStream.emit(book);
    }
}