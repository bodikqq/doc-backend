import { IsString, IsOptional, IsNumber, IsNotEmpty, IsDate } from 'class-validator';
export class CreateServiceDto {
    @IsString()
    @IsNotEmpty()
    name: string; 

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsOptional()
    @IsString()
    description?: string;

    imageUrl?: string;

    @IsNumber()
    @IsNotEmpty()
    priceUah: number;

    @IsOptional()
    @IsNumber()
    priceEur?: number;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;

    @IsOptional()
    @IsNumber()
    reviewCount?: number;
}
