import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) {}

    getEmployees(): Promise<Employee[]> {
        return this.http.get('/api/employees')
            .toPromise()
            .then(response => response.json() as Employee[]);
    }

    getAvailableEmployees(positionId: any): Promise<Employee[]> {
        return this.http.get(`/api/employees/available/${positionId}`)
            .toPromise()
            .then(response => response.json() as Employee[]);
    }

    getEmployee(id: number): Promise<Employee> {
        return this.http.get(`/api/employees/${id}`)
            .toPromise()
            .then(response => response.json() as Employee);
    }

    createEmployee(employee: Employee) {
        return this.http.post('/api/employees/create', { employee })
            .toPromise()
            .then(response => response.json());
    }

    updateEmployee(employee: Employee): Promise<any> {
        return this.http.put('/api/employees/edit', { employee })
            .toPromise()
            .then(response => response);
    }

    deleteEmployee(employee: Employee): Promise<any> {
        return this.http.delete('/api/employees/delete', { body: { id: employee.id } })
            .toPromise()
            .then(response => response);
    }
}

