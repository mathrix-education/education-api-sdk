import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthTokenName} from '../education-api-sdk.config';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(@Inject(AuthTokenName) private authTokenName: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem(this.authTokenName);
    if (!token) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(token)}`
      }
    });

    return next.handle(request);
  }
}
