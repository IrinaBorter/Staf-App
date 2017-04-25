import { Component, OnInit } from '@angular/core';

import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
    selector: 'applicant-dashboard',
    template: require('./applicant-dashboard.component.html'),
    styles: [require('./applicant-dashboard.component.scss')],
})

export class ApplicantDashboardComponent implements OnInit {
    applicants: Applicant[];

    constructor(private applicantService: ApplicantService) {}

    ngOnInit() {
        document.title = 'Applicant Dashboard';

        this.applicantService.getApplicants().then(applicants => {
            this.applicants = applicants;
        });
    }
}