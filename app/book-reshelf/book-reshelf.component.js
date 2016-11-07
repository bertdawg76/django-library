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
var reShelfBook_service_1 = require("../services/reShelfBook.service");
var router_1 = require('@angular/router');
var BookReshelfComponent = (function () {
    function BookReshelfComponent(reshelfBookService, router) {
        this.reshelfBookService = reshelfBookService;
        this.router = router;
        this.returns = [];
        this.mode = 'Observable';
    }
    BookReshelfComponent.prototype.ngOnInit = function () { this.getReturns(); };
    BookReshelfComponent.prototype.getReturns = function () {
        var _this = this;
        this.reshelfBookService.getReturnedBooks().subscribe(function (response) {
            console.log(response);
            response.forEach(function (order) {
                _this.reshelfBookService.getMyBook(order.book).subscribe(function (book) {
                    order.book = book;
                    console.log(book);
                });
                _this.reshelfBookService.getUser(order.user).subscribe(function (user) {
                    order.user = user;
                    console.log(user);
                });
            });
            _this.returns = response;
            console.log(_this.returns);
        });
    };
    BookReshelfComponent.prototype.reShelfBook = function (data) {
        var _this = this;
        console.log('this is your book', data);
        this.reshelfBookService.reShelfBook(data)
            .subscribe(function (data) { return _this.router.navigate(['/bookdisplay']); }, function (error) { return _this.errorMessage = error; });
    };
    BookReshelfComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-reshelf',
            templateUrl: 'book-reshelf.component.html',
            styleUrls: ['book-reshelf.component.css']
        }), 
        __metadata('design:paramtypes', [reShelfBook_service_1.ReShelfBookService, router_1.Router])
    ], BookReshelfComponent);
    return BookReshelfComponent;
}());
exports.BookReshelfComponent = BookReshelfComponent;
//# sourceMappingURL=book-reshelf.component.js.map