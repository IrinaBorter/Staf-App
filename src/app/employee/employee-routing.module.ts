import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
    {
        path: 'employees',
        component: EmployeeDashboardComponent,
    },
    {
        path: 'employees/create',
        component: EmployeeCreateComponent,
    },
    {
        path: 'employees/edit/:id',
        component: EmployeeCreateComponent,
    },
    {
        path: 'employees/:id',
        component: EmployeeProfileComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule {}