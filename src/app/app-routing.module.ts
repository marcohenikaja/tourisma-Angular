import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AgencesComponent } from './agences/agences.component';
import { AproposComponent } from './apropos/apropos.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [];

@NgModule({
  imports: [ 
    RouterModule.forRoot([
      {path : 'hotels', component : HotelsComponent},
      {path : 'agences', component : AgencesComponent},
      {path : 'apropos', component : AproposComponent},
      {path : 'accueil', component: AccueilComponent},
      {path : '' ,redirectTo:'accueil' , pathMatch:'full'},
      {path: '**',redirectTo:'accueil',pathMatch:'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
