import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
export class CreateFeatureDto {
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsOptional()
    @IsNumber()
    sortOrder: number;

    @IsNotEmpty()
    @IsNumber()
    serviceId: number;
}
