import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              welcome {{name}}
            </h2>
            <input [id]="myId" type="text" value= "Vishal">
            <input id="{{myId}}" type="text" value= "Vishal">
            <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Vishal">
            <input [disabled]="false" id="{{myId}}" type="text" value="Vishal">
        `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public myId = "newId"
  public name = "vishal"
  public isDisabled = false;
}
