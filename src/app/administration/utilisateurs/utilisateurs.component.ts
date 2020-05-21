import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Utilisateurs } from './user.model';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  users:Utilisateurs[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers():Utilisateurs[]{
   this.users =  this.userService.getUsers();
    return this.users;
  }

}
