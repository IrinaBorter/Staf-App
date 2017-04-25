import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Position } from '../position';
import { PositionService } from '../position.service';
import { ApplicantService } from '../../applicant/applicant.service';
import { EmployeeService } from '../../employee/employee.service';
import { Applicant } from '../../applicant/applicant';
import { Employee } from '../../employee/employee';

@Component({
    template: require('./position-profile.component.html'),
    styles: [require('./position-profile.component.scss')],
})

export class PositionProfileComponent implements OnInit {
    position: Position;
    candidates: Array<any>;
    selectedCandidate: any;
    searchType: string = 'Employee';
    searchTypeDropdownOpen: boolean = false;
    placeholderText: string = 'Введите имя сотрудника';

    constructor(
        private positionService: PositionService,
        private applicantService: ApplicantService,
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        document.title = 'Position Profile';

        const id = this.route.params
            .switchMap((params: Params) => this.positionService.getPosition(+params['id']))
            .subscribe((position: Position) => this.position = position);

        this.getCandidates();
    }

    deletePosition(position: Position) {
        this.positionService.deletePosition(position).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl('positions');
            }
        });
    }

    preselectCandidate(candidate: any) {
        this.selectedCandidate = candidate;
        console.log(this.selectedCandidate);
    }

    toggleSearchTypesDropdown() {
        this.searchTypeDropdownOpen = !this.searchTypeDropdownOpen;
    }

    selectSearchType(event: any) {
        this.searchType = event.target.dataset.value;
        this.placeholderText = this.searchType === 'Employee' ? 'Введите имя сотрудника' : 'Введите имя кандидата';
        this.toggleSearchTypesDropdown();
    }

    getCandidates() {
        Promise.all([
            this.employeeService.getEmployees(),
            this.applicantService.getApplicants(),
        ]).then(candidates => {
            this.candidates = [].concat.apply([], candidates);
            this.candidates = this.candidates.map(candidate => {
                return { id: candidate.id, name: candidate.firstName + ' ' + candidate.lastName };
            });
        });
    }
}