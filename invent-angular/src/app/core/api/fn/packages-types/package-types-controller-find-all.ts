/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PackageType } from '../../models/package-type';

export interface PackageTypesControllerFindAll$Params {
}

export function packageTypesControllerFindAll(http: HttpClient, rootUrl: string, params?: PackageTypesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PackageType>>> {
  const rb = new RequestBuilder(rootUrl, packageTypesControllerFindAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PackageType>>;
    })
  );
}

packageTypesControllerFindAll.PATH = '/package-types';
