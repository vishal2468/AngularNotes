import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              welcome {{name}}
            </h2>
            <h2>{{2+2}}</h2>
            <h2>{{"welcome "+name}}</h2>
            <h2>{{name.length}}</h2>

            <h2>{{name = "some other name"}}
        `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name = "vishal"
}
