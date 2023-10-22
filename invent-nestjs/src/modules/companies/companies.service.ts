import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { GetCompanyDto } from './dto/get-company.dto';
import { Company } from './entities/company.entity';
import { Zip } from '../zip/entities/zip.entity';
import { Response } from 'express';
import { ZipService } from '../zip/zip.service';
import { zip } from 'rxjs';
import { Shipment } from '../shipments/entities/shipment.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANIES_REPOSITORY') private companiesRepository: typeof Company,
    private zipsService: ZipService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.companiesRepository.create<Company>(
      {
        name: createCompanyDto.name,
        zips: createCompanyDto.zips.map((zipNumber) => ({ number: zipNumber })),
      },
      {
        include: [Zip],
      },
    );

    return company;
  }

  async findAll() {
    return this.companiesRepository.findAll<Company>();
  }

  async findOne(id: number): Promise<GetCompanyDto> {
    const company = this.companiesRepository.findByPk<Company>(id);

    if (!company) throw new NotFoundException();

    return company;
  }
  async getTotalShipmentsByCompany() {
    const companies = await this.companiesRepository.findAll({
      include: [
        {
          model: Shipment,
          attributes: [],
        },
      ],
      attributes: [
        'id',
        'name',
        [Sequelize.fn('COUNT', Sequelize.col('shipments.id')), 'totalShipments'],
      ],
      group: ['Company.id', 'Company.name'],
    });
  
    return companies.map((company) => ({
      company: company.get('name'),
      totalShipments: company.get('totalShipments'),
    }));
  }
  
  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.findOne(id);
    await this.zipsService.deleteFromCompany(id);

    updateCompanyDto.zips.forEach(async (zip) => {
      await this.zipsService.createZip(zip);
    });

    await company.update(updateCompanyDto);

    await company.save();

    return company;
  }

  async remove(id: number) {
    const company = await this.findOne(id);

    await company.destroy();

    return company;
  }
}
