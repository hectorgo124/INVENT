import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { companiesProvider } from './companies.providers';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, ...companiesProvider],
})
export class CompaniesModule {}
