import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/User.model';
import { AuthenticationService } from 'src/app/core/security/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  getCurrentUser(): User {
    return this.authenticationService.getCurrentUser();
  }

  logout(): void {
    this.authenticationService.logout().subscribe()
  }

}
