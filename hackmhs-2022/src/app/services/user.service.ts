import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../shared/services/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = "https://e349-208-184-165-135.ngrok.io";

  constructor(private http: HttpClient) {
    this.apiURL = "http://localhost:3000";
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/users/email/${encodeURIComponent(email)}`);
  }
}
