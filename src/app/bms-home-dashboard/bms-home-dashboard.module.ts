import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsHomeDashboardComponent } from './bms-home-dashboard.component';



@NgModule({
  declarations: [BmsHomeDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BmsHomeDashboardComponent
  ]
})
export class BmsHomeDashboardModule { }
