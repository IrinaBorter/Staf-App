import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'multi-actions-button',
    template: require('./multi-actions-button.component.html'),
    styles: [require('./multi-actions-button.component.scss')],
})

export class MultiActionsButtonComponent {
    isButtonsDropdownOpen: boolean = false;

    @Input() buttons: Array<any>;

    toggleButtonsDropdown() {
        this.isButtonsDropdownOpen = !this.isButtonsDropdownOpen;
    }
}