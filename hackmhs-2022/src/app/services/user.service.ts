import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  devDB =[<User>{uid: "qwer", orgCode:"1234", email:"g@g.com", displayName: "Bob", photoURL:"123.com", accountType: "admin", teamName:"swag",
  todoList: [new Task("test", false)]

}]
  constructor() { }

  getUser(id: string): Observable<User>{
    return of(this.devDB[0]);
  }
}
