/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUserDto } from '../../models/get-user-dto';

export interface UsersControllerFindAll$Params {
}

export function usersControllerFindAll(http: HttpClient, rootUrl: string, params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetUserDto>>> {
  const rb = new RequestBuilder(rootUrl, usersControllerFindAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GetUserDto>>;
    })
  );
}

usersControllerFindAll.PATH = '/users';
