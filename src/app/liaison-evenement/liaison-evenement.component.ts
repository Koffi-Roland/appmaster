import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-evenement',
  templateUrl: './liaison-evenement.component.html',
  styleUrls: ['./liaison-evenement.component.scss']
})
//liaison-evenement.component.ts
export class LiaisonEvenementComponent implements OnInit {
  noms = ['Lamrous', 'Aziawor', 'Hoetowou', 'Tepe'];

  constructor() { }

  ngOnInit() {
  }

  ajoutNom(newNom: string) {
    if (newNom) {
      this.noms.push(newNom);
    }
  }
}
