/* tslint:disable */
/* eslint-disable */
import { Shipment } from '../models/shipment';
import { Zip } from '../models/zip';
export interface Company {
  name: string;
  shipments: Array<Shipment>;
  zips: Array<Zip>;
}
