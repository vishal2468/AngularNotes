import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  template: `
  <h2> Employee List </h2>
  <ul (click)="onSelect(employee)" *ngFor= "let employee of employees">
  <button>{{employee.name}}</button>
  </ul>
  <h2>{{errorMsg}}</h2>
  `,
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  public employees:any = [];
  public errorMsg:any;
  constructor(private _employeeService:EmployeeService, private _router:Router){}

  ngOnInit(){ 
    this._employeeService.getEmployees().subscribe(data=>this.employees=data,error=>this.errorMsg= error);
  }
  onSelect(employee:any){
    this._router.navigate(['/employees',employee.id])
  }
}
