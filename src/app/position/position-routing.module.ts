import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PositionDashboardComponent } from './positionDashboard/positionDashboard.component';
import { PositionProfileComponent } from './position-profile/position-profile.component';

const routes: Routes = [{
    path: 'positions',
    component: PositionDashboardComponent,
}, {
    path: 'positions/:id',
    component: PositionProfileComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PositionRoutingModule {}