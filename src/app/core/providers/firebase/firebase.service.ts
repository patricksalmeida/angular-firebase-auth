import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { from, Observable, tap } from 'rxjs';
import { LocalStorageService } from '../browser/localStorage.service';
import { firebaseConfig } from './firebase.config';
import { FirebaseConstants } from './firebaseConstants';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private localStorage: LocalStorageService) {
    this.initialize();
  }

  initialize(): any {
    return initializeApp(firebaseConfig);
  }

  getAuthentication() {
    return getAuth();
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.getAuthentication(), email, password))
      .pipe(tap(response => {
        this.localStorage.setItem(FirebaseConstants.USER_KEY, response.user)
      }));
  }

  logout(): Observable<void> {
    return from(signOut(this.getAuthentication()))
      .pipe(tap(_ => this.localStorage.clear()));
  }

}
