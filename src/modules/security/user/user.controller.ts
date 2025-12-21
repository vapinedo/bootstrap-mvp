import { Controller, Get, Param, Post, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from '@prisma/client';

@Controller('security/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<User | null> {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() body: Partial<User>): Promise<User> {
    return await this.userService.create(body as any);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ deleted: boolean }> {
    try {
      await this.userService.remove(id);
      return { deleted: true };
    } catch {
      return { deleted: false };
    }
  }
}
