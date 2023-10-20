import {
  Injectable,
  Inject,
  NotFoundException,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { GetShipmentDto } from './dto/get-shipment.dto';
import { Shipment } from './entities/shipment.entity';
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

  async findAll(page: number, limit: any): Promise<GetShipmentDto[]> {
    
    limit = parseInt(limit.toString()); // Se que no es lo más correcto, pero recibo el limite como un string aunque sea un número.

    if (isNaN(page) || isNaN(limit)) {
      throw new BadRequestException('Invalid pagination parameters');
    }

    const shipments = await this.shipmentsRepository.findAll({
      offset:((page-1)*limit),
      limit : limit,
      subQuery:false
    });

    if (!shipments) {
      throw new NotFoundException(`No shipments found`);
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

    await shipment.destroy();

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
