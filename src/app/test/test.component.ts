import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              welcome {{name}}
            </h2>
            <h2 class="text-success">Vishal Poddar</h2>
            <h2 [class]="successClass">Vishal Poddar</h2>
            <h2 [class.text-danger]="hasError"> Vishal Poddar</h2>
            <h2 [ngClass]="messageClasses"> Vishal Poddar</h2>


        `,
  styles: [ `
    .text-success{
      color : green;
    }
    .text-danger{
      color : red;
    }
    .text-special{
      font-style : italic;
    }
  `]
})
export class TestComponent {

  public name= "vishal"
  public successClass= "text-success"
  public hasError = true
  public isSpecial = true;
  public messageClasses={
    "text-message":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  
}
