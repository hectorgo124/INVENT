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

  signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    this._refresh$.next();

    this._authenticated = false;

    this._router.navigate(['sign-in']);

    return of(true);
  }

  check(): Observable<boolean> {
    if (!this.accessToken) {
      return of(false);
    }
    return of(true);
  }
}
