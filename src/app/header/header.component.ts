import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';

@Component({
    selector: 'staf-header',
    template: require('./header.component.html'),
    styles: [ require('./header.component.scss') ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    showMenu: Boolean;

    toggleMenu(): void {
        this.showMenu = !this.showMenu;
    }

    // @HostListener('document:click', ['$event'])
    // onClick(event:MouseEvent) {
    //     console.log('ddd');
    //     if (this.showMenu) {
    //         this.showMenu = false;
    //     }
    // }
}