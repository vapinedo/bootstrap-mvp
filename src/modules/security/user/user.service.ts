import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
  return this.prisma.user.findMany();
  }

  findOne(id: number) {
  return this.prisma.user.findUnique({ where: { id } });
  }

  create(payload: { username?: string; email?: string; password?: string }) {
    // map payload to your schema fields; here we assume `email` and `password` exist in schema
  return this.prisma.user.create({ data: payload as any });
  }

  remove(id: number) {
  return this.prisma.user.delete({ where: { id } });
  }
}
