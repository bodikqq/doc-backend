import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './dto/email.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendMail(@Body() dto: SendEmailDto) {
    await this.mailerService.sendEmail(dto);
    return { message: 'Email sent successfully' };
  }
}
