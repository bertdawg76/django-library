"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var book_checkout_1 = require('./book-checkout');
var BookCheckoutComponent = (function () {
    function BookCheckoutComponent() {
        this.dataStream = new core_1.EventEmitter();
        this.model = 'Observable';
    }
    BookCheckoutComponent.prototype.emit = function (book) {
        console.log(book);
        this.dataStream.emit(book);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_checkout_1.Checkout)
    ], BookCheckoutComponent.prototype, "bookCheckout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookCheckoutComponent.prototype, "dataStream", void 0);
    BookCheckoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-checkout',
            templateUrl: './book-checkout.component.html',
            styleUrls: ['./book-checkout.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BookCheckoutComponent);
    return BookCheckoutComponent;
}());
exports.BookCheckoutComponent = BookCheckoutComponent;
//# sourceMappingURL=book-checkout.component.js.map