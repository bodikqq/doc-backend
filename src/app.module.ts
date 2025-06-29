import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './service/service.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [DatabaseModule, ServiceModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
