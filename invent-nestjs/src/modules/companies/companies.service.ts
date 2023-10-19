import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { GetCompanyDto } from './dto/get-company.dto';
import { Company } from './entities/company.entity';
import { Zip } from '../zip/entities/zip.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANIES_REPOSITORY') private companiesRepository: typeof Company,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.companiesRepository.create<Company>({
      name: createCompanyDto.name,
      zips: createCompanyDto.zips.map(zipNumber => ({ number: zipNumber })),
    }, {
      include: [Zip]
    });

    return company;
  }

  async findAll() {
    return this.companiesRepository.findAll<Company>();
  }

  async findOne(id: number): Promise<GetCompanyDto> {
    const company = this.companiesRepository.findByPk<Company>(id);

    if(!company) throw new NotFoundException();

    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.findOne(id);

    await company.update(updateCompanyDto);

    return `Company has been updated`;
  }

  async remove(id: number) {
    const company = await this.findOne(id);

    await company.destroy();

    return `Company has been removed`;
  }
}
