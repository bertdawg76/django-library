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
var checkout_service_1 = require("../services/checkout.service");
var MyBooksComponent = (function () {
    function MyBooksComponent(checkoutService) {
        this.checkoutService = checkoutService;
        this.mode = 'Observable';
    }
    MyBooksComponent.prototype.ngOnInit = function () { this.getMyBooks(); };
    MyBooksComponent.prototype.getMyBooks = function () {
        var _this = this;
        this.checkoutService.getMyBooks().subscribe(function (response) {
            console.log(response);
            response.forEach(function (order) {
                _this.checkoutService.getMyBook(order.book).subscribe(function (book) {
                    order.book = book;
                    console.log(book);
                });
                _this.checkoutService.getUser(order.user).subscribe(function (user) {
                    order.user = user;
                    console.log(user);
                });
            });
            _this.myBooks = response;
            console.log(_this.myBooks);
        });
    };
    MyBooksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-books',
            templateUrl: 'my-books.component.html',
            styleUrls: ['my-books.component.css']
        }), 
        __metadata('design:paramtypes', [checkout_service_1.CheckoutService])
    ], MyBooksComponent);
    return MyBooksComponent;
}());
exports.MyBooksComponent = MyBooksComponent;
//# sourceMappingURL=my-books.component.js.map