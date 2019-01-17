import { Component } from '@angular/core';

@Component({
    selector: 'sep-menu',
    templateUrl: 'sep-menu.component.html'
})

export class SepMenuComponent {
    constructor() { }
    menuItems: string[] = [
        "Synechron EP",
        "Home",
        "Employees",
        "Ëvents",
        "New Events",
        "JPH Posts",
        "JPH Users",
        "Login"
    ];

}