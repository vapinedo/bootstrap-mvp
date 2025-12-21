import { Injectable } from '@nestjs/common';

export type Role = { id: number; name: string };

@Injectable()
export class RoleService {
  private roles: Role[] = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'user' },
  ];

  findAll(): Role[] {
    return this.roles;
  }

  findOne(id: number): Role | null {
    return this.roles.find((r) => r.id === id) ?? null;
  }

  create(payload: Partial<Role>): Role {
    const nextId = this.roles.length + 1;
    const role: Role = { id: nextId, name: payload.name ?? `role${nextId}` };
    this.roles.push(role);
    return role;
  }

  remove(id: number): boolean {
    const idx = this.roles.findIndex((r) => r.id === id);
    if (idx === -1) return false;
    this.roles.splice(idx, 1);
    return true;
  }
}
