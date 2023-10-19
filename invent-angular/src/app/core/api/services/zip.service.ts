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
import { zipControllerCreate } from '../fn/zip/zip-controller-create';
import { ZipControllerCreate$Params } from '../fn/zip/zip-controller-create';
import { zipControllerFindAll } from '../fn/zip/zip-controller-find-all';
import { ZipControllerFindAll$Params } from '../fn/zip/zip-controller-find-all';
import { zipControllerFindOne } from '../fn/zip/zip-controller-find-one';
import { ZipControllerFindOne$Params } from '../fn/zip/zip-controller-find-one';
import { zipControllerRemove } from '../fn/zip/zip-controller-remove';
import { ZipControllerRemove$Params } from '../fn/zip/zip-controller-remove';
import { zipControllerUpdate } from '../fn/zip/zip-controller-update';
import { ZipControllerUpdate$Params } from '../fn/zip/zip-controller-update';

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

  /** Path part for operation `zipControllerCreate()` */
  static readonly ZipControllerCreatePath = '/zip';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zipControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zipControllerCreate$Response(params: ZipControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return zipControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zipControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zipControllerCreate(params: ZipControllerCreate$Params, context?: HttpContext): Observable<string> {
    return this.zipControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `zipControllerFindOne()` */
  static readonly ZipControllerFindOnePath = '/zip/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zipControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerFindOne$Response(params: ZipControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return zipControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zipControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerFindOne(params: ZipControllerFindOne$Params, context?: HttpContext): Observable<string> {
    return this.zipControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `zipControllerRemove()` */
  static readonly ZipControllerRemovePath = '/zip/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zipControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerRemove$Response(params: ZipControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return zipControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zipControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zipControllerRemove(params: ZipControllerRemove$Params, context?: HttpContext): Observable<string> {
    return this.zipControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `zipControllerUpdate()` */
  static readonly ZipControllerUpdatePath = '/zip/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zipControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zipControllerUpdate$Response(params: ZipControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return zipControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zipControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zipControllerUpdate(params: ZipControllerUpdate$Params, context?: HttpContext): Observable<string> {
    return this.zipControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
