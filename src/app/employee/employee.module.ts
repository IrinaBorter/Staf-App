import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from './employee.service';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmptyContentModule } from '../widgets/empty-content/empty-content.module';

@NgModule({
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        HttpModule,
        FormsModule,
        EmptyContentModule,
    ],
    declarations: [
        EmployeeCreateComponent,
        EmployeeProfileComponent,
        EmployeeDashboardComponent,
    ],
    providers: [EmployeeService],
})
export class EmployeeModule {}