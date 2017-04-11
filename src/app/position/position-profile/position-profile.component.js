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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var position_service_1 = require("../position.service");
var PositionProfileComponent = (function () {
    function PositionProfileComponent(positionService, route) {
        this.positionService = positionService;
        this.route = route;
    }
    PositionProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params
            .switchMap(function (params) { return _this.positionService.getPosition(+params['id']); })
            .subscribe(function (position) { return _this.position = position; });
    };
    return PositionProfileComponent;
}());
PositionProfileComponent = __decorate([
    core_1.Component({
        template: require('./position-profile.component.html'),
        styles: [require('./position-profile.component.scss')],
    }),
    __metadata("design:paramtypes", [position_service_1.PositionService,
        router_1.ActivatedRoute])
], PositionProfileComponent);
exports.PositionProfileComponent = PositionProfileComponent;
//# sourceMappingURL=position-profile.component.js.map