/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Company } from '../../models/company';

export interface CompaniesControllerFindAll$Params {
}

export function companiesControllerFindAll(http: HttpClient, rootUrl: string, params?: CompaniesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Company>>> {
  const rb = new RequestBuilder(rootUrl, companiesControllerFindAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Company>>;
    })
  );
}

companiesControllerFindAll.PATH = '/companies';
