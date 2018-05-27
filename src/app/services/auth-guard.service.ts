import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
