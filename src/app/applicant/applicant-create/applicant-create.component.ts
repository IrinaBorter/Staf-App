import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
    template: require('./applicant-create.component.html'),
    styles: [require('./applicant-create.component.scss')],
    providers: [ApplicantService],
})

export class ApplicantCreateComponent implements OnInit {
    applicant: Applicant;
    mode: string;
    language: string;

    constructor(
        private applicantService: ApplicantService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.mode = this.identifyMode();

        if (this.mode === 'edit') {
            const id = this.route.params
                .switchMap((params: Params) => this.applicantService.getApplicant(+params['id']))
                .subscribe((applicant: Applicant) => {
                    this.applicant = applicant;
                    this.language = applicant.language[0];
                });
        } else {
            this.applicant = new Applicant();
        }
    }

    identifyMode() {
        return this.route.snapshot.params['id'] ? 'edit' : 'create';
    }

    updateApplicant() {
        this.applicant.language = [this.language];

        this.applicantService.updateApplicant(this.applicant).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`applicants/${this.applicant.id}`);
            }
        });
    }

    createApplicant() {
        this.applicant.language = [this.language];

        this.applicantService.createApplicant(this.applicant).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`applicants/${response.id}`);
            }
        });
    }
}