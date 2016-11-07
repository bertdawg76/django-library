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
var CheckoutService = (function () {
    function CheckoutService(http) {
        this.http = http;
        this.checkoutUrl = 'http://127.0.0.1:8700/checkout/';
    }
    CheckoutService.prototype.getMyBooks = function () {
        var authToken = localStorage.getItem('token');
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.get(this.checkoutUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CheckoutService.prototype.checkOut = function (data) {
        console.log(data);
        var authToken = localStorage.getItem('token');
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.checkoutUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CheckoutService.prototype.getMyBook = function (id) {
        return this.http.get("http://localhost:8700/book/" + id + "/")
            .map(this.extractData)
            .catch(this.handleError);
    };
    CheckoutService.prototype.getUser = function (id) {
        return this.http.get("http://localhost:8700/userprofile/" + id + "/")
            .map(this.extractData)
            .catch(this.handleError);
    };
    CheckoutService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    CheckoutService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    CheckoutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CheckoutService);
    return CheckoutService;
}());
exports.CheckoutService = CheckoutService;
//# sourceMappingURL=checkout.service.js.map