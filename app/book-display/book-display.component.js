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
var book_display_service_1 = require("../services/book-display.service");
var router_1 = require('@angular/router');
var checkout_service_1 = require("../services/checkout.service");
var BookDisplay = (function () {
    function BookDisplay(bookDisplayService, checkoutService, router) {
        this.bookDisplayService = bookDisplayService;
        this.checkoutService = checkoutService;
        this.router = router;
        this.books = [];
        this.searchResults = [];
        this.nextBooks = [];
        this.mode = 'Observable';
    }
    BookDisplay.prototype.ngOnInit = function () { this.getBooks(); };
    BookDisplay.prototype.getBooks = function () {
        var _this = this;
        this.bookDisplayService.getBooks()
            .subscribe(function (res) {
            _this.books = res;
            console.log(_this.books);
        });
    };
    BookDisplay.prototype.checkout = function (data) {
        var _this = this;
        console.log(data);
        this.checkoutService.checkOut({
            'book': data.id,
        })
            .subscribe(function () { return _this.router.navigate(['/mybooks']); }, function (error) { return _this.errorMessage = error; });
    };
    BookDisplay.prototype.performSearch = function (searchTerm) {
        var _this = this;
        console.log("you entered " + searchTerm.value);
        this.bookDisplayService.getSearch(searchTerm.value)
            .subscribe(function (data) {
            _this.searchResults = data;
            console.log(_this.searchResults);
        });
    };
    BookDisplay.prototype.nextPage = function (data) {
        var _this = this;
        console.log("this is the next url: " + data);
        this.bookDisplayService.getNextPage(data)
            .subscribe(function (res) {
            _this.books = res;
            console.log(_this.books);
        });
    };
    BookDisplay.prototype.previousPage = function (data) {
        var _this = this;
        console.log("this is the next url: " + data);
        this.bookDisplayService.getPreviousPage(data)
            .subscribe(function (res) {
            _this.books = res;
            console.log(_this.books);
        });
    };
    BookDisplay = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-display',
            templateUrl: 'book-display.component.html',
            styleUrls: ['book-display.component.css']
        }), 
        __metadata('design:paramtypes', [book_display_service_1.BookDisplayService, checkout_service_1.CheckoutService, router_1.Router])
    ], BookDisplay);
    return BookDisplay;
}());
exports.BookDisplay = BookDisplay;
//# sourceMappingURL=book-display.component.js.map