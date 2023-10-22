import { Sequelize } from 'sequelize-typescript';
import { Company } from 'src/modules/companies/entities/company.entity';
import { PackageType } from 'src/modules/package-types/entities/package-type.entity';
import { Shipment } from 'src/modules/shipments/entities/shipment.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Zip } from 'src/modules/zip/entities/zip.entity';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PORT, DATABASE_USER } from 'src/constants';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => { 
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        username: DATABASE_USER,
        password: '',
        database: DATABASE_NAME,
      });
      sequelize.addModels([User, Company, PackageType, Shipment, Zip]);
      await sequelize.sync();
      return sequelize;
    },
  },
];