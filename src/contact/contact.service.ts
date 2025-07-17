import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { DatabaseService } from 'src/database/database.service';
import { MailerService } from 'src/mailer/mailer.service';
import { SendEmailDto } from 'src/mailer/dto/email.dto';
@Injectable()
export class ContactService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly mailer: MailerService,
  ) { }
  async create(createContactDto: CreateContactDto) {
    // 1) save to DB
    const contact = await this.databaseService.contact.create({
      data: createContactDto,
    });

    // 2) build email payload
    const emailPayload: SendEmailDto = {
      // TODO: replace with your real internal recipients or pull from config/env
      recipients: ['bohdan.kuchinka@student.upjs.sk'],
      subject: `New contact form submission from ${createContactDto.name ?? createContactDto.email}`,
      html: `
        <h1>New Contact Request</h1>
        <ul>
          <li><strong>Name:</strong> ${createContactDto.name ?? '—'}</li>
          <li><strong>Email:</strong> ${createContactDto.email ?? '—'}</li>
          <li><strong>Phone:</strong> ${createContactDto.phone ?? '—'}</li>
          <li><strong>Service ID:</strong> ${createContactDto.serviceId ?? '—'}</li>
          <li><strong>Service Name:</strong> ${createContactDto.service_name ?? '—'}</li>
          <li><strong>Message:</strong> ${createContactDto.message}</li>
          <li><strong>Date:</strong> ${createContactDto.date?.toISOString() ?? '—'}</li>
        </ul>
      `,
      text: `
New Contact Request

Name: ${createContactDto.name ?? '—'}
Email: ${createContactDto.email ?? '—'}
Phone: ${createContactDto.phone ?? '—'}
Service ID: ${createContactDto.serviceId ?? '—'}
Service Name: ${createContactDto.service_name ?? '—'}
Message: ${createContactDto.message}
Date: ${createContactDto.date?.toISOString() ?? '—'}
      `,
    };

    // 3) send it off
    await this.mailer.sendEmail(emailPayload);

    return contact;
  }

  async findAll() {
    try {
      const contacts = await this.databaseService.contact.findMany();
      if (!contacts || contacts.length === 0) {
        throw new Error('No contacts found');
      }
      return contacts;
    }
    catch (error) {
      // Handle specific errors if needed
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const contact = await this.databaseService.contact.findUnique({
        where: { id }
      });
      if (!contact) {
        throw new NotFoundException(`Contact with id ${id} not found`);
      }
      return contact;
    }
    catch (error) {
      // Handle specific errors if needed
      throw error;
    }
  }
  async seen(id: number) {
    try {
      const contact = await this.databaseService.contact.update({
        where: { id },
        data: { answered: true }
      });
      return contact;
    }
    catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Contact with id ${id} not found`);
      }
      throw error;
    }
  }
  async remove(id: number) {
    try {
      const contact = await this.databaseService.contact.delete({
        where: { id }
      });
      if (!contact) {
        throw new NotFoundException(`Contact with id ${id} not found`);
      }
      return contact;
    }
    catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Contact with id ${id} not found`);
      }
      // Handle specific errors if needed
      throw error;
    }
  }
}
