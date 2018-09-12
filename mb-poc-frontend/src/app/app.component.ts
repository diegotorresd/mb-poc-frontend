import { Component } from '@angular/core';
import { Director } from './director';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  director = new Director('Perico', 'De los palotes')
}
