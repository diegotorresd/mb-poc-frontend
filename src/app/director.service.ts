import { Injectable } from '@angular/core'
import { Director } from './director'
import { Observable, BehaviorSubject, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  private _directors: Director[] = [
    new Director('001', 'Perico', 'De los palotes'),
    new Director('002', 'Rodolfo', 'Langostino')
  ]
  constructor() {}

  getDirectors(): Observable<Director[]> {
    return of(this._directors)
  }

  getDirector(id: String): BehaviorSubject<Director> {
    const dir = this._directors.find(d => d.id === id)
    return new BehaviorSubject<Director>(dir)
  }
}
