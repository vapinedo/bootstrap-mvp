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

  async create(payload: { username?: string; email?: string; password?: string }) {
    // Se asume que el password ya viene hasheado
    return this.prisma.user.create({ data: payload as any });
  }

  remove(id: number) {
  return this.prisma.user.delete({ where: { id } });
  }
  
    async findByEmail(email: string) {
      return this.prisma.user.findUnique({ where: { email } });
    }
}
