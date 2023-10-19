import { Injectable, Inject } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { users, companies, packageType, shipments } from './constants';
import { Sequelize } from 'sequelize-typescript';
import { CompaniesService } from 'src/modules/companies/companies.service';
import { ShipmentsService } from 'src/modules/shipments/shipments.service';
import { PackageTypesService } from 'src/modules/package-types/package-types.service';
@Injectable()
export class SeedsService {
  constructor(
    @Inject('SEQUELIZE') private sequelize: Sequelize,
    private usersService: UsersService,
    private companiesService: CompaniesService,
    private shipmentsService: ShipmentsService,
    private packageTypeService: PackageTypesService,
  ) {}

  async seedDataBase() {
    await this.sequelize.drop();

    await this.sequelize.sync().then(() => {
      this.seedUsers();
      this.seedCompanies();
      this.seedPackagesTypes();
      this.seedShipments();
    });
  }

  async seedUsers() {
    const createUsers = users.map(
      async (user) => await this.usersService.create(user),
    );
  }

  async seedCompanies() {
    const createCompanies = companies.map(
      async (company) => await this.companiesService.create(company),
    );
  }

  async seedShipments() {
    const createShipments = shipments.map(
      async (shipment) => await this.shipmentsService.create(shipment),
    );
  }
  async seedPackagesTypes() {
    const createTypes = packageType.map(
      async (type) => await this.packageTypeService.create(type),
    );
  }
}
