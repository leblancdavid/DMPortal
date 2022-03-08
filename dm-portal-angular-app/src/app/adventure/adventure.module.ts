import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonLogicModule } from '../common/common-logic.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommonLogicModule,
    FormsModule
  ]
})
export class AdventureModule { }
