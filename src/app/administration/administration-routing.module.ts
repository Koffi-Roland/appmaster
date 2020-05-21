import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { CoursComponent } from './cours/cours.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
    { path: '', component: AdministrationComponent, 
  
    children: [


      {
          path: 'formation',
          component: FormationComponent,

        
      },
      {
        path: 'cours',
        component: CoursComponent,

      
    },
    {
      path: 'utilisateurs',
      component: UtilisateursComponent,

    
  }
  ]}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }