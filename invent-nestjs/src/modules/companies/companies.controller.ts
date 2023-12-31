import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetCompanyDto } from './dto/get-company.dto';
import { Company } from './entities/company.entity';

@ApiBearerAuth()
@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }
  
  @Get('companiesNumber')
  getTotalNCompanies() : Promise<number> {
    return this.companiesService.getTotalNCompanies();
  }

  @Get('totalShipmentsByCompany')
  totalShipmentsByCompany() : Promise<{company: string, totalShipments: any}[]>{
    return this.companiesService.getTotalShipmentsByCompany();
  }

  @Get()
  findAll() : Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}
