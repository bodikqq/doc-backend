import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { DatabaseModule } from '../database/database.module';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [DatabaseModule, MailerModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
