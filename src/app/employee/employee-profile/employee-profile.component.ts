import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
    template: require('./employee-profile.component.html'),
    styles: [require('./employee-profile.component.scss')],
})

export class EmployeeProfileComponent implements OnInit {
    employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const id = this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe((employee: Employee) => this.employee = employee);
    }

    deleteEmployee(employee: Employee) {
        this.employeeService.deleteEmployee(employee).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl('employees');
            }
        });
    }
}