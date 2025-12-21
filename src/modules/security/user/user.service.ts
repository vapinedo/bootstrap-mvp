import { Injectable } from '@nestjs/common';

export type User = { id: number; username: string };

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, username: 'alice' },
    { id: 2, username: 'bob' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | null {
    return this.users.find((u) => u.id === id) ?? null;
  }

  create(payload: Partial<User>): User {
    const nextId = this.users.length + 1;
    const user: User = { id: nextId, username: payload.username ?? `user${nextId}` };
    this.users.push(user);
    return user;
  }

  remove(id: number): boolean {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx === -1) return false;
    this.users.splice(idx, 1);
    return true;
  }
}
