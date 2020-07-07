import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hello777777777");
  }

}
