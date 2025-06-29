import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { create } from 'domain';
import { Prisma } from 'generated/prisma';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class ServiceService {
    constructor(private readonly databaseService: DatabaseService) {}
    async getAllServices(category?: string) {
    try {
      const services = await this.databaseService.service.findMany({
        where: category ? { category } : undefined,   // equals is implicit
      });

      if (category && services.length === 0) {
        throw new NotFoundException(`No services found for category "${category}"`);
      }

      return services;
    } catch (error) {
      // Let the 404 you just created bubble up unchanged
      if (error instanceof NotFoundException) throw error;

      // Pass through Prisma-specific errors if you want finer-grained handling
      if (error instanceof PrismaClientKnownRequestError) {
        // …inspect error.code here if needed
      }

      throw new InternalServerErrorException('Could not retrieve services');
    }
  }

    async getServiceById(id: number){
        const service = await this.databaseService.service.findUnique({
            where: { id }
        });

        if (!service) {
            throw new NotFoundException(`Service with id ${id} not found`);
        }

        return service;
    }

    async createService(createServiceDto: Prisma.ServiceCreateInput){
        return this.databaseService.service.create({
            data: createServiceDto
        });
    }


    async updateService(
    id: number,
    dto: Prisma.ServiceUpdateInput,
  ) {
    try {
      // Will throw if no record matches `where`
      return await this.databaseService.service.update({
        where: { id },
        data: dto,
      });
    } catch (err) {
      // P2025  => “Record to update not found.”
      if (err.code === 'P2025') {
        throw new NotFoundException(`Service with id ${id} not found`);
      }

      throw new InternalServerErrorException('Could not update service');
    }
  }
}

