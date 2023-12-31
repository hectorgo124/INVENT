/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCompanyDto } from '../../models/get-company-dto';
import { UpdateCompanyDto } from '../../models/update-company-dto';

export interface CompaniesControllerUpdate$Params {
  id: string;
      body: UpdateCompanyDto
}

export function companiesControllerUpdate(http: HttpClient, rootUrl: string, params: CompaniesControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyDto>> {
  const rb = new RequestBuilder(rootUrl, companiesControllerUpdate.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

companiesControllerUpdate.PATH = '/companies/{id}';
