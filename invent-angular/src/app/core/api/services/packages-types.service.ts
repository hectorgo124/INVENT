/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PackageType } from '../models/package-type';
import { packageTypesControllerFindAll } from '../fn/packages-types/package-types-controller-find-all';
import { PackageTypesControllerFindAll$Params } from '../fn/packages-types/package-types-controller-find-all';

@Injectable({ providedIn: 'root' })
export class PackagesTypesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `packageTypesControllerFindAll()` */
  static readonly PackageTypesControllerFindAllPath = '/package-types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `packageTypesControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  packageTypesControllerFindAll$Response(params?: PackageTypesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PackageType>>> {
    return packageTypesControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `packageTypesControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  packageTypesControllerFindAll(params?: PackageTypesControllerFindAll$Params, context?: HttpContext): Observable<Array<PackageType>> {
    return this.packageTypesControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PackageType>>): Array<PackageType> => r.body)
    );
  }

}
