import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterLookupComponent } from './monsters/monster-lookup/monster-lookup.component';

const routes: Routes = [
  { path: 'monster-lookup', component: MonsterLookupComponent },
  { path: '',   redirectTo: '/monster-lookup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
