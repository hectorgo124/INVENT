/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Shipment } from '../../models/shipment';

export interface ShipmentsControllerRemoveShipment$Params {
  id: number;
}

export function shipmentsControllerRemoveShipment(http: HttpClient, rootUrl: string, params: ShipmentsControllerRemoveShipment$Params, context?: HttpContext): Observable<StrictHttpResponse<Shipment>> {
  const rb = new RequestBuilder(rootUrl, shipmentsControllerRemoveShipment.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Shipment>;
    })
  );
}

shipmentsControllerRemoveShipment.PATH = '/shipments/{id}';
