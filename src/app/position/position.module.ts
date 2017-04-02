import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionDashboardComponent } from './positionDashboard/positionDashboard.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PositionDashboardComponent],
    exports: [PositionDashboardComponent],
})
export class PositionModule {}