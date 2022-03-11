import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterLookupComponent } from './monster-lookup/monster-lookup.component';
import { MonsterCardComponent, MonsterRefCardComponent } from './monster-card/monster-card.component';
import { MaterialModule } from '../material/material.module';
import { CommonLogicModule } from '../common/common-logic.module';
import { HttpClientModule } from '@angular/common/http';
import { MonsterLookupFilterComponent } from './monster-lookup/monster-lookup-filter/monster-lookup-filter.component';
import { FormsModule } from '@angular/forms';
import { MonsterSelectListComponent } from './monster-select-list/monster-select-list.component';



@NgModule({
  declarations: [MonsterLookupComponent, MonsterCardComponent, MonsterRefCardComponent, MonsterLookupFilterComponent, MonsterSelectListComponent],
  exports: [MonsterLookupComponent, MonsterSelectListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommonLogicModule,
    FormsModule
  ],
})
export class MonstersModule { }
