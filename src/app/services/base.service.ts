import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from '../../env';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import 'rxjs/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {
  protected baseApi = environment.baseApi;

  constructor(
    protected http: HttpClient,
    protected authService: AuthService,
  ) {}

  handleHttpErrorResponse(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }
  setHeaders(): object {
    const token = this.authService.getUserToken('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': token })
    };
    return httpOptions;
  }
}
