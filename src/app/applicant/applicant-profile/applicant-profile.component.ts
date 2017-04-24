import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
    template: require('./applicant-profile.component.html'),
    styles: [require('./applicant-profile.component.scss')],
})

export class ApplicantProfileComponent implements OnInit {
    applicant: Applicant;

    constructor(
        private applicantService: ApplicantService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const id = this.route.params
            .switchMap((params: Params) => this.applicantService.getApplicant(+params['id']))
            .subscribe((applicant: Applicant) => this.applicant = applicant);
    }

    deleteApplicant(applicant: Applicant) {
        this.applicantService.deleteApplicant(applicant).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl('applicants');
            }
        });
    }
}