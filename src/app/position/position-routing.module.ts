import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PositionDashboardComponent } from './positionDashboard/positionDashboard.component';
import { PositionProfileComponent } from './position-profile/position-profile.component';
import { PositionCreateComponent } from './position-create/position-create.component';

const routes: Routes = [
    {
        path: 'positions',
        component: PositionDashboardComponent,
    },
    {
        path: 'positions/create',
        component: PositionCreateComponent,
    },
    {
        path: 'positions/:id',
        component: PositionProfileComponent,
    },
    {
        path: 'positions/edit/:id',
        component: PositionCreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PositionRoutingModule {}