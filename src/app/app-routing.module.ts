import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LiaisonComponent } from './liaison/liaison.component';
import { LiaisonEvenementComponent } from './liaison-evenement/liaison-evenement.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
  { path: 'accueil',component: AccueilComponent},
  { path: 'interpolation',component: InterpolationComponent},
  { path: 'liaison',component: LiaisonComponent},
  { path: 'liaison-evenement',component: LiaisonEvenementComponent},
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
