import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsNavigationComponent } from './bms-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [BmsNavigationComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    BmsNavigationComponent
  ]
})
export class BmsNavigationModule { }
