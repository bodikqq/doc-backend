import {IsString,IsOptional,isBoolean,IsNotEmpty, IsBoolean, isObject, IsNumber, IsDate, } from 'class-validator'
import { Type, Transform } from 'class-transformer';

export class CreateContactDto {
    @IsOptional()
    @Transform(({ value }) => value === '' ? null : value)
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsOptional()
    @Transform(({ value }) => value === '' ? null : value)
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsOptional()
    @Transform(({ value }) => value === '' ? null : value)
    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsNumber()
    serviceId?: number;

    @IsOptional()
    @Transform(({ value }) => value === '' ? undefined : value)
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
