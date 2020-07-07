import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison',
  templateUrl: './liaison.component.html',
  styleUrls: ['./liaison.component.scss']
})
export class LiaisonComponent implements OnInit {
estAdmin:boolean;
title:string;
  constructor() { }

  ngOnInit() {
    this.title="Entrée de données";
    this.estAdmin=false;
  }

}
