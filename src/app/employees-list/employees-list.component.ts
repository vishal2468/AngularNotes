import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  template: `
  <h2> Employee List </h2>
  <ul *ngFor= "let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  public employees:any = [];
  constructor(private _employeeService:EmployeeService){}

  ngOnInit(){
    this.employees = this._employeeService.getEmployees()
  }
}
