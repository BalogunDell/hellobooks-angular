import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpEvent,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { AlertType } from '../enums/alert-type';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    alertType = AlertType;
  constructor(
      private authService: AuthService,
      private alertService: AlertService,
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.authService.getUserToken('token');
    const url = request.url.substr(request.url.indexOf('v1/') + 3 );
    const openEndpoints = ['user/signup', 'users/signin', 'trendingbooks'];
    const checkForEndpoint = openEndpoints.find((endpoint) => {
        return endpoint === url;
    });

    if (!checkForEndpoint) {
        const clonedRequest = request.clone({
            setHeaders: {
                'Authorization': token
            }
        });
        return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
