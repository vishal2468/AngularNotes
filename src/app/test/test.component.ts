import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div *ngFor="let name of names ; index as i ; first as f ; last as l; odd as o ; even as e">
              <br>
              <h1>{{i}} Hi {{name}} {{f}} {{l}}</h1>
            </div>
        `,
  styles: []
})
export class TestComponent {
  public names = ["Mumbai","Delhi","Kochi","Bangalore","Chennai"]
}
