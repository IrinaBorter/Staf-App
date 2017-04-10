"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var position_routing_module_1 = require("./position-routing.module");
var positionDashboard_component_1 = require("./positionDashboard/positionDashboard.component");
var position_profile_component_1 = require("./position-profile/position-profile.component");
var position_service_1 = require("./position.service");
var PositionModule = (function () {
    function PositionModule() {
    }
    return PositionModule;
}());
PositionModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            position_routing_module_1.PositionRoutingModule,
        ],
        declarations: [
            positionDashboard_component_1.PositionDashboardComponent,
            position_profile_component_1.PositionProfileComponent,
        ],
        providers: [position_service_1.PositionService],
    })
], PositionModule);
exports.PositionModule = PositionModule;
//# sourceMappingURL=position.module.js.map