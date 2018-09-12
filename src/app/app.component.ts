import { Component } from '@angular/core'
import { Director } from './director'
import { Subject, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // TODO: ngFor only accepts arrays, or Observable<Array>, or Iterators...
  // the idea would be to have the input be an Observable<Director>,
  // so that instead of mutating an array, each change to the underlying
  // datastore is propagated back here
  director$ = of([
    new Director('001', 'Perico', 'De los palotes'),
    new Director('002', 'Rodolfo', 'Langostino')
  ])
  // TODO: this shares the same Subject across all Directors, which means
  // the change streams are already "merged" (they all publish to the same instance).
  // Would it be better to have one subject per component? And if so, what would
  // happen if a model is added/removed? (see: different types of Subject)
  subject = new Subject<Director>()

  constructor () {
    // TODO: Instead of consuming changes here, propagate them to the Datastore
    // probably this means that the Subject should live inside a service instead
    this.subject.subscribe({
      next (val) {
        console.log(val)
      }
    })
  }

  trackById (index, item) {
    return item.id
  }
}
