import { Component, OnInit } from '@angular/core';

import { UserInfo } from '../../../interfaces/user-info.interface';

import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.scss']
})
export class DashboardNavigationComponent implements OnInit {

  currentNavigationLinks;
  userInfo;
  adminNavigationLinks = [
    { menuText: 'Dashboard', icon: 'dashboard', urlLink: 'dashboard' },
    { menuText: 'Library', icon: 'books', urlLink: 'library' },
    { menuText: 'Upload', icon: 'add', urlLink: 'upload' },
  ];

  userNavigationLinks = [
    { menuText: 'My profile', icon: 'user', urlLink: 'profile' },
    { menuText: 'Library', icon: 'books', urlLink: 'library' },
    { menuText: 'History', icon: 'time', urlLink: 'history' },
    { menuText: 'Borrowed books', icon: 'books', urlLink: '/borrowed-books' },
  ];

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userInfo = this.authService.decodeToken();
    if (this.userInfo.role === 'admin') {
      this.currentNavigationLinks = this.adminNavigationLinks;
    } else {
      this.currentNavigationLinks = this.userNavigationLinks;
    }
  }

}
