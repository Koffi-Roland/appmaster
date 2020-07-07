import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AccueilUserComponent } from './accueil-user/accueil-user.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LiaisonComponent } from './liaison/liaison.component';
import { LiaisonEvenementComponent } from './liaison-evenement/liaison-evenement.component';
//import { AdministrationComponent } from './administration/administration.component';
//import { FormationComponent } from './administration/formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AccueilUserComponent,
    AccueilAdminComponent,
    InterpolationComponent,
    LiaisonComponent,
    LiaisonEvenementComponent,
    //AdministrationComponent
   // FormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
