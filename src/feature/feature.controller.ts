import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe, ValidationPipe, Query } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Post()
  create(@Body(ValidationPipe) createFeatureDto: CreateFeatureDto) {
    return this.featureService.create(createFeatureDto);
  }

  @Get()
  findAll(@Query('serviceId',new ParseIntPipe({ optional: true })) serviceId?: number) {
    return this.featureService.findAll(serviceId);
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.featureService.findOne(id);
  }

  @Patch(':id')
  updateOrder(@Param('id', ParseIntPipe) id: number, @Body() updateFeatureDto: UpdateFeatureDto) {
    return this.featureService.updateOrder(id, updateFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.featureService.remove(id);
  }
}
