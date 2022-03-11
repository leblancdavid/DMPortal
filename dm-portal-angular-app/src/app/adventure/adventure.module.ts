import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonLogicModule } from '../common/common-logic.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartyEditorComponent } from './players/party-editor/party-editor.component';
import { PlayerEditorComponent } from './players/player-editor/player-editor.component';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import { EncounterLookupComponent } from './encounters/encounter-lookup/encounter-lookup.component';
import { EncounterEditorComponent } from './encounters/encounter-editor/encounter-editor.component';
import { MonstersModule } from '../monsters/monsters.module';
import { EncounterDetailsComponent } from './encounters/encounter-details/encounter-details.component';
import { MonsterInstanceEditorComponent } from './encounters/monster-instance-editor/monster-instance-editor.component';



@NgModule({
  declarations: [PlayerCardComponent, PlayerEditorComponent, PartyEditorComponent, EncounterLookupComponent, EncounterEditorComponent, EncounterDetailsComponent, MonsterInstanceEditorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CommonLogicModule,
    FormsModule,
    ReactiveFormsModule,
    MonstersModule
  ]
})
export class AdventureModule { }
