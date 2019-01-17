import { NgModule } from '@angular/core';
import { SepMenuComponent } from './sep-menu/sep-menu.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [SepMenuComponent],
    declarations: [SepMenuComponent],
    providers: [],
})
export class NavigationModule { }
