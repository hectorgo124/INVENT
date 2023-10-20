import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { GetShipmentDto } from './dto/get-shipment.dto';
import { Shipment } from './entities/shipment.entity';
import { NotFoundError } from 'rxjs';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

@Injectable()
export class ShipmentsService {
  constructor(
    @Inject('SHIPMENTS_REPOSITORY')
    private shipmentsRepository: typeof Shipment,
  ) {}

  create(createShipmentDto: CreateShipmentDto) {
    return this.shipmentsRepository.create<Shipment>({ ...createShipmentDto });
  }

  async findAll(): Promise<GetShipmentDto[]> {
    const shipments = await this.shipmentsRepository.findAll<Shipment>();

    if (!shipments) {
      throw new NotFoundException(`No shipments yet`);
    }

    return shipments;
  }

  async findOne(id: number): Promise<GetShipmentDto> {
    const shipment = await this.shipmentsRepository.findOne<Shipment>({
      where: {
        id: id,
      },
    });

    if (!shipment) {
      throw new NotFoundException(`Shipment not found`);
    }

    return shipment;
  }

  async remove(id: number) {
    const shipment = await this.shipmentsRepository.findByPk(id);

    if (!shipment) {
      throw new NotFoundException(`Shimpent not found`);
    }

    await shipment.destroy()

    return `Shipment has been removed`;
  }

  async getLastWeekDialyShipments() {
     const today = new Date();

     const oneWeekAgo = new Date(today);
     oneWeekAgo.setDate(today.getDate() - 7);
 
     const dailyData = await Shipment.findAll({
       where: {
         createdAt: {
           [Op.between]: [oneWeekAgo, today],
         },
       },
       attributes: [
         [Sequelize.literal('DATE(createdAt)'), 'date'],
         [Sequelize.literal('COUNT(*)'), 'count'],
       ],
       group: ['date'],
     });
 
     return dailyData;
  }
}
