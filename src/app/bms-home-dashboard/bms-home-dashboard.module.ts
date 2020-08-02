import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsHomeDashboardComponent } from './bms-home-dashboard.component';
import { BmsNavigationModule } from '../bms-navigation/bms-navigation.module';

@NgModule({
  declarations: [BmsHomeDashboardComponent],
  imports: [
    CommonModule,
    BmsNavigationModule
  ],
  exports: [
    BmsHomeDashboardComponent
  ]
})
export class BmsHomeDashboardModule { }
