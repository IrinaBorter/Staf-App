import { Component } from '@angular/core';

import { PositionService } from '../position.service';

@Component({
    selector: 'line-chart-demo',
    template: require('./position-charts.component.html'),
    styles: [require('./position-charts.component.scss')],
})
export class PositionChartsComponent {
    positionNames: Array<string>;
    candidatesCount: Array<any>;
    positionStatuses: Array<string>;
    positionsInStatusCount: Array<any>;
    positionPrimarySkills: Array<string>;
    positionsInPrimarySkill: Array<any>;

    barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
    };
    barChartType: string = 'bar';
    lineChartType: string = 'line';
    pieChartType: string = 'pie';
    doughnutChartType: string = 'doughnut';
    barChartLegend: boolean = true;

    constructor(private positionService: PositionService) {}

    ngOnInit() {
        return this.positionService.getPositions().then(positions => {
            this.positionNames = positions.map(position => position.role);
            this.positionStatuses = ['Open', 'Preselect', 'Proposed', 'Assign'];
            this.positionPrimarySkills = [
                'JS',
                'Java',
                '.NET',
                'C++',
                'Functional Testing',
                'Management',
                'Excel',
                'Scrum',
                'Trello',
            ];

            this.candidatesCount = [{
                data: positions.map(position => position.candidates.length),
                label: 'Распределение количества кандидатов к позиции',
            }];

            this.positionsInStatusCount = this.positionStatuses.map(status =>  {
                return positions.filter(position => position.positionStatus === status).length;
            });

            this.positionsInPrimarySkill = this.positionPrimarySkills.map(skill =>  {
                return positions.filter(position => position.primarySkill === skill).length;
            });
        });
    }
}