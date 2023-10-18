import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { UsersModule } from 'src/modules/users/users.module';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  providers: [SeedsService, ...databaseProviders],
  imports: [UsersModule],
  exports: [SeedsService]
})
export class SeedsModule {}
