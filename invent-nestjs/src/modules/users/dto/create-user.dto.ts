import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { User } from "../entities/user.entity";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    username: string;
    
    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
        required: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    password: string;
    
}
