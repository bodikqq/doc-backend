import { Body, Controller, Get, Param, Post,ParseIntPipe, ValidationPipe, Patch, Query } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto   } from './dto/update-service.dto';
@Controller('service')
export class ServiceController {

    constructor(private readonly serviceService: ServiceService) {}

    @Get()
    getAllServices(@Query('category') category?: string) {
        return this.serviceService.getAllServices(category);
    }

    @Get(':id')
    getServiceById(@Param('id',ParseIntPipe) id: number){
        return this.serviceService.getServiceById(id);
    }
    @Post()
    createService(@Body(ValidationPipe) createServiceDto: CreateServiceDto) {
        return this.serviceService.createService(createServiceDto);
    }

    @Patch(':id')
    updateService(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateServiceDto: UpdateServiceDto) {
        return this.serviceService.updateService(id, updateServiceDto);
    }
}