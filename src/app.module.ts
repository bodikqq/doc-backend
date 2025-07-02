import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './service/service.module';
import { FeatureModule } from './feature/feature.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [DatabaseModule, ServiceModule, FeatureModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
