import { Injectable } from '@nestjs/common';

export type Permission = { id: number; name: string };

@Injectable()
export class PermissionService {
  private permissions: Permission[] = [
    { id: 1, name: 'read' },
    { id: 2, name: 'write' },
  ];

  findAll(): Permission[] {
    return this.permissions;
  }

  findOne(id: number): Permission | null {
    return this.permissions.find((p) => p.id === id) ?? null;
  }

  create(payload: Partial<Permission>): Permission {
    const nextId = this.permissions.length + 1;
    const perm: Permission = { id: nextId, name: payload.name ?? `perm${nextId}` };
    this.permissions.push(perm);
    return perm;
  }

  remove(id: number): boolean {
    const idx = this.permissions.findIndex((p) => p.id === id);
    if (idx === -1) return false;
    this.permissions.splice(idx, 1);
    return true;
  }
}
