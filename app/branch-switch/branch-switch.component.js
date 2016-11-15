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
var forms_1 = require('@angular/forms');
var checkout_service_1 = require("../services/checkout.service");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var BranchSwitchComponent = (function () {
    function BranchSwitchComponent(bookDisplayService, checkoutService, router, fb) {
        this.bookDisplayService = bookDisplayService;
        this.checkoutService = checkoutService;
        this.router = router;
        this.fb = fb;
        this.dataStream = new core_1.EventEmitter();
        this.books = [];
        //public books = Book;
        this.searchResults = [];
        this.nextBooks = [];
        this.mode = 'Observable';
        this.searchForm = fb.group({
            searchterm: [
                ''
            ]
        });
    }
    BranchSwitchComponent.prototype.ngOnInit = function () { this.getBooks(); };
    BranchSwitchComponent.prototype.emit = function (book) {
        this.dataStream.emit(book);
        console.log(book);
    };
    BranchSwitchComponent.prototype.resolveShelf = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.bookDisplayService.getShelf(id).subscribe(function (r) {
                resolve(r);
            });
        });
    };
    BranchSwitchComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookDisplayService.getBooks().subscribe(function (response) {
            console.log(response);
            response.results.forEach(function (item) {
                _this.resolveShelf(item.book_shelf).then(function (shelf) {
                    _this.bookDisplayService.getBranch(shelf.branch).subscribe(function (branch) {
                        item.location = branch.location;
                        console.log(branch);
                    });
                });
            });
            _this.books = response;
            console.log(_this.books);
        });
    };
    BranchSwitchComponent.prototype.nextPage = function (data) {
        var _this = this;
        console.log("this is the next url: " + data);
        this.bookDisplayService.getNextPage(data)
            .subscribe(function (response) {
            response.results.forEach(function (item) {
                _this.resolveShelf(item.book_shelf).then(function (shelf) {
                    _this.bookDisplayService.getBranch(shelf.branch).subscribe(function (branch) {
                        item.location = branch.location;
                        console.log(branch);
                    });
                });
            });
            _this.books = response;
            console.log(_this.books);
        });
    };
    BranchSwitchComponent.prototype.previousPage = function (data) {
        var _this = this;
        console.log("this is the next url: " + data);
        this.bookDisplayService.getPreviousPage(data)
            .subscribe(function (response) {
            response.results.forEach(function (item) {
                _this.resolveShelf(item.book_shelf).then(function (shelf) {
                    _this.bookDisplayService.getBranch(shelf.branch).subscribe(function (branch) {
                        item.location = branch.location;
                        console.log(branch);
                    });
                });
            });
            _this.books = response;
            console.log(_this.books);
        });
    };
    BranchSwitchComponent.prototype.checkout = function (data) {
        var _this = this;
        console.log(data);
        this.checkoutService.checkOut({
            'book': data.id,
        })
            .subscribe(function () { return _this.router.navigate(['/mybooks']); }, function (error) { return _this.errorMessage = error; });
    };
    //
    //performSearch(searchTerm: HTMLInputElement): void {
    //    console.log(`you entered ${searchTerm.value}`);
    //    this.bookDisplayService.getSearch(searchTerm.value)
    //        //.debounceTime(1000)
    //        .subscribe((data) => {
    //            this.searchResults = data;
    //            console.log(this.searchResults);
    //        })
    //}
    BranchSwitchComponent.prototype.performSearch = function (event) {
        var _this = this;
        console.log("you entered " + event);
        this.bookDisplayService.getSearch(event)
            .subscribe(function (data) {
            _this.searchResults = data;
            console.log(_this.searchResults);
        });
    };
    BranchSwitchComponent.prototype.search = function (event) {
        var d = new Date();
        this.lastSearched = d.getMilliseconds();
        this.checkDebounce(this.lastSearched, event);
        console.log(event);
        console.log(this.lastSearched);
    };
    BranchSwitchComponent.prototype.checkDebounce = function (time, event) {
        var _this = this;
        setTimeout(function () {
            if (time === _this.lastSearched) {
                _this.performSearch(event);
            }
        }, 1000);
    };
    //performSearch(info): void {
    //    console.log(info);
    //    this.bookDisplayService.getSearch(info)
    //        .debounceTime(1000)
    //        .subscribe((data) => {
    //            this.searchResults = data;
    //            console.log(this.searchResults);
    //        })
    //}
    //nextPage(data): void {
    //    console.log(`this is the next url: ${data}`);
    //    this.bookDisplayService.getNextPage(data)
    //        .subscribe((res) => {
    //            this.books = res;
    //            console.log(this.books);
    //        })
    //}
    BranchSwitchComponent.prototype.nextSearchPage = function (data) {
        var _this = this;
        console.log("this is the next url: " + data);
        this.bookDisplayService.getNextPage(data)
            .subscribe(function (response) {
            response.results.forEach(function (item) {
                _this.resolveShelf(item.book_shelf).then(function (shelf) {
                    _this.bookDisplayService.getBranch(shelf.branch).subscribe(function (branch) {
                        item.location = branch.location;
                        console.log(branch);
                    });
                });
            });
            _this.searchResults = response;
            console.log(_this.searchResults);
        });
    };
    //previousPage(data): void {
    //    console.log(`this is the next url: ${data}`);
    //    this.bookDisplayService.getPreviousPage(data)
    //        .subscribe((res) => {
    //            this.books = res;
    //            console.log(this.books);
    //        })
    //}
    BranchSwitchComponent.prototype.previousSearchPage = function (data) {
        var _this = this;
        console.log("this is the next url: " + data);
        this.bookDisplayService.getPreviousPage(data)
            .subscribe(function (response) {
            response.results.forEach(function (item) {
                _this.resolveShelf(item.book_shelf).then(function (shelf) {
                    _this.bookDisplayService.getBranch(shelf.branch).subscribe(function (branch) {
                        item.location = branch.location;
                        console.log(branch);
                    });
                });
            });
            _this.searchResults = response;
            console.log(_this.searchResults);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BranchSwitchComponent.prototype, "dataStream", void 0);
    BranchSwitchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'branch-switch',
            templateUrl: 'branch-switch.component.html',
            styleUrls: ['branch-switch.component.css']
        }), 
        __metadata('design:paramtypes', [book_display_service_1.BookDisplayService, checkout_service_1.CheckoutService, router_1.Router, forms_1.FormBuilder])
    ], BranchSwitchComponent);
    return BranchSwitchComponent;
}());
exports.BranchSwitchComponent = BranchSwitchComponent;
//# sourceMappingURL=branch-switch.component.js.map