import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <div>
            <h2>{{parentData}}</h2>
            <button (click)="fireEvent()">Send Button</button>
          </div>
        `,
  styles: []
})
export class TestComponent {
  
  @Input() public parentData: any;
  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter()

  fireEvent(){
    this.childEvent.emit('Hi Vishal Poddar')
  }
}
