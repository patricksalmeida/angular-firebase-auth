import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/providers/browser/localStorage.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string

  constructor(private dashboardService: DashboardService) {
    console.log(this.dashboardService.getCurrentUser()['email'])
    this.username = this.dashboardService.getCurrentUser().email
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.dashboardService.logout();
  }
}
