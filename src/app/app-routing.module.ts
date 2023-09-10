import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments',component:DepartmentListComponent},
  {path:'employees',component:EmployeesListComponent},
  {path:'employees/:id',component:EmployeeDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
