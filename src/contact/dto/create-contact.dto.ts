import {IsString,IsOptional,isBoolean,IsNotEmpty, IsBoolean, isObject, IsNumber, IsDate, } from 'class-validator'
import { Type } from 'class-transformer';

export class CreateContactDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsNumber()
    serviceId?: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    service_name?: string;

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsOptional()
    @Type(() => Date) 
    @IsDate()
    date?: Date;

    @IsOptional()
    createdAt?: Date;

    @IsOptional()
    @IsBoolean()    
    answered?: boolean;
}
