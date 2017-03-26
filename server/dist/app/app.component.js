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
var command_service_1 = require("./command.service");
var AppComponent = (function () {
    function AppComponent(commandService) {
        var _this = this;
        this.commandService = commandService;
        this.name = 'Robo';
        this.commandService.getAll().then(function (data) {
            _this.data = data && JSON.stringify(data);
            setTimeout(function () {
                return new window.jsmpeg(new WebSocket('ws://localhost:8084'), { canvas: document.getElementById('videoCanvas') });
            }, 0);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'rmmc-app',
        templateUrl: 'app/app.component.html',
        providers: [command_service_1.CommandService]
    }),
    __metadata("design:paramtypes", [command_service_1.CommandService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map