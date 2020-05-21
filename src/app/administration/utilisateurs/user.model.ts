import { IUser } from './user.interface';

export class Utilisateurs implements IUser {

    public id: number;

    public firstname: string;

    public lastname: string;

    public email: string;

    public site?:string;

    constructor(user:IUser) {
        this.id=user.id;
        this.firstname=user.firstname;
        this.lastname=user.lastname;
        this.email=user.email;

    }


}