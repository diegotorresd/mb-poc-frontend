import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Director } from '../director';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  // TODO it should be possible to just use the Subject and subscribe to it
  @Input() director: Director
  @Input() subject: Subject<Director>

  directorForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  })

  ngOnInit() {
    this.directorForm.patchValue(this.director)
    // TODO is it possible to hook the valueChanges observable
    // to the Subject without subscribing to it here?
    this.directorForm.valueChanges.subscribe(v => {
      this.subject.next(new Director(this.director.id, v.firstName, v.lastName))
    })
  }
}
