import { Controller, Get, Param, Post, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { PermissionService } from './permission.service';
import type { Permission } from './permission.service';

@Controller('security/permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  getAll(): Permission[] {
    return this.permissionService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Permission | null {
    return this.permissionService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Permission>): Permission {
    return this.permissionService.create(body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): { deleted: boolean } {
    return { deleted: this.permissionService.remove(id) };
  }
}
