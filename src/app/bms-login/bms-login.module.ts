import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsLoginComponent } from './bms-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BmsLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BmsLoginComponent
  ]
})
export class BmsLoginModule { }
