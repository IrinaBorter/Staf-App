import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ApplicantService } from './applicant.service';

import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        ApplicantRoutingModule,
        HttpModule,
        FormsModule,
    ],
    declarations: [
        ApplicantCreateComponent,
        ApplicantProfileComponent,
        ApplicantDashboardComponent,
    ],
    providers: [ApplicantService],
})
export class ApplicantModule {}