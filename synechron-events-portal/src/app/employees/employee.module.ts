import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { employeesRoutes } from './employees.route';


@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, employeesRoutes],
    exports: [EmployeesListComponent],
    declarations: [EmployeesListComponent,
        EmployeeDetailsComponent],
    providers: [],
})
export class EmployeeModule { }
