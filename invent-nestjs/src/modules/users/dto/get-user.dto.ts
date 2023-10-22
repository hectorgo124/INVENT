import { OmitType, PartialType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class GetUserDto extends PartialType(OmitType(User, ['password'])) {}
