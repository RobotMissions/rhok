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
var feathers = require("feathers/client");
var socketio = require("feathers-socketio/client");
var io = require("socket.io-client");
var hooks = require("feathers-hooks");
var rest = require("feathers-rest/client");
var core_1 = require("@angular/core");
var superagent = require('superagent');
var HOST = 'http://localhost:3030'; // base server URL
var RestService = (function () {
    function RestService() {
        this._app = feathers() // Initialize feathers
            .configure(rest(HOST).superagent(superagent)) // Fire up rest
            .configure(hooks()); // Configure feathers-hooks
    }
    RestService.prototype.getService = function (name) {
        return this._app.service(name);
    };
    return RestService;
}());
RestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RestService);
exports.RestService = RestService;
var SocketService = (function () {
    function SocketService() {
        this.socket = io(HOST);
        this._app = feathers()
            .configure(socketio(this.socket))
            .configure(hooks());
    }
    SocketService.prototype.getService = function (name) {
        return this._app.service(name);
    };
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=feathers.service.js.map