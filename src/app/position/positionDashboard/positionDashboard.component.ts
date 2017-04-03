import { Component, OnInit } from '@angular/core';

import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
    selector: 'position-dashboard',
    template: require('./positionDashboard.component.html'),
    styles: [require('./positionDashboard.component.scss')],
    providers: [PositionService],
})

export class PositionDashboardComponent implements OnInit {
    positions: Position[];

    constructor(private positionService: PositionService) {}

    ngOnInit() {
        this.positions = this.positionService.getPositions();
    }
}