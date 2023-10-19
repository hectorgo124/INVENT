/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { GetUserDto } from '../models/get-user-dto';
import { usersControllerFindAll } from '../fn/users/users-controller-find-all';
import { UsersControllerFindAll$Params } from '../fn/users/users-controller-find-all';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersControllerFindAll()` */
  static readonly UsersControllerFindAllPath = '/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindAll$Response(params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetUserDto>>> {
    return usersControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindAll(params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<Array<GetUserDto>> {
    return this.usersControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetUserDto>>): Array<GetUserDto> => r.body)
    );
  }

}
