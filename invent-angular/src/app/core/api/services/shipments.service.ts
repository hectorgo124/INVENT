/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { GetShipmentDto } from '../models/get-shipment-dto';
import { Shipment } from '../models/shipment';
import { shipmentsControllerCreateShipment } from '../fn/shipments/shipments-controller-create-shipment';
import { ShipmentsControllerCreateShipment$Params } from '../fn/shipments/shipments-controller-create-shipment';
import { shipmentsControllerFindAll } from '../fn/shipments/shipments-controller-find-all';
import { ShipmentsControllerFindAll$Params } from '../fn/shipments/shipments-controller-find-all';
import { shipmentsControllerRemoveShipment } from '../fn/shipments/shipments-controller-remove-shipment';
import { ShipmentsControllerRemoveShipment$Params } from '../fn/shipments/shipments-controller-remove-shipment';

@Injectable({ providedIn: 'root' })
export class ShipmentsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `shipmentsControllerFindAll()` */
  static readonly ShipmentsControllerFindAllPath = '/shipments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shipmentsControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  shipmentsControllerFindAll$Response(params?: ShipmentsControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetShipmentDto>>> {
    return shipmentsControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shipmentsControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shipmentsControllerFindAll(params?: ShipmentsControllerFindAll$Params, context?: HttpContext): Observable<Array<GetShipmentDto>> {
    return this.shipmentsControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetShipmentDto>>): Array<GetShipmentDto> => r.body)
    );
  }

  /** Path part for operation `shipmentsControllerCreateShipment()` */
  static readonly ShipmentsControllerCreateShipmentPath = '/shipments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shipmentsControllerCreateShipment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shipmentsControllerCreateShipment$Response(params: ShipmentsControllerCreateShipment$Params, context?: HttpContext): Observable<StrictHttpResponse<Shipment>> {
    return shipmentsControllerCreateShipment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shipmentsControllerCreateShipment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shipmentsControllerCreateShipment(params: ShipmentsControllerCreateShipment$Params, context?: HttpContext): Observable<Shipment> {
    return this.shipmentsControllerCreateShipment$Response(params, context).pipe(
      map((r: StrictHttpResponse<Shipment>): Shipment => r.body)
    );
  }

  /** Path part for operation `shipmentsControllerRemoveShipment()` */
  static readonly ShipmentsControllerRemoveShipmentPath = '/shipments/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shipmentsControllerRemoveShipment()` instead.
   *
   * This method doesn't expect any request body.
   */
  shipmentsControllerRemoveShipment$Response(params: ShipmentsControllerRemoveShipment$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return shipmentsControllerRemoveShipment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shipmentsControllerRemoveShipment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shipmentsControllerRemoveShipment(params: ShipmentsControllerRemoveShipment$Params, context?: HttpContext): Observable<string> {
    return this.shipmentsControllerRemoveShipment$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
