import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProvider } from './users.providers';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService, ...usersProvider],
})
export class UsersModule {}
