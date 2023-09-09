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

            <h2 *ngIf="displayName; then thenBlock2; else elseBlock2;">
              Test: welcome {{name}}
            </h2>
            <ng-template #thenBlock2>
              <h2>Name is not diaplayed</h2>
            </ng-template>
            <ng-template #elseBlock2>
              <h2>Name is not diaplayed</h2>
            </ng-template>
        `,
  styles: []
})
export class TestComponent {
  public name= "vishal";
  public displayName = false;
}
