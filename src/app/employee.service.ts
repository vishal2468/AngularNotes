import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './Employee';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/data/employees.json"

  constructor(private http : HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.erroHandler));
  }
  erroHandler(error: HttpErrorResponse){
    return throwError(() => new Error(error.message || 'server Error'));
  }
}
