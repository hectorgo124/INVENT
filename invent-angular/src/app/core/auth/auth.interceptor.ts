import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService, private _router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request object
    console.log('interceptado');
    let newReq = req.clone();

    if (this._authService.accessToken) {
      newReq = req.clone({
        setHeaders: {
          Authorization: this._authService.accessToken,
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    if (this._authService.accessToken) {
      localStorage.removeItem('AccessToken');
      this._authService.signOut();
    }

    // Response
    return next.handle(newReq).pipe(
      catchError((error) => {
        // Catch "401 Unauthorized" responses
        if (error instanceof HttpErrorResponse && error.status === 401) {
          // Sign out
          this._authService.signOut();

          this._router.navigate(['sign-in']);
        }

        return throwError(error);
      })
    );
  }
}
