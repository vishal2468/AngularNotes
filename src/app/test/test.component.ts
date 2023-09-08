import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              welcome {{name}}
            </h2>
            <button (click)="onClick($event)">Button</button>
            <button (click)="greetings = 'Welcome to the city'">Button</button>
            <h2>
              {{greetings}}
            </h2>
        `,
  styles: []
})
export class TestComponent {
  public name= "vishal";
  public greetings= ""
  onClick(event: any){
    console.log("welcome Vishal");
    this.greetings="Welcome to the city"
    console.log(event)
  }
  
}
