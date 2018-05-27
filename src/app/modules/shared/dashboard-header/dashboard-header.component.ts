import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  isLogoutButtonClicked = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.isLogoutButtonClicked.emit(true);
  }
}
