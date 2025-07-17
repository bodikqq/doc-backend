import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './service/service.module';
import { FeatureModule } from './feature/feature.module';
import { ContactModule } from './contact/contact.module';
import { MailerModule } from './mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, ServiceModule, FeatureModule, ContactModule, MailerModule, ConfigModule.forRoot({
      isGlobal: true,             // makes ConfigService available everywhere
      envFilePath: '.env',        // (default) path to your env file
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
