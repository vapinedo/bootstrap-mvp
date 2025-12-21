import { Controller, Get, Param, Post, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import type { Role } from './role.service';

@Controller('security/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  getAll(): Role[] {
    return this.roleService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Role | null {
    return this.roleService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Role>): Role {
    return this.roleService.create(body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): { deleted: boolean } {
    return { deleted: this.roleService.remove(id) };
  }
}
