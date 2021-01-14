import { Module } from '@nestjs/common';
import { ClientsController } from './controllers/clients/clients.controller';
import { Client } from './entities/clients.entity';
import { ClientsService } from './services/clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client])
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
