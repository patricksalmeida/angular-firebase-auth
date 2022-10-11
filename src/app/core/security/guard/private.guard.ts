import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthenticationService } from '../service/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.isAuthenticated()
      .pipe(tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['auth/login'])
        }

        return isAuthenticated;
      }));
  }

}
