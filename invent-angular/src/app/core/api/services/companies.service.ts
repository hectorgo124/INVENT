/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { companiesControllerCreate } from '../fn/companies/companies-controller-create';
import { CompaniesControllerCreate$Params } from '../fn/companies/companies-controller-create';
import { companiesControllerFindAll } from '../fn/companies/companies-controller-find-all';
import { CompaniesControllerFindAll$Params } from '../fn/companies/companies-controller-find-all';
import { companiesControllerGetTotalNCompanies } from '../fn/companies/companies-controller-get-total-n-companies';
import { CompaniesControllerGetTotalNCompanies$Params } from '../fn/companies/companies-controller-get-total-n-companies';
import { companiesControllerRemove } from '../fn/companies/companies-controller-remove';
import { CompaniesControllerRemove$Params } from '../fn/companies/companies-controller-remove';
import { companiesControllerTotalShipmentsByCompany } from '../fn/companies/companies-controller-total-shipments-by-company';
import { CompaniesControllerTotalShipmentsByCompany$Params } from '../fn/companies/companies-controller-total-shipments-by-company';
import { companiesControllerUpdate } from '../fn/companies/companies-controller-update';
import { CompaniesControllerUpdate$Params } from '../fn/companies/companies-controller-update';
import { Company } from '../models/company';
import { GetCompanyDto } from '../models/get-company-dto';

@Injectable({ providedIn: 'root' })
export class CompaniesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `companiesControllerFindAll()` */
  static readonly CompaniesControllerFindAllPath = '/companies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerFindAll$Response(params?: CompaniesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Company>>> {
    return companiesControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companiesControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerFindAll(params?: CompaniesControllerFindAll$Params, context?: HttpContext): Observable<Array<Company>> {
    return this.companiesControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Company>>): Array<Company> => r.body)
    );
  }

  /** Path part for operation `companiesControllerCreate()` */
  static readonly CompaniesControllerCreatePath = '/companies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companiesControllerCreate$Response(params: CompaniesControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Company>> {
    return companiesControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companiesControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companiesControllerCreate(params: CompaniesControllerCreate$Params, context?: HttpContext): Observable<Company> {
    return this.companiesControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Company>): Company => r.body)
    );
  }

  /** Path part for operation `companiesControllerGetTotalNCompanies()` */
  static readonly CompaniesControllerGetTotalNCompaniesPath = '/companies/companiesNumber';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesControllerGetTotalNCompanies()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerGetTotalNCompanies$Response(params?: CompaniesControllerGetTotalNCompanies$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return companiesControllerGetTotalNCompanies(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companiesControllerGetTotalNCompanies$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerGetTotalNCompanies(params?: CompaniesControllerGetTotalNCompanies$Params, context?: HttpContext): Observable<number> {
    return this.companiesControllerGetTotalNCompanies$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `companiesControllerTotalShipmentsByCompany()` */
  static readonly CompaniesControllerTotalShipmentsByCompanyPath = '/companies/totalShipmentsByCompany';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesControllerTotalShipmentsByCompany()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerTotalShipmentsByCompany$Response(params?: CompaniesControllerTotalShipmentsByCompany$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return companiesControllerTotalShipmentsByCompany(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companiesControllerTotalShipmentsByCompany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerTotalShipmentsByCompany(params?: CompaniesControllerTotalShipmentsByCompany$Params, context?: HttpContext): Observable<void> {
    return this.companiesControllerTotalShipmentsByCompany$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `companiesControllerRemove()` */
  static readonly CompaniesControllerRemovePath = '/companies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerRemove$Response(params: CompaniesControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyDto>> {
    return companiesControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companiesControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesControllerRemove(params: CompaniesControllerRemove$Params, context?: HttpContext): Observable<GetCompanyDto> {
    return this.companiesControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCompanyDto>): GetCompanyDto => r.body)
    );
  }

  /** Path part for operation `companiesControllerUpdate()` */
  static readonly CompaniesControllerUpdatePath = '/companies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companiesControllerUpdate$Response(params: CompaniesControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyDto>> {
    return companiesControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companiesControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companiesControllerUpdate(params: CompaniesControllerUpdate$Params, context?: HttpContext): Observable<GetCompanyDto> {
    return this.companiesControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCompanyDto>): GetCompanyDto => r.body)
    );
  }

}
