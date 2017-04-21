import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
    template: require('./position-create.component.html'),
    styles: [require('./position-create.component.scss')],
    providers: [PositionService],
})

export class PositionCreateComponent implements OnInit {
    position: Position;
    yourModelDate = new Date();

    constructor(
        private positionService: PositionService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const id = this.route.params
            .switchMap((params: Params) => this.positionService.getPosition(+params['id']))
            .subscribe((position: Position) => {
                this.position = position;
            });
    }

    updatePosition() {
        this.positionService.updatePosition(this.position).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`positions/${this.position.id}`);
            }
        });
    }
}