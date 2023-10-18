import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetShipmentDto } from './dto/get-shipment.dto';

@ApiBearerAuth()
@ApiTags('Shipments')
@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Post()
  createShipment(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.create(createShipmentDto);
  }

  @Get()
  findAll() {
    return this.shipmentsService.findAll();
  }

  @Get(':id')
  findOneShipment(@Param('id') id: number) : GetShipmentDto {
    return this.shipmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateShipmentDto: UpdateShipmentDto) {
    return this.shipmentsService.update(+id, updateShipmentDto);
  }

  @Delete(':id')
  removeShipment(@Param('id') id: number) {
    return this.shipmentsService.remove(+id);
  }
}
