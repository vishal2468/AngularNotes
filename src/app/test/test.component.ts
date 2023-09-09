import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h1>{{name  }}</h1>
            <h1>{{name | lowercase }}</h1>
            <h1>{{name | uppercase }}</h1>
            <h1>{{name | titlecase }}</h1>
            <h1>{{name | slice:1 }}</h1>
            <h1>{{name | slice:1:5 }}</h1>

            <h1>{{person | json }}</h1>

            <h1>{{num | number:'1.2-3'}}</h1>

            <h1>{{0.25 | percent}}</h1>

            <h1>{{0.25 | currency}}</h1>

            <h1>{{date}}</h1>

            <h1>{{date | date:'short'}}</h1>
        `,
  styles: []
})
export class TestComponent {

  person ={
    name:"vishal",
    lastName:"poddar"
  }
  num = 943.11

  date =new Date()
  
  @Input() public parentData: any;
  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter()

  fireEvent(){
    this.childEvent.emit('Hi Vishal Poddar')
  }
}
