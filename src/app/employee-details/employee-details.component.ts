import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <h2> Employee Details </h2>
  <ul *ngFor= "let employee of employees">
  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  <h2>{{errorMsg}}</h2>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  public employees:any = [];
  public errorMsg:string = '';
  constructor(private _employeeService:EmployeeService){}

  ngOnInit(){
    this._employeeService.getEmployees().subscribe(data=>this.employees=data,error=>this.errorMsg= error);
  }
  
}
