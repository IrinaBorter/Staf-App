import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'staf-header',
    template: require('./header.component.html'),
    styles: [ require('./header.component.scss') ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}