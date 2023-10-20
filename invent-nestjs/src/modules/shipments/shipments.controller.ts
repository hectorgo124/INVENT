import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
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
  findAll(
    @Query('page') page : number = 1,
    @Query('limit') limit : number = 10,
  ): Promise<GetShipmentDto[]> {
    return this.shipmentsService.findAll((page),(limit));
  }

  @Delete(':id')
  removeShipment(@Param('id') id: number) {
    return this.shipmentsService.remove(+id);
  }

  @Get('weekShipments')
  async getDailyShipmentsData() {
    const data = await this.shipmentsService.getLastWeekDialyShipments();
    return data;
  }
}
