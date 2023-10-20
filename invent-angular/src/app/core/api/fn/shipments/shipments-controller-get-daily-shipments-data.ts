/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Shipment } from '../../models/shipment';

export interface ShipmentsControllerGetDailyShipmentsData$Params {
}

export function shipmentsControllerGetDailyShipmentsData(http: HttpClient, rootUrl: string, params?: ShipmentsControllerGetDailyShipmentsData$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Shipment>>> {
  const rb = new RequestBuilder(rootUrl, shipmentsControllerGetDailyShipmentsData.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Shipment>>;
    })
  );
}

shipmentsControllerGetDailyShipmentsData.PATH = '/shipments/weekShipments';
