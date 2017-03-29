import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'menu',
    template: require('./menu.component.html'),
    styles: [ require('./menu.component.scss') ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {}