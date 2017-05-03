import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'autocomplete',
    template: require('./autocomplete.component.html'),
    styles: [require('./autocomplete.component.scss')],
})

export class AutocompleteComponent {
    @Input() items: Array<any>;
    @Input() selectedItem: any;
    @Output() selectedItemChange = new EventEmitter();
    @Input() select: Function;
    @Input() placeholder: string;

    query: string = '';
    countries: Array<string> = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus',
        'Belgium', 'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus',
        'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
        'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo',
        'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta',
        'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
        'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
        'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'];
    filteredList: Array<string> = [];
    selectedIndex: number;

    constructor() {
        this.selectedIndex = -1;
    }

    filter(event: any = {}) {
        if (this.query !== '') {
            this.filteredList = this.items.filter((item) => {
                return item.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            });
            if (event.code === 'ArrowDown' && this.selectedIndex < this.filteredList.length) {
                this.selectedIndex++;
            } else if (event.code === 'ArrowUp' && this.selectedIndex > 0) {
                this.selectedIndex--;
            }
        } else {
            this.filteredList = [];
        }
    }

    onSelect(item: any) {
        this.selectedItemChange.emit(item);
        this.select && this.select(item);
        this.query = '';
        this.filteredList = [];
        this.selectedIndex = -1;
    }
}