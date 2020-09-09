import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsSignupComponent } from './bms-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BmsSignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports:[
    BmsSignupComponent
  ]
})
export class BmsSignupModule { }
