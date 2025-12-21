import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecurityModule } from './modules/security/security.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, SecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
