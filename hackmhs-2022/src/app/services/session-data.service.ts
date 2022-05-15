import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  stringDict = new Map<string, string>();

  constructor() {
  }


  set(key: string, val: string) {
    this.stringDict.set(key, val);
  }

  get(key: string): string {
    let r = this.stringDict.get(key);
    if (r != undefined) {
      return (r);
    }
    return ('');
  }
}
