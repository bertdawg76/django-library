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
var librarianComponent = (function () {
    function librarianComponent() {
        this.switch = {
            book_name: '',
            id: '',
            book_author: ''
        };
    }
    librarianComponent.prototype.pushBook = function (event) {
        this.switch.id = event.id;
        this.switch.book_name = event.book_name;
        this.switch.book_author = event.book_author;
        console.log(this.switch);
    };
    librarianComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'librarian',
            templateUrl: 'librarian.component.html',
            styleUrls: ['librarian.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], librarianComponent);
    return librarianComponent;
}());
exports.librarianComponent = librarianComponent;
//# sourceMappingURL=librarian.component.js.map