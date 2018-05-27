import { Injectable, Inject  } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private router: Router,
  ) {}

  /**
   * Gets token from localstorage, decodes it and returns the user object
   *
   * @returns {object} user infomation
   *
   * @memberof AuthService
   */
  decodeToken() {
   const decodedToken =  this.jwtHelper.decodeToken(localStorage.getItem('token'));
   return {
     id: decodedToken.id,
     email: decodedToken.email,
     role: decodedToken.role,
     membership: decodedToken.membership,
   };
  }

  /**
   * Sets token to localstorage
   *
   * @param {string} token
   *
   * @memberof AuthService
   */
  setUserToken(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Gets token to localstorage
   *
   * @param {string} token
   *
   * @memberof AuthService
   */
  getUserToken(token) {
    return localStorage.getItem('token');
  }

  /**
   * returns true if the user is logged in and the token has not expired
   * but returns false if there is no token atall
   *
   * @returns {boolea} true or false
   *
   * @memberof AuthService
   */
  isUserLoggedIn() {
    if (!localStorage.getItem('token')) {
      return false;
    }

    return tokenNotExpired('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
