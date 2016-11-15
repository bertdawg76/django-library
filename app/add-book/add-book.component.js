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
var forms_1 = require('@angular/forms');
var book_display_service_1 = require("../services/book-display.service");
var router_1 = require('@angular/router');
var shelf_service_1 = require("../services/shelf.service");
var AddBookComponent = (function () {
    function AddBookComponent(bookDisplayService, router, fb, shelfService) {
        this.bookDisplayService = bookDisplayService;
        this.router = router;
        this.shelfService = shelfService;
        this.mode = 'Observable';
        this.bookForm = fb.group({
            book_name: [
                '',
                [forms_1.Validators.required]
            ],
            book_author: [
                '',
                [forms_1.Validators.required]
            ],
            id: [
                '',
                [forms_1.Validators.required]
            ],
            //book_image: [
            //    ''
            //    //[Validators.required]
            //],
            //book_isbn: [
            //    '',
            //    [Validators.required]
            //],
            book_shelf: [
                '',
                [forms_1.Validators.required]
            ]
        });
        this.filesToUpload = [];
    }
    AddBookComponent.prototype.ngOnInit = function () { this.getShelf(); };
    AddBookComponent.prototype.addBook = function (data) {
        var _this = this;
        console.log(data);
        if (!data) {
            return;
        }
        this.bookDisplayService.addBook(data)
            .subscribe(function () { return _this.router.navigate(['/bookdisplay']); }, function (error) { return _this.errorMessage = error; });
        console.log('you submitted: ', data);
        //reset();
    };
    AddBookComponent.prototype.getShelf = function () {
        var _this = this;
        this.shelfService.getShelf().subscribe(function (response) {
            console.log(response);
            response.forEach(function (item) {
                _this.shelfService.getBranch(item.branch).subscribe(function (branch) {
                    item.branch = branch;
                    console.log(branch);
                });
            });
            _this.shelfs = response;
            console.log(_this.shelfs);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddBookComponent.prototype, "bookSwitch", void 0);
    AddBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-book',
            templateUrl: 'add-book.component.html',
            styleUrls: ['add-book.component.css']
        }), 
        __metadata('design:paramtypes', [book_display_service_1.BookDisplayService, router_1.Router, forms_1.FormBuilder, shelf_service_1.ShelfService])
    ], AddBookComponent);
    return AddBookComponent;
}());
exports.AddBookComponent = AddBookComponent;
//# sourceMappingURL=add-book.component.js.map