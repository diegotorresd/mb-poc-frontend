import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Director } from '../director';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  @Input() director: Director

  directorForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.directorForm = new FormGroup({
      firstName: new FormControl(this.director.firstName, Validators.required),
      lastName: new FormControl(this.director.lastName),
    });
  }
}
