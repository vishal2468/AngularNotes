import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              welcome {{name}}
            </h2>
            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
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
