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
    candidateActions: Array<any> = [
        {
            name: 'Предложить',
            click: () => { this.proposeCandidate(); },
        },
        {
            name: 'Предварительно выбрать',
            click: () => { this.preselectCandidate(); },
        },
        {
            name: 'Назначить',
            click: () => { this.assignCandidate(); },
        },
    ];
    availableStatuses: Object = {
        'Available': ['Proposed', 'Preselect', 'Assign', 'Cancel'],
        'Proposed': ['Assign', 'Cancel'],
        'Preselect': ['Proposed', 'Assign', 'Cancel'],
    };

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
            .subscribe((position: Position) => {
                this.position = position;
                this.refreshCandidates();
            });
    }

    deletePosition(position: Position) {
        this.positionService.deletePosition(position).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl('positions');
            }
        });
    }

    proposeCandidate() {
        if (this.selectedCandidate) {
            this.positionService.proposeCandidate(this.position, this.selectedCandidate).then(response => {
                if (response.status === 200) {
                    alert('Работник был успешно добавлен!');
                    this.position = response.position;
                    this.refreshCandidates();
                }
            });
        }
    }

    preselectCandidate() {
        if (this.selectedCandidate) {
            this.positionService.preselectCandidate(this.position, this.selectedCandidate).then(response => {
                if (response.status === 200) {
                    alert('Работник был предварительно выбран!');
                    this.position = response.position;
                    this.refreshCandidates();
                }
            });
        }
    }

    assignCandidate() {
        if (this.selectedCandidate) {
            this.positionService.assignCandidate(this.position, this.selectedCandidate).then(response => {
                if (response.status === 200) {
                    alert('Работник был назначен!');
                    this.position = response.position;
                    this.refreshCandidates();
                }
            });
        }
    }

    toggleSearchTypesDropdown() {
        this.searchTypeDropdownOpen = !this.searchTypeDropdownOpen;
    }

    selectSearchType(event: any) {
        this.searchType = event.target.dataset.value;
        this.placeholderText = this.searchType === 'Employee' ? 'Введите имя сотрудника' : 'Введите имя кандидата';
        this.toggleSearchTypesDropdown();
        this.refreshCandidates();
    }

    refreshCandidates() {
        if (this.searchType === 'Employee') {
            this.employeeService.getAvailableEmployees(this.position.id).then(employees => {
                this.candidates = employees.map(employee => {
                    return {
                        id: employee.id,
                        type: employee.type,
                        name: employee.firstName + ' ' + employee.lastName,
                    };
                });
            });
        }
        if (this.searchType === 'Applicant') {
            this.applicantService.getAvailableApplicants(this.position.id).then(applicants => {
                this.candidates = applicants.map(applicant => {
                    return {
                        id: applicant.id,
                        type: applicant.type,
                        name: applicant.firstName + ' ' + applicant.lastName,
                    };
                });
            });
        }
    }

    onStatusChange(candidate: any, newStatus: string) {
        if (newStatus === 'Cancel') {
            return this.cancelStatus(candidate, this.position);
        }

        if (candidate.type === 'Employee') {
            return this.employeeService.changeEmployeeStatus(candidate, newStatus).then(response => {
                if (response.status === 200) {
                    alert('Статус был изменен успешно!');
                    this.positionService.getPosition(this.position.id).then(position => {
                        this.position = position;
                    });
                }
            });
        }
        if (candidate.type === 'Applicant') {
            return this.applicantService.changeApplicantStatus(candidate, newStatus).then(response => {
                if (response.status === 200) {
                    alert('Статус был изменен успешно!');
                    this.positionService.getPosition(this.position.id).then(position => {
                        this.position = position;
                    });
                }
            });
        }
    }

    cancelStatus(candidate: any, position: Position) {
        return this.positionService.cancelCandidate(candidate, position).then(response => {
            if (response.status === 200) {
                alert('Кандидат был отменен!');
                this.position = response.position;
            }
        });
    }
}