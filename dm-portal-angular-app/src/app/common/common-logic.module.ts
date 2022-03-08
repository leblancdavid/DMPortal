import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatureStatComponent } from './creature-stat/creature-stat.component';
import { MaterialModule } from '../material/material.module';
import { ValueIconComponent } from './value-icon/value-icon.component';



@NgModule({
  declarations: [CreatureStatComponent, ValueIconComponent],
  exports: [CreatureStatComponent, ValueIconComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CommonLogicModule { }
