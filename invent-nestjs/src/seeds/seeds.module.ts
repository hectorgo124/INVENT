import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { UsersModule } from 'src/modules/users/users.module';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  controllers: [SeedsController],
  providers: [SeedsService, ...databaseProviders],
  imports: [UsersModule]
})
export class SeedsModule {}
