/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { PackageType } from '../models/package-type';
export interface Shipment {
  address: string;
  company: Company;
  companyId: number;
  packageType: PackageType;
  price: string;
  recipient: string;
  sender: string;
  typeId: number;
  weight: string;
  zip: number;
}
