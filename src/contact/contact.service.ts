import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class ContactService {
  constructor(private readonly databaseService: DatabaseService) { }
  async create(createContactDto: CreateContactDto) {
    return this.databaseService.contact.create(
      {
        data: createContactDto,
      }
    )
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
