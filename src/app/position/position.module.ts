import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionRoutingModule } from './position-routing.module';

import { PositionDashboardComponent } from './positionDashboard/positionDashboard.component';
import { PositionProfileComponent } from './position-profile/position-profile.component';
import { PositionService } from './position.service';

@NgModule({
    imports: [
        CommonModule,
        PositionRoutingModule,
    ],
    declarations: [
        PositionDashboardComponent,
        PositionProfileComponent,
    ],
    providers: [PositionService],
})
export class PositionModule {}