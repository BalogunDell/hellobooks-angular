import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isPageWrapperNeeded = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {

  if (this.router.url === '/' && this.authService.isUserLoggedIn()) {
    this.router.navigate(['/user']);
      this.isPageWrapperNeeded = true;
    } else {
      this.router.navigate(['/']);
      this.isPageWrapperNeeded = false;
    }
  }

  logOut(event) {
    console.log(event);
  }
}
