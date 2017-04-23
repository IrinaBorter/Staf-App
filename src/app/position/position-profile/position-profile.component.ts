import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
    template: require('./position-profile.component.html'),
    styles: [require('./position-profile.component.scss')],
})

export class PositionProfileComponent implements OnInit {
    position: Position;

    constructor(
        private positionService: PositionService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const id = this.route.params
            .switchMap((params: Params) => this.positionService.getPosition(+params['id']))
            .subscribe((position: Position) => this.position = position);
    }

    deletePosition(position: Position) {
        this.positionService.deletePosition(position).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl('positions');
            }
        });
    }
}