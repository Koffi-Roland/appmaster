import { Injectable } from '@angular/core';
import { Utilisateurs } from './user.model';


@Injectable()
export class UserService {

  private users: Utilisateurs[] = [
    new Utilisateurs({
      id: 0,
      firstname: 'Koffi',
      lastname: 'AZIAWOR',
      email: 'krolandaziawor@gmail.com'
    }), new Utilisateurs({
      id: 1,
      firstname: 'Sid',
      lastname: 'Lamrous',
      email: 'sid.lamrous@gmail.com'
       
    

    }), new Utilisateurs({
        id: 2,
        firstname: 'Yaovi',
        lastname: 'HOETOHOU',
        email: 'djimidjimi@gmail.com'


    }),new Utilisateurs({
        id: 3,
        firstname: 'Saturnin',
        lastname: 'JAVA',
        email: 'java.saturnin@gmail.com'
         
      
  
      }), new Utilisateurs({
          id: 2,
          firstname: 'Daniel',
          lastname: 'CSHARP',
          email: 'daniel@gmail.com'
  
  
      })


  ];

  getUsers(): Utilisateurs[] {
    let _users = [];
    _users = this.users;
    return _users;
  }

  


}