import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  devDB: User[] = [<User>{ id: "qwer", org_code: "1234", email: "g@g.com", display_name: "Bob", photo_url: "123.com", account_type: "admin", teamName: "swag", role: "it supervisor", subjects: ["python"] }];

  constructor() { }

  getTeam(code: string): Observable<User[]> {
    return of(this.devDB);
  }
}
