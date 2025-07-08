import {IsString,IsOptional,isBoolean,IsNotEmpty, IsBoolean} from 'class-validator'

export class CreateContactDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    usersName?: string;


    @IsNotEmpty()
    @IsString()
    contact: string;

    @IsNotEmpty()
    @IsString()
    text: string;

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    @IsBoolean()    
    answered?: boolean;
}
