import { Module } from '@nestjs/common';

import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { RoleService } from './rol/role.service';
import { RoleController } from './rol/role.controller';
import { PermissionService } from './permision/permission.service';
import { PermissionController } from './permision/permission.controller';

@Module({
  imports: [],
  controllers: [
    UserController,
    RoleController,
    PermissionController,
  ],
  providers: [
    UserService,
    RoleService,
    PermissionService,
  ],
  exports: [UserService, RoleService, PermissionService],
})
export class SecurityModule {}
