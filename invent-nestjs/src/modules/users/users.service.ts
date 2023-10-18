import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { where } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    return await this.usersRepository.create<User>({ ...createUserDto });
  }

  async findAll() {
    return this.usersRepository.findAll<User>();
  }

  findOne(username: string): Promise<GetUserDto> {
    return this.usersRepository.findOne<User>({
      where: {
        username: username,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
