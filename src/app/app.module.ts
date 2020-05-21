import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { FormsModule } from '@angular/forms';
//import { AdministrationComponent } from './administration/administration.component';
//import { FormationComponent } from './administration/formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
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
