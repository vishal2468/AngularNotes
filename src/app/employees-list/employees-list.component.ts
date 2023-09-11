import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  template: `
  <h2> Employee List </h2>
  <ul (click)="onSelect(employee)" [class.selected]="isSelected(employee)" *ngFor= "let employee of employees">
  <button>{{employee.name}}</button>
  </ul>
  <h2>{{errorMsg}}</h2>
  `,
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  public selectedId: any;
  public employees: any = [];
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
    });
  }
  onSelect(employee: any) {
    this._router.navigate(['/employees', employee.id])
  }
  isSelected(employee: any) {
    return employee.id === this.selectedId;
  }
}
