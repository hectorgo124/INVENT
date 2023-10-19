/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Company } from '../../models/company';
import { CreateCompanyDto } from '../../models/create-company-dto';

export interface CompaniesControllerCreate$Params {
      body: CreateCompanyDto
}

export function companiesControllerCreate(http: HttpClient, rootUrl: string, params: CompaniesControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Company>> {
  const rb = new RequestBuilder(rootUrl, companiesControllerCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Company>;
    })
  );
}

companiesControllerCreate.PATH = '/companies';
