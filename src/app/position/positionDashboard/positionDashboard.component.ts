import { Component, OnInit } from '@angular/core';

import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
    selector: 'position-dashboard',
    template: require('./positionDashboard.component.html'),
    styles: [require('./positionDashboard.component.scss')],
})

export class PositionDashboardComponent implements OnInit {
    positions: Position[];
    order: string = 'code';
    reverse: boolean = false;

    constructor(private positionService: PositionService) {}

    ngOnInit() {
        document.title = 'Position Dashboard';

        this.positionService.getPositions().then(positions => {
            this.positions = positions;
        });
    }

    changeOrder(newOrder: string) {
        if (this.order === newOrder) {
            this.reverse = !this.reverse;
        } else {
            this.order = newOrder;
            this.reverse = false;
        }
    }
}