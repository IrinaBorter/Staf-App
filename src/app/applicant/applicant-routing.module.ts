import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';

const routes: Routes = [
    {
        path: 'applicants',
        component: ApplicantDashboardComponent,
    },
    {
        path: 'applicants/create',
        component: ApplicantCreateComponent,
    },
    {
        path: 'applicants/edit/:id',
        component: ApplicantCreateComponent,
    },
    {
        path: 'applicants/:id',
        component: ApplicantProfileComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicantRoutingModule {}