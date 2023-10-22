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
import { Company } from '../companies/entities/company.entity';

@Injectable()
export class ShipmentsService {
  constructor(
    @Inject('SHIPMENTS_REPOSITORY')
    private shipmentsRepository: typeof Shipment,
  ) {}

  create(createShipmentDto: CreateShipmentDto) {
    return this.shipmentsRepository.create<Shipment>({ ...createShipmentDto });
  }

  async findAll(
    page: number,
    limit: any,
  ): Promise<{ shipmentsDTO: GetShipmentDto[]; total: number }> {
    limit = parseInt(limit.toString()); // Se que no es lo más correcto, pero recibo el limite como un string aunque sea un número.

    if (isNaN(page) || isNaN(limit)) {
      throw new BadRequestException('Invalid pagination parameters');
    }

    const [shipments, total] = await Promise.all([
      this.shipmentsRepository.findAll({
        offset: (page - 1) * limit,
        limit: limit,
        order: [['createdAt', 'DESC']],
        include: [{ model: Company, as: 'company' }],
      }),
      this.shipmentsRepository.count(),
    ]);

    if (!shipments) {
      throw new NotFoundException(`No shipments found`);
    }

    const shipmentsDTO = shipments.map((shipment) => this.toDTO(shipment));

    return { shipmentsDTO, total };
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

    return shipment;
  }

  async getLastWeekDailyShipments() {
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 4);
  
    const dateRange = [];
    let currentDate = new Date(oneWeekAgo);
  
    while (currentDate <= today) {
      dateRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
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

    const resultData = dateRange.map((date) => {
      const formattedDate = date.toISOString().slice(0, 10);

      const match = dailyData.find((item) => item.dataValues.date === formattedDate);
      return {
        date: formattedDate,
        count: match ? match.dataValues.count : 0,
      };
    });
  
    return resultData;
  }
  

  toDTO(shipment: Shipment): GetShipmentDto {
    const companyName : string = shipment.company.name;
    return {
      id: shipment.id,
      address: shipment.address,
      zip: shipment.zip,
      sender: shipment.sender,
      recipient: shipment.recipient,
      weight: shipment.weight,
      price: shipment.price,
      companyName
    };
  }
}
