/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateShipmentDto } from '../../models/create-shipment-dto';
import { Shipment } from '../../models/shipment';

export interface ShipmentsControllerCreateShipment$Params {
      body: CreateShipmentDto
}

export function shipmentsControllerCreateShipment(http: HttpClient, rootUrl: string, params: ShipmentsControllerCreateShipment$Params, context?: HttpContext): Observable<StrictHttpResponse<Shipment>> {
  const rb = new RequestBuilder(rootUrl, shipmentsControllerCreateShipment.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

shipmentsControllerCreateShipment.PATH = '/shipments';
