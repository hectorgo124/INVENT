import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsController } from './shipments.controller';
import { shipmentsProvider } from './shipments.providers';

@Module({
  controllers: [ShipmentsController],
  exports: [ShipmentsService],
  providers: [ShipmentsService, ...shipmentsProvider],
})
export class ShipmentsModule {}
