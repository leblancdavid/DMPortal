import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyCreatorComponent } from './adventure/party-creator/party-creator.component';
import { MonsterLookupComponent } from './monsters/monster-lookup/monster-lookup.component';

const routes: Routes = [
  { path: 'monster-lookup', component: MonsterLookupComponent },
  { path: 'party', component: PartyCreatorComponent },
  { path: '', redirectTo: '/party', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
