import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { Team } from '../models/team';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  apiURL: string = "https://e349-208-184-165-135.ngrok.io";

  constructor(private http: HttpClient) {
    this.apiURL = "http://localhost:3000";
  }

  getTeam(code: string): Observable<Team> {
    return this.http.get<Team>(`${this.apiURL}/teams/${encodeURIComponent(code)}`);
  }

  addDefaultTodoItem(code: string, task: string): Observable<any> {
    return this.http.post<Team>(`${this.apiURL}/teams/${encodeURIComponent(code)}/addDefaultTodoItem`, { task: task })
  }

  deleteDefaultTodoItem(code: string, task: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/teams/${encodeURIComponent(code)}/deleteDefaultTodoItem`, { body: { task: task } })
  }

  getUsers(code: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}/teams/${encodeURIComponent(code)}/users`);
  }

  getDefaultTodoItems(code: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiURL}/teams/${encodeURIComponent(code)}/defaultTodoItems`);
  }
}
