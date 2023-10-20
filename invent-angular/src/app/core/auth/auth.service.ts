import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  Observable,
  of,
  Subject,
  switchMap,
  throwError,
} from 'rxjs';
import jwt_decode from 'jwt-decode';
import { AuthService as ApiAuthService } from '../api/services';
import { SignInUserDto } from '../api/models';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  private _authenticated: boolean = false;
  private _refresh$ = new Subject<void>();

  constructor(
    private _httpClient: HttpClient,
    private _authService: ApiAuthService,
    private _router: Router
  ) {}
 
  get refresh$() {
    return this._refresh$;
  }
 
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
    this._refresh$.next();
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');
    this._refresh$.next();

    // Set the authenticated flag to false
    this._authenticated = false;

    this._router.navigate(['sign-in']);
    // Return the observable
    return of(true);
  }

  check(): Observable<boolean> {
    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }
    return of(true);
  }
}
