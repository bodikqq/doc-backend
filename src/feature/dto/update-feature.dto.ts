import { PartialType,  } from '@nestjs/mapped-types';
import { CreateFeatureDto } from './create-feature.dto';
import { IsNumber,IsNotEmpty,IsPositive } from 'class-validator';
export class UpdateFeatureDto extends PartialType(CreateFeatureDto) {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    updatedOrder: number;
}
