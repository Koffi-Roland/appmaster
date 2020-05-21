import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
  { path: 'accueil',component: AccueilComponent},
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
