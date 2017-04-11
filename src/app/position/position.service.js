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
var PositionService = (function () {
    function PositionService() {
    }
    PositionService.prototype.getPositions = function () {
        return Promise.resolve(positions);
    };
    PositionService.prototype.getPosition = function (id) {
        var position = positions.find(function (p) { return p.id === id; });
        return Promise.resolve(position);
    };
    return PositionService;
}());
PositionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PositionService);
exports.PositionService = PositionService;
var positions = [
    {
        id: 1,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 2,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 3,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 4,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 5,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 6,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 7,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 8,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 9,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 10,
        code: '1-FG-34',
        name: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
];
//# sourceMappingURL=position.service.js.map