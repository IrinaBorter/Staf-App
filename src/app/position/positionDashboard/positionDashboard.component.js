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
var position_service_1 = require("../position.service");
var PositionDashboardComponent = (function () {
    function PositionDashboardComponent(positionService) {
        this.positionService = positionService;
    }
    PositionDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positionService.getPositions().then(function (positions) {
            _this.positions = positions;
        });
    };
    return PositionDashboardComponent;
}());
PositionDashboardComponent = __decorate([
    core_1.Component({
        selector: 'position-dashboard',
        template: require('./positionDashboard.component.html'),
        styles: [require('./positionDashboard.component.scss')],
    }),
    __metadata("design:paramtypes", [position_service_1.PositionService])
], PositionDashboardComponent);
exports.PositionDashboardComponent = PositionDashboardComponent;
//# sourceMappingURL=positionDashboard.component.js.map