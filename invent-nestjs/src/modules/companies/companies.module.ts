import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { companiesProvider } from './companies.providers';
import { zipProvider } from '../zip/zip.providers';
import { ZipModule } from '../zip/zip.module';

@Module({
  controllers: [CompaniesController],
  exports: [CompaniesService],
  providers: [CompaniesService, ...companiesProvider],
  imports: [ZipModule]
})
export class CompaniesModule {}
