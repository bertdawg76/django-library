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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ReShelfBookService = (function () {
    function ReShelfBookService(http) {
        this.http = http;
        this.reshelfUrl = 'http://127.0.0.1:8700/reshelf/';
    }
    ReShelfBookService.prototype.getReturnedBooks = function () {
        var authToken = localStorage.getItem('token');
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.get(this.reshelfUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ReShelfBookService.prototype.getMyBook = function (id) {
        return this.http.get("http://localhost:8700/book/" + id + "/")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ReShelfBookService.prototype.getUser = function (id) {
        return this.http.get("http://localhost:8700/userprofile/" + id + "/")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ReShelfBookService.prototype.reShelfBook = function (id) {
        var authToken = localStorage.getItem('token');
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(headers);
        console.log(id);
        return this.http.post("http://localhost:8700/book/" + id + "/reshelf/", "", options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ReShelfBookService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    ReShelfBookService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ReShelfBookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReShelfBookService);
    return ReShelfBookService;
}());
exports.ReShelfBookService = ReShelfBookService;
//# sourceMappingURL=reShelfBook.service.js.map