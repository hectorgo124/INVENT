import { PartialType } from '@nestjs/swagger';
import { Shipment } from '../entities/shipment.entity';

export class GetShipmentDto extends PartialType(Shipment) {}
