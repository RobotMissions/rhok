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
var core_1 = require("@angular/core");
var feathers_service_js_1 = require("./feathers.service.js");
var CommandService = (function () {
    function CommandService(_socketService, _restService) {
        this._socketService = _socketService;
        this._restService = _restService;
        // Let's get both the socket.io and REST feathers services for commands!
        this._rest = _restService.getService('commands');
        this._socket = _socketService.getService('commands');
    }
    CommandService.prototype.getAll = function () {
        return this._rest.find().then(function (data) { return data.data; });
    };
    return CommandService;
}());
CommandService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [feathers_service_js_1.SocketService,
        feathers_service_js_1.RestService])
], CommandService);
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map