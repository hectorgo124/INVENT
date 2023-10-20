import { Injectable, Inject, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<GetUserDto[]> {
    return this.usersRepository.findAll<User>();
  }

  findOne(username: string): Promise<GetUserDto> {
    const user = this.usersRepository.findOne<User>({
      where: {
        username: username,
      },
    });

    if(!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findByPk(id);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);

    await user.update(updateUserDto);

    return `User has been updated`;
  }

  async remove(id: number) {
    const user = await this.usersRepository.findByPk(id);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    await user.destroy();

    return `User has been removed`;
  }
}
