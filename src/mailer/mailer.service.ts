import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/email.dto';
import Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MailerService {
    constructor(private config: ConfigService) {}
    emailTransport() {
        console.log(this.config.get<string>('MAIL_USER'), "  ", this.config.get<string>('MAIL_PASSWORD'), "   ",this.config.get<string>('FOO'))
        const transporter = nodemailer.createTransport({
            host: this.config.get<string>('MAIL_HOST'),
            auth: {
                user: this.config.get<string>('MAIL_USER'),
                pass: this.config.get<string>('MAIL_PASSWORD'),
            },
        });

        return transporter;
    }

    async sendEmail(dto: SendEmailDto) {
        const { recipients, subject, html } = dto;

        const transport = this.emailTransport();

        const options: nodemailer.SendMailOptions = {
            from: process.env.MAIL_USER,
            to: recipients,
            subject: subject,
            html: html,
        };
        try {
            await transport.sendMail(options);
            console.log('Email sent successfully');
        } catch (error) {
            console.log('Error sending mail: ', error);
        }
    }
}
