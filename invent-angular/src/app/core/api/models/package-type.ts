/* tslint:disable */
/* eslint-disable */
import { Shipment } from '../models/shipment';
export interface PackageType {
  description: string;
  formula: string;
  max: number;
  min: number;
  shipments: Array<Shipment>;
}
