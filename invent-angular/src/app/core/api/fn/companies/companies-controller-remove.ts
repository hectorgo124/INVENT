/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCompanyDto } from '../../models/get-company-dto';

export interface CompaniesControllerRemove$Params {
  id: string;
}

export function companiesControllerRemove(http: HttpClient, rootUrl: string, params: CompaniesControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyDto>> {
  const rb = new RequestBuilder(rootUrl, companiesControllerRemove.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCompanyDto>;
    })
  );
}

companiesControllerRemove.PATH = '/companies/{id}';
