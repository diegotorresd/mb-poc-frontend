import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DirectorComponent } from './director/director.component'

@NgModule({
  declarations: [
    AppComponent,
    DirectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
