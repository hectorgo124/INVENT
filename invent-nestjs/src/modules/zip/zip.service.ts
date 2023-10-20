import { Injectable, Inject } from '@nestjs/common';
import { CreateZipDto } from './dto/create-zip.dto';
import { UpdateZipDto } from './dto/update-zip.dto';
import { Zip } from './entities/zip.entity';

@Injectable()
export class ZipService {
  constructor(@Inject('ZIP_REPOSITORY') private zipRepository: typeof Zip) {}

  async findAll() {
    return await this.zipRepository.findAll<Zip>();
  }

  async getAvailable() {
    const usedZips = await this.zipRepository.findAll({
      attributes: ['number'],
    });

    const usedNumbers = usedZips.map((zip) => zip.number);
    const allNumbers = Array.from({ length: 52 }, (_, i) => i + 1);

    const availableNumbers = allNumbers.filter(
      (number) => !usedNumbers.includes(number),
    );

    return availableNumbers;
  }
}
