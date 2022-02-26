import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatureStatComponent } from './creature-stat/creature-stat.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [CreatureStatComponent],
  exports: [CreatureStatComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CommonLogicModule { }
