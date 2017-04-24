import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './widgets/menu/menu.component';
import { PositionModule } from './position/position.module';
import { EmployeeModule } from './employee/employee.module';
import { ApplicantModule } from './applicant/applicant.module';
import { PageNotFoundComponent } from './widgets/page-not-found/page-not-found.component';


@NgModule({
    imports: [
        BrowserModule,
        PositionModule,
        EmployeeModule,
        ApplicantModule,
        RouterModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        PageNotFoundComponent,
    ],
    bootstrap: [ AppComponent ],
})

export class AppModule {}