import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonLogicModule } from '../common/common-logic.module';
import { FormsModule } from '@angular/forms';
import { PartyCreatorComponent } from './party-creator/party-creator.component';
import { PlayerCardComponent } from './player-card/player-card.component';



@NgModule({
  declarations: [PartyCreatorComponent, PlayerCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommonLogicModule,
    FormsModule
  ]
})
export class AdventureModule { }
