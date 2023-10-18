import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInUserDto } from 'src/modules/users/dto/sign-in-user.dto';
import { Public } from './public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInUser: SignInUserDto) {
    return this.authService.signIn(signInUser.username, signInUser.password);
  }
}
