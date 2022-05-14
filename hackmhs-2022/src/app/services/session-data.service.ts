import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  stringDict = new Map<string, string>();

  constructor() { }

  set(key: string, val: string){
    this.stringDict.set(key, val);
  }

  get(key:string){
    return this.stringDict.get(key);
  }

}
