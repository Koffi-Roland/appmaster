import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  welcome: string;
  constructor() {
    this.welcome = "Bienvenu au Master IAI-UTBM-CIC";
  }
  ngOnInit() {
  }
}
