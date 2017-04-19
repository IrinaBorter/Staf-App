import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionRoutingModule } from './position-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker';

import { PositionDashboardComponent } from './positionDashboard/positionDashboard.component';
import { PositionProfileComponent } from './position-profile/position-profile.component';
import { PositionCreateComponent } from './position-create/position-create.component';
import { PositionService } from './position.service';

@NgModule({
    imports: [
        CommonModule,
        PositionRoutingModule,
        HttpModule,
        FormsModule,
        DatepickerModule,
    ],
    declarations: [
        PositionDashboardComponent,
        PositionProfileComponent,
        PositionCreateComponent,
    ],
    providers: [PositionService],
})
export class PositionModule {}