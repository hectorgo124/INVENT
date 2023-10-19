import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { AuthService as ApiAuthService } from '../api/services';
import { SignInUserDto } from '../api/models';
@Injectable()
export class AuthService {
  private _authenticated: boolean = false;

  constructor(
    private _httpClient: HttpClient,
    private _authService: ApiAuthService
  ) {}

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
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

    // Set the authenticated flag to false
    this._authenticated = false;

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
