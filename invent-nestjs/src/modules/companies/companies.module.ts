import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { companiesProvider } from './companies.providers';
import { zipProvider } from '../zip/zip.providers';

@Module({
  controllers: [CompaniesController],
  exports: [CompaniesService],
  providers: [CompaniesService, ...companiesProvider],
})
export class CompaniesModule {}
