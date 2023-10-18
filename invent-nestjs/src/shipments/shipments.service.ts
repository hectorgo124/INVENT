import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { GetShipmentDto } from './dto/get-shipment.dto';

@Injectable()
export class ShipmentsService {
  create(createShipmentDto: CreateShipmentDto) {
    return 'This action adds a new shipment';
  }

  findAll() {
    return `This action returns all shipments`;
  }

  findOne(id: number) : GetShipmentDto {
    return {
      address: 'Ejemplo address',
      id: 123,
      recipientName: 'Nombre',
      senderName: 'Nombre',
      weight: 122,
      zip: 46680
    };
  }

  update(id: number, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipment`;
  }
}
