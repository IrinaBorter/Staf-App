import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Applicant } from './applicant';

@Injectable()
export class ApplicantService {
    constructor(private http: Http) {}

    getApplicants(): Promise<Applicant[]> {
        return this.http.get('/api/applicants')
            .toPromise()
            .then(response => response.json() as Applicant[]);
    }

    getAvailableApplicants(positionId: any): Promise<Applicant[]> {
        return this.http.get(`/api/applicants/available/${positionId}`)
            .toPromise()
            .then(response => response.json() as Applicant[]);
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

    changeApplicantStatus(applicant: Applicant, newStatus: string) {
        return this.http.put('/api/applicants/change-status', { applicant, newStatus })
            .toPromise()
            .then(response => response);
    }
}

