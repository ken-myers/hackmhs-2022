import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { SessionDataService } from 'src/app/services/session-data.service';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
    public localStorage: SessionDataService,
    private http: HttpClient
    // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.set('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.get('user')!);
      } else {
        localStorage.set('user', 'null');
        JSON.parse(localStorage.get('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string, orgCode: string, displayName: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        this.SetUserData(result.user, orgCode, displayName);
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any, orgCode: string, displayName: string) {
    const userData: User = {
      id: user.uid,
      email: user.email,
      display_name: displayName,
      photo_url: "https://picsum.photos/200",
      org_code: orgCode,
      account_type: "new-hire"
    };
    console.log(userData);
    this.http.post<User>("https://e349-208-184-165-135.ngrok.io/users", userData).subscribe(
      (e) => { console.log(e)}
    );
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  private handleError(error: HttpErrorResponse, userData: any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}