import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';

const routes: Routes = [
    {
        path: 'employees/create',
        component: EmployeeCreateComponent,
    },
    {
        path: 'employees/edit/:id',
        component: EmployeeCreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule {}