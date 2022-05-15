import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  devDB: User[] =[<User>{uid: "qwer", orgCode:"1234", email:"g@g.com", displayName: "Bob", photoURL:"123.com", accountType: "admin", teamName:"swag", role:"it supervisor", subjects:["python"]}];

  constructor() { }

  getTeam(code:string): Observable<User[]>{
    return of(this.devDB);
  }
}
