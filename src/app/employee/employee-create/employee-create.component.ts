import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
    template: require('./employee-create.component.html'),
    styles: [require('./employee-create.component.scss')],
    providers: [EmployeeService],
})

export class EmployeeCreateComponent implements OnInit {
    employee: Employee;
    mode: String;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.mode = this.identifyMode();

        if (this.mode === 'edit') {
            document.title = 'Edit Employee';

            const id = this.route.params
                .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
                .subscribe((employee: Employee) => {
                    this.employee = employee;
                });
        } else {
            document.title = 'Create Employee';

            this.employee = new Employee();
        }
    }

    identifyMode() {
        return this.route.snapshot.params['id'] ? 'edit' : 'create';
    }

    updateEmployee() {
        this.employeeService.updateEmployee(this.employee).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`employees/${this.employee.id}`);
            }
        });
    }

    createEmployee() {
        this.employeeService.createEmployee(this.employee).then(response => {
            if (response.status === 200) {
                this.router.navigateByUrl(`employees/${response.id}`);
            }
        });
    }
}