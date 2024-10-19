import {Component, inject} from '@angular/core';
import { Employee } from '../model/employee';
import {EmployeeService} from "../service/employee.service";
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe]
})
export class EmployeesComponent {
  protected employees: EmployeeService = inject(EmployeeService);
  // Observable to hold the employee data
  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {
    // Subscribe to the employee data from the service
    this.employees$ = this.employeeService.getEmployees();
  }
}
