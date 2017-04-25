import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'employee-dashboard',
    template: require('./employee-dashboard.component.html'),
    styles: [require('./employee-dashboard.component.scss')],
})

export class EmployeeDashboardComponent implements OnInit {
    employees: Employee[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        document.title = 'Employee Dashboard';

        this.employeeService.getEmployees().then(employees => {
            this.employees = employees;
        });
    }
}