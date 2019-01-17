import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule,CommonModule],
    exports: [EmployeesListComponent],
    declarations: [EmployeesListComponent,
        EmployeeDetailsComponent],
    providers: [],
})
export class EmployeeModule { }
