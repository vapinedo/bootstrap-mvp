import { Controller, Get, Param, Post, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './user.service';

@Controller('security/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): User | null {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<User>): User {
    return this.userService.create(body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): { deleted: boolean } {
    return { deleted: this.userService.remove(id) };
  }
}
