/* tslint:disable */
/* eslint-disable */
import { Shipment } from '../models/shipment';
import { Zip } from '../models/zip';
export interface GetCompanyDto {
  name?: string;
  shipments?: Array<Shipment>;
  zips?: Array<Zip>;
}
