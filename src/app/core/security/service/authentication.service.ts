import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable, of } from 'rxjs';
import { User } from '../../model/User.model';

import { LocalStorageService } from '../../providers/browser/localStorage.service';
import { FirebaseService } from '../../providers/firebase/firebase.service';
import { FirebaseConstants } from '../../providers/firebase/firebaseConstants';
import { LoginRequest } from '../../providers/firebase/request/LoginRequest.model';
import { LoginResponse } from '../../providers/firebase/response/LoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private firebaseService: FirebaseService,
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  login({ email, password }: LoginRequest): Observable<LoginResponse> {
    return this.firebaseService.login(email, password);
  }

  logout(): Observable<void> {
    return this.firebaseService.logout()
      .pipe(finalize(() => this.router.navigate(['/'])))
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.hasUser());
  }

  private hasUser(): boolean {
    return this.localStorage.exists(FirebaseConstants.USER_KEY);
  }

  getCurrentUser(): User {
    return JSON.parse(this.localStorage.getItem(FirebaseConstants.USER_KEY));
  }

}
