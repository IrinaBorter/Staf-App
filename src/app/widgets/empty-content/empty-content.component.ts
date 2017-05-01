import { Component, Input } from '@angular/core';

@Component({
    selector: 'empty-content',
    template: require('./empty-content.component.html'),
    styles: [require('./empty-content.component.scss')],
})

export class EmptyContentComponent {
    @Input() message: string;
}