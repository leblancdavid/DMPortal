import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonLogicModule } from '../common/common-logic.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerEditorComponent } from './player-editor/player-editor.component';
import { PartyEditorComponent } from './party-editor/party-editor.component';



@NgModule({
  declarations: [PlayerCardComponent, PlayerEditorComponent, PartyEditorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommonLogicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdventureModule { }
