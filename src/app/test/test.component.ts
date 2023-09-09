import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2 *ngIf="displayName; else elseBlock1">
              Test: welcome {{name}}
            </h2>
            <ng-template #elseBlock1>
              <h2>Name is not diaplayed</h2>
            </ng-template>

            <br>

            <div [ngSwitch]="count">
              <h2 *ngSwitchCase= "1" > vishal</h2>
              <h2 *ngSwitchCase= "2" > poddar</h2>
              <h2 *ngSwitchCase= "3" > hi</h2>
              <h2 *ngSwitchDefault>Pick again</h2>
            </div>
        `,
  styles: []
})
export class TestComponent {
  public name= "vishal";
  public count =2 ;
  public displayName = false;
}
