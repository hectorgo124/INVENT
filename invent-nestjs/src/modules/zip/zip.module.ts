import { Module } from '@nestjs/common';
import { ZipService } from './zip.service';
import { ZipController } from './zip.controller';
import { zipProvider } from './zip.providers';

@Module({
  controllers: [ZipController],
  providers: [ZipService, ...zipProvider],
})
export class ZipModule {}
