import { Injectable, Inject } from '@nestjs/common';
import { CreateZipDto } from './dto/create-zip.dto';
import { UpdateZipDto } from './dto/update-zip.dto';
import { Zip } from './entities/zip.entity';

@Injectable()
export class ZipService {
  constructor(@Inject('ZIP_REPOSITORY') private zipRepository: typeof Zip) {}

  create(createZipDto: CreateZipDto) {
    return 'This action adds a new zip';
  }

  findAll() {
    return this.zipRepository.findAll<Zip>();
  }

  findOne(id: number) {
    return `This action returns a #${id} zip`;
  }

  update(id: number, updateZipDto: UpdateZipDto) {
    return `This action updates a #${id} zip`;
  }

  remove(id: number) {
    return `This action removes a #${id} zip`;
  }
}
