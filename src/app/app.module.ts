import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './widgets/menu/menu.component';
import { PositionModule } from './position/position.module';


@NgModule({
    imports: [
        BrowserModule,
        PositionModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
    ],
    bootstrap: [ AppComponent ],
})

export class AppModule {}