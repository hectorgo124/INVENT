/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { PackageType } from '../models/package-type';
export interface GetShipmentDto {
  address?: string;
  company?: Company;
  companyId?: number;
  packageType?: PackageType;
  price?: string;
  recipientName?: string;
  senderName?: string;
  typeId?: number;
  weight?: string;
  zip?: number;
}
