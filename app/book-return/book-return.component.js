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
var router_1 = require('@angular/router');
var book_return_service_1 = require("../services/book-return.service");
var BookReturnComponent = (function () {
    function BookReturnComponent(bookReturnService, router) {
        this.bookReturnService = bookReturnService;
        this.router = router;
        this.mode = 'Observable';
    }
    BookReturnComponent.prototype.ngOnInit = function () { this.getCheckouts(); };
    BookReturnComponent.prototype.getCheckouts = function () {
        var _this = this;
        this.bookReturnService.getCheckouts().subscribe(function (response) {
            console.log(response);
            response.forEach(function (order) {
                _this.bookReturnService.getMyBook(order.book).subscribe(function (book) {
                    order.book = book;
                    console.log(book);
                });
                _this.bookReturnService.getUser(order.user).subscribe(function (user) {
                    order.user = user;
                    console.log(user);
                });
            });
            _this.myBooks = response;
            console.log(_this.myBooks);
        });
    };
    BookReturnComponent.prototype.returnBook = function (data) {
        var _this = this;
        console.log(data);
        this.bookReturnService.returnBook({
            'checkouts': data.id,
            'book': data.book.id
        })
            .subscribe(function () { return _this.router.navigate(['/bookdisplay']); }, function (error) { return _this.errorMessage = error; });
    };
    BookReturnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-return',
            templateUrl: 'book-return.component.html',
            styleUrls: ['book-return.component.css']
        }), 
        __metadata('design:paramtypes', [book_return_service_1.BookReturnService, router_1.Router])
    ], BookReturnComponent);
    return BookReturnComponent;
}());
exports.BookReturnComponent = BookReturnComponent;
//# sourceMappingURL=book-return.component.js.map