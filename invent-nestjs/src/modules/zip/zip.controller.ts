import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZipService } from './zip.service';
import { CreateZipDto } from './dto/create-zip.dto';
import { UpdateZipDto } from './dto/update-zip.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('ZIP')
@Controller('zip')
export class ZipController {
  constructor(private readonly zipService: ZipService) {}

  @Get()
  findAll() {
    return this.zipService.findAll();
  }

  @Get('available')
  async getAvailableZips() {
    return this.zipService.getAvailable();
  }
}
