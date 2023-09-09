import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  template: `
  <h2> Employee List </h2>
  <ul *ngFor= "let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  <h2>{{errorMsg}}</h2>
  `,
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  public employees:any = [];
  public errorMsg:any;
  constructor(private _employeeService:EmployeeService){}

  ngOnInit(){ 
    this._employeeService.getEmployees().subscribe(data=>this.employees=data,error=>this.errorMsg= error);
  }
}
