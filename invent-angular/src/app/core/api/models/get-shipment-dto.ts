/* tslint:disable */
/* eslint-disable */
import { PackageType } from '../models/package-type';
export interface GetShipmentDto {
  address?: string;
  company?: PackageType;
  companyId?: number;
  price?: number;
  recipientName?: string;
  senderName?: string;
  weight?: number;
  zip?: number;
}
