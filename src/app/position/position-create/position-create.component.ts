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
    mode: String;
    yourModelDate: Date;

    constructor(
        private positionService: PositionService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.mode = this.identifyMode();

        if (this.mode === 'edit') {
            const id = this.route.params
                .switchMap((params: Params) => this.positionService.getPosition(+params['id']))
                .subscribe((position: Position) => {
                    this.position = position;
                    this.yourModelDate = new Date(position.plannedStartDate);
                });
        } else {
            this.position = new Position();
        }
    }

    identifyMode() {
        return this.route.snapshot.params['id'] ? 'edit' : 'create';
    }

    updatePosition() {
        this.position.plannedStartDate = new Date(this.yourModelDate.toString());

        this.positionService.updatePosition(this.position).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`positions/${this.position.id}`);
            }
        });
    }

    createPosition() {
        this.positionService.createPosition(this.position).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`positions/${response}`);
            }
        });
    }
}