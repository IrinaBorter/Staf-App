"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var menu_component_1 = require("./widgets/menu/menu.component");
var position_module_1 = require("./position/position.module");
var page_not_found_component_1 = require("./widgets/page-not-found/page-not-found.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            position_module_1.PositionModule,
            router_1.RouterModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            menu_component_1.MenuComponent,
            page_not_found_component_1.PageNotFoundComponent,
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map