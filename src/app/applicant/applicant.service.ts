import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Applicant } from './applicant';

@Injectable()
export class ApplicantService {
    constructor(private http: Http) {}

    getApplicants(): Promise<Applicant[]> {
        return this.http.get('/api/applicants')
            .toPromise()
            .then(response => {
                const applicants = response.json() as Applicant[];
                applicants.forEach(applicant => applicant.type = 'Applicant');

                return applicants;
            });
    }

    getApplicant(id: number): Promise<Applicant> {
        return this.http.get(`/api/applicants/${id}`)
            .toPromise()
            .then(response => response.json() as Applicant);
    }

    createApplicant(applicant: Applicant) {
        return this.http.post('/api/applicants/create', { applicant })
            .toPromise()
            .then(response => response.json());
    }

    updateApplicant(applicant: Applicant): Promise<any> {
        return this.http.put('/api/applicants/edit', { applicant })
            .toPromise()
            .then(response => response);
    }

    deleteApplicant(applicant: Applicant): Promise<any> {
        return this.http.delete('/api/applicants/delete', { body: { id: applicant.id } })
            .toPromise()
            .then(response => response);
    }
}

