import { Component } from '@angular/core'
import { Director } from './director'
import { Observable } from 'rxjs'
import { DirectorService } from './director.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  director$: Observable<Director[]>

  constructor (directorService: DirectorService) {
    this.director$ = directorService.getDirectors()
  }

  trackById (index, item) {
    return item.id
  }
}
