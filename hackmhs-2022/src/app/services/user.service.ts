import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  devDB = [<User>{
    id: "qwer", org_code: "1234", email: "g@g.com", display_name: "Bob", photo_url: "123.com", account_type: "admin", teamName: "swag",
    todoList: [new Task("test", false)]

  }]
  constructor() { }

  getUser(id: string): Observable<User> {
    return of(this.devDB[0]);
  }
}
