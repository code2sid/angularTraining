import { Component, Input } from '@angular/core';

import { Employee } from '../models/employee';

@Component({
    selector: 'employee-details',
    templateUrl: 'employee-details.component.html'
})

export class EmployeeDetailsComponent {
    constructor() { }

    pageTitle: string = "Details of - "
    @Input() emp: Employee;
}