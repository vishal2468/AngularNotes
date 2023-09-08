import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              welcome {{name}}
            </h2>
            <input [(ngModel)]="name" type="text">
            {{name}}
        `,
  styles: []
})
export class TestComponent {
  public name= "vishal";
  public greetings= ""
  logMessage(value:string){
    console.log(value);
  }
  
}
