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
var BookSubmitComponent = (function () {
    function BookSubmitComponent(bookDisplayService, router, fb, shelfService) {
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
            book_genre: [
                '',
                [forms_1.Validators.required]
            ],
            book_image: [
                this.filesToUpload,
            ],
            book_isbn: [
                '',
                [forms_1.Validators.required]
            ],
            book_shelf: [
                '',
                [forms_1.Validators.required]
            ]
        });
        this.filesToUpload = [];
    }
    BookSubmitComponent.prototype.ngOnInit = function () { this.getShelf(); };
    BookSubmitComponent.prototype.addBook = function (data) {
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
    BookSubmitComponent.prototype.getShelf = function () {
        var _this = this;
        this.shelfService.getShelf()
            .subscribe(function (shelfs) { return _this.shelfs = shelfs; }, function (error) { return _this.errorMessage = error; });
    };
    BookSubmitComponent.prototype.upload = function () {
        this.makeFileRequest("http://127.0.0.1:8700/book/", [], this.filesToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    BookSubmitComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    BookSubmitComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
            console.log(formData);
        });
    };
    BookSubmitComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-submit',
            templateUrl: 'book-submit.component.html',
            styleUrls: ['book-submit.component.css']
        }), 
        __metadata('design:paramtypes', [book_display_service_1.BookDisplayService, router_1.Router, forms_1.FormBuilder, shelf_service_1.ShelfService])
    ], BookSubmitComponent);
    return BookSubmitComponent;
})();
exports.BookSubmitComponent = BookSubmitComponent;
//# sourceMappingURL=book-submit.component.js.map