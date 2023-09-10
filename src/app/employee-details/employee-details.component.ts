import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  template: `
  <h2> employee-details work {{employeeId}}</h2>
  <button (click)="goPrevious()">Previous</button>
  <button (click)="goNext()">Next</button>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  public employeeId: any;

  constructor(private route: ActivatedRoute,private router:Router) { }

  goPrevious(){
    let previousId = this.employeeId-1
    this.router.navigate(["/employees",previousId])
  }
  goNext(){
    let nextid = this.employeeId+1
    this.router.navigate(["/employees",nextid])
  }

  ngOnInit() {
    // let id: any = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.employeeId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id= parseInt(params.get('id')!);
      this.employeeId=id;
    });
  }

}
