import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Director } from '../director'
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  @Input() directorId: String
  private directorService: DirectorService

  directorForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  })

  constructor (directorService: DirectorService) {
    this.directorService = directorService
  }

  ngOnInit() {
    this.directorService.getDirector(this.directorId).subscribe(function (director) {
      console.log('subscribe', director.id)
      this.directorForm.patchValue(director)
    }.bind(this))
  }
}
