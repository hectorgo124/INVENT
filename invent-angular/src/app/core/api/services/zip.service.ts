/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Zip } from '../models/zip';
import { zipControllerFindAll } from '../fn/zip/zip-controller-find-all';
import { ZipControllerFindAll$Params } from '../fn/zip/zip-controller-find-all';
import { zipControllerGetAvailableZips } from '../fn/zip/zip-controller-get-available-zips';
import { ZipControllerGetAvailableZips$Params } from '../fn/zip/zip-controller-get-available-zips';

@Injectable({ providedIn: 'root' })
export class ZipService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `zipControllerFindAll()` */
  static readonly ZipControllerFindAllPath = '/zip';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zipControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerFindAll$Response(params?: ZipControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Zip>>> {
    return zipControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zipControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerFindAll(params?: ZipControllerFindAll$Params, context?: HttpContext): Observable<Array<Zip>> {
    return this.zipControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Zip>>): Array<Zip> => r.body)
    );
  }

  /** Path part for operation `zipControllerGetAvailableZips()` */
  static readonly ZipControllerGetAvailableZipsPath = '/zip/available';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zipControllerGetAvailableZips()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerGetAvailableZips$Response(params?: ZipControllerGetAvailableZips$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<number>>> {
    return zipControllerGetAvailableZips(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zipControllerGetAvailableZips$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerGetAvailableZips(params?: ZipControllerGetAvailableZips$Params, context?: HttpContext): Observable<Array<number>> {
    return this.zipControllerGetAvailableZips$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

}
