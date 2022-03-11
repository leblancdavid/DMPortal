import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncounterLookupComponent } from './adventure/encounters/encounter-lookup/encounter-lookup.component';
import { PartyEditorComponent } from './adventure/players/party-editor/party-editor.component';
import { MonsterLookupComponent } from './monsters/monster-lookup/monster-lookup.component';

const routes: Routes = [
  { path: 'monster-lookup', component: MonsterLookupComponent },
  { path: 'party', component: PartyEditorComponent },
  { path: 'encounters', component: EncounterLookupComponent },
  { path: '', redirectTo: '/encounters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
