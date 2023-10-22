/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ShipmentsControllerFindAll$Params {
  page: number;
  limit: number;
}

export function shipmentsControllerFindAll(http: HttpClient, rootUrl: string, params: ShipmentsControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shipmentsControllerFindAll.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('limit', params.limit, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

shipmentsControllerFindAll.PATH = '/shipments';
