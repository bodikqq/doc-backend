import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class FeatureService {
constructor(private readonly databaseService: DatabaseService) {}

  create(createFeatureDto: CreateFeatureDto) {
    return this.databaseService.serviceFeature.create(
      {
        data: createFeatureDto,
      }
    )
  }

  async findAll(serviceId?: number) {
    const features = await this.databaseService.serviceFeature.findMany({
      where: serviceId ? { serviceId } : undefined,
    });

    // If the caller filtered by serviceId and we got nothing back, fail fast
    if (serviceId && features.length === 0) {
      throw new NotFoundException(`servise with id ${serviceId} has no features or doesen't exist`);
    }

    return features;
  }

  async findOne(id: number) {
    const feature = await this.databaseService.serviceFeature.findUnique({
    where: { id },
    });

    if (!feature) {
      throw new NotFoundException(`Feature with id ${id} not found`);
    }
    return feature;
  }

  async updateOrder(id: number, updateFeatureDto: UpdateFeatureDto) {
    try{
    const feature = await this.databaseService.serviceFeature.update({
      where: { id },
      data: { sortOrder: updateFeatureDto.updatedOrder },
    });
    return feature;
  }
  catch (error) {
    if (error.code === 'P2025') {
      throw new NotFoundException(`Feature with id ${id} not found`);
    }   
    throw error;
  }
  }
  async remove(id: number) {
    try{
      const feature = await this.databaseService.serviceFeature.delete({
        where: { id },
      });
      return feature;
    }
    catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Feature with id ${id} not found`);
      }   
      throw error;
    }
  }
}
