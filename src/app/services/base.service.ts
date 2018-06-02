import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from '../../env';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {
  protected baseApi = environment.baseApi;
  protected userId;
  constructor(
    protected http: HttpClient,
    protected authService: AuthService,
  ) {}

  handleHttpErrorResponse(error: HttpErrorResponse) {
    return _throw(error.error.message);
  }
  setHeaders(): object {
    const token = this.authService.getUserToken('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': token })
    };
    return httpOptions;
  }

  getUserId(): number {
    this.userId = this.authService.decodeToken().id;
    return this.userId;
  }
}
