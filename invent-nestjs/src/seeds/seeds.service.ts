import { Injectable, Inject } from '@nestjs/common';
import { Company } from 'src/modules/companies/entities/company.entity';
import { PackageType } from 'src/modules/package-types/entities/package-type.entity';
import { Shipment } from 'src/modules/shipments/entities/shipment.entity';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { users } from './consts';
import { Sequelize } from 'sequelize-typescript';
@Injectable()
export class SeedsService {
  constructor(
    private usersService: UsersService,
    @Inject('SEQUELIZE') private sequelize: Sequelize,
  ) {}

  async seedDataBase() {
    await this.sequelize.drop();

    await this.sequelize.sync().then(() => {
      this.seedUsers();
    });
  }

  async seedUsers() {
    const createUsers = users.map(
      async (user) => await this.usersService.create(user),
    );
  }
}
