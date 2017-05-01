import { Component, Input } from '@angular/core';

@Component({
    selector: 'entity-status-dropdown',
    template: require('./entity-status-dropdown.component.html'),
    styles: [require('./entity-status-dropdown.component.scss')],
})

export class EntityStatusDropdownComponent {
    isDropdownOpen: boolean = false;

    @Input() entity: Object;
    @Input() statuses: Array<any>;
    @Input() onStatusChange: Function;
    @Input() completedStatus: string;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}