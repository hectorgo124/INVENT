/* tslint:disable */
/* eslint-disable */
import { Shipment } from '../models/shipment';
export interface GetPackageTypeDto {
  description?: string;
  formula?: string;
  max?: string;
  min?: string;
  shipments?: Array<Shipment>;
}
