import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterLookupComponent } from './monster-lookup/monster-lookup.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { MaterialModule } from '../material/material.module';
import { CommonLogicModule } from '../common/common-logic.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MonsterLookupComponent, MonsterCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommonLogicModule
  ]
})
export class MonstersModule { }
