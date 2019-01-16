import { Component } from '@angular/core';

import { Employee } from '../models/employee';

@Component({
    selector: 'employees-list',
    templateUrl: 'employees-list.component.html'
})

export class EmployeesListComponent {
    constructor() {
        // this.employee = new Employee();
        // this.employee.employeeId=12345;
        // this.employee.employeeName="Siddharth Gupta";
        // this.employee.address="Supreme Palms, Balewadi";
        // this.employee.city = "Pune";
        // this.employee.state="Maharashtra";
        // this.employee.country="Inida";
        // this.employee.phone="+91-9911911680";
        // this.employee.email="write2siddharthg@gmail.com";
        // this.employee.avatar="images/noimage.png";
    }

    pageTitle: string = "Synechron Employees List";
    subTitle: string = "Register employees with Events Portal!";
    employees: Employee[] = [
        {
            employeeId: 12940,
            employeeName: "Siddharth Gupta",
            address: "Elite Garden, Aundh",
            city: "Pune",
            state: "Maharashtra",
            country: "India",
            phone: "+91-9911911680",
            email: "write2siddharthg@gmail.com",
            avatar: "images/noimage.png",
            project: "angular training"
        },
        {
            employeeId: 11940,
            employeeName: "harsh Gupta",
            address: "Supreme Palms, Balewadi",
            city: "Pune",
            state: "Maharashtra",
            country: "India",
            phone: "+91-882668045",
            email: "harsh@gmail.com",
            avatar: "images/noimage.png",
            project: "angular training"
        },
        {
            employeeId: 12990,
            employeeName: "Hemant Gupta",
            address: "Supreme Palms, Balewadi",
            city: "Pune",
            state: "Maharashtra",
            country: "India",
            phone: "+91-9911914547",
            email: "Hemant@gmail.com",
            avatar: "images/noimage.png",
            project: "angular training"
        }
    ];

    selectedEmployee: Employee;
    onEmployeeSelect(employee: Employee): void {
        this.selectedEmployee = employee;
        
    }

}