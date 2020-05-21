import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { FormationComponent } from './formation/formation.component';
import { CoursComponent } from './cours/cours.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { CommonModule } from '@angular/common';
import { UserService } from './utilisateurs/user.service';




@NgModule({
  imports: [AdministrationRoutingModule,
    CommonModule,],
  declarations: [AdministrationComponent,FormationComponent,CoursComponent,UtilisateursComponent],
  providers: [UserService],

 
  exports: [AdministrationComponent]
})
export class AdministrationModule { }