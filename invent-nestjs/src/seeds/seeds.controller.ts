import { Controller, Get } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SEED DATABASE')
@Controller('seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @Get()
  async seedData() {
    await this.seedsService.seedDataBase();
    return 'Datos de prueba sembrados exitosamente.';
  }
}
